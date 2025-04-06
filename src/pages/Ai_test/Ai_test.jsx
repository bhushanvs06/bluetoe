import React, { useState, useRef, useEffect } from 'react';

const AiTest = () => {
    const [chatMessages, setChatMessages] = useState([
        { sender: 'AI', message: 'Welcome to AI Career Advisor! Tell me about a game, sport, or creative field you enjoy:', type: 'ai' }
    ]);
    const [isTestRunning, setIsTestRunning] = useState(false);
    const [currentImage, setCurrentImage] = useState("listen(2).gif");
    const [isListening, setIsListening] = useState(false);
    const chatContainerRef = useRef(null);
    const recognitionRef = useRef(null);

    // Dataset organized by category
    const dataset = {
        games: {
            "Minecraft": {
                skills: ["Creativity & design thinking", "Resource management", "Programming (for Redstone & modding)", "Problem-solving", "Architecture & building"],
                questions: [
                    "Do you prefer survival, creative, or hardcore mode?",
                    "Have you built complex Redstone mechanisms?",
                    "Do you create custom mods or adventure maps?"
                ],
                careers: [
                    "Game Developer – Learn Java, Unity, or Unreal Engine to develop games.",
                    "Minecraft Mod/Plugin Developer – Create custom game mechanics using Forge, Fabric, or Spigot.",
                    "Game Designer – Develop game levels, mechanics, and world design.",
                    "Content Creator (YouTube, Twitch, TikTok) – Upload tutorials, survival guides, or custom builds.",
                    "Architect & Designer – Use Minecraft to model real-world buildings & urban planning.",
                    "Esports Host & Caster – Host Minecraft tournaments and game-related events.",
                    "Minecraft Educator – Teach Redstone, coding, and creativity through Minecraft Education Edition."
                ]
            },
            "BGMI": {
                skills: ["Tactical decision-making", "Reflexes & hand-eye coordination", "Communication & teamwork", "Positioning & zone control", "Understanding game meta & strategies"],
                questions: [
                    "What is your highest rank in BGMI?",
                    "Do you play aggressively or defensively?",
                    "What strategies do you use in final circles?"
                ],
                careers: [
                    "Professional Esports Player – Compete in official BGMI tournaments.",
                    "Esports Coach & Analyst – Train upcoming players & analyze strategies.",
                    "Game Tester & QA Analyst – Help developers improve the game's mechanics.",
                    "Streaming & Content Creation – Build a YouTube/Twitch audience with gameplay, tips, and tournaments.",
                    "Event Organizer & Host – Manage gaming tournaments and BGMI events.",
                    "Gaming Journalist – Write about new updates, strategies, and player interviews.",
                    "Game Community Manager – Handle official forums, Discord groups, and social engagement."
                ]
            },
            // Add other games similarly...
        },
        // Add other categories similarly...
    };

    // Scroll to bottom of chat whenever messages change
    React.useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatMessages, isListening]);

    // Set up voices when component mounts
    const [voices, setVoices] = useState([]);
    
    useEffect(() => {
        const loadVoices = () => {
            const availableVoices = window.speechSynthesis.getVoices();
            setVoices(availableVoices);
        };
        
        // Load voices right away
        loadVoices();
        
        // Chrome sometimes loads voices asynchronously
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = loadVoices;
        }
    }, []);

    const speak = (text) => {
        setIsListening(false);
        return new Promise((resolve) => {
            const utterance = new SpeechSynthesisUtterance(text);
            
            // Find and set the Google UK English Female voice
            const ukFemaleVoice = voices.find(voice => 
                voice.name === "Google UK English Female"
            );
            
            if (ukFemaleVoice) {
                utterance.voice = ukFemaleVoice;
            } else {
                // Fallback if voice not found
                utterance.lang = "en-GB";
            }
            
            utterance.onend = () => {
                setIsListening(true);
                resolve();
            };
            speechSynthesis.speak(utterance);
        });
    };

    const listen = () => {
        return new Promise((resolve) => {
            recognitionRef.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
            recognitionRef.current.lang = "en-US";
            recognitionRef.current.start();

            recognitionRef.current.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                setIsListening(false);
                resolve(transcript);
            };

            recognitionRef.current.onerror = (err) => {
                console.error("Speech recognition error:", err);
                setIsListening(false);
                resolve("");
            };

            recognitionRef.current.onend = () => {
                setIsListening(false);
                resolve("");
            };
        });
    };

    const stopResponse = () => {
        speechSynthesis.cancel();
        if (recognitionRef.current) {
            recognitionRef.current.abort();
        }
        setIsTestRunning(false);
        setIsListening(false);
        setCurrentImage("listen(2).gif");
        addMessage('AI', 'Response stopped.', 'ai');
    };

    const addMessage = (sender, message, type) => {
        setChatMessages(prev => [...prev, { sender, message, type }]);
    };

    const findInDataset = (userInput) => {
        const lowerInput = userInput.toLowerCase();
        
        for (const category in dataset) {
            for (const item in dataset[category]) {
                if (lowerInput.includes(item.toLowerCase())) {
                    return {
                        category,
                        item,
                        data: dataset[category][item]
                    };
                }
            }
        }
        return null;
    };

    const startTest = async () => {
        setIsTestRunning(true);
        setCurrentImage("speak.gif");
        
        // Initial question
        addMessage('AI', 'Tell me about a game, sport, or creative field you enjoy:', 'ai');
        await speak('Tell me about a game, sport, or creative field you enjoy:');
        
        // Get user's first response
        const userResponse = await listen();
        addMessage('You', userResponse, 'user');
        
        // Find if the user's interest is in our dataset
        const foundItem = findInDataset(userResponse);
        
        if (!foundItem) {
            addMessage('AI', "I'm sorry, that activity is outside my knowledge base. I can only provide career advice for specific games, sports, and creative fields that are in my dataset.", 'ai');
            await speak("I'm sorry, that activity is outside my knowledge base. I can only provide career advice for specific games, sports, and creative fields that are in my dataset.");
            setIsTestRunning(false);
            setIsListening(false);
            setCurrentImage("listen(2).gif");
            return;
        }
        
        // If found, proceed with questions
        const { item, data } = foundItem;
        
        addMessage('AI', `Great! I see you're interested in ${item}. Let me ask you some questions to better understand your skills.`, 'ai');
        await speak(`Great! I see you're interested in ${item}. Let me ask you some questions to better understand your skills.`);
        
        const answers = {};
        
        // Ask follow-up questions
        for (let i = 0; i < Math.min(3, data.questions.length); i++) {
            const question = data.questions[i];
            addMessage('AI', question, 'ai');
            await speak(question);
            
            const answer = await listen();
            addMessage('You', answer, 'user');
            answers[`Q${i+1}`] = answer;
        }
        
        // Provide career suggestions
        addMessage('AI', `Based on your responses, here are some potential career paths related to ${item}:`, 'ai');
        await speak(`Based on your responses, here are some potential career paths related to ${item}`);
        
        data.careers.forEach(career => {
            addMessage('AI', `• ${career}`, 'ai');
        });
        
        addMessage('AI', "Would you like to explore any of these career paths in more detail?", 'ai');
        await speak("Would you like to explore any of these career paths in more detail?");
        
        setIsTestRunning(false);
        setIsListening(false);
        setCurrentImage("listen(2).gif");
    };

    return (
        <div style={{
            fontFamily: '"Poppins", "Segoe UI", sans-serif',
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            minHeight: '100vh',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{
                maxWidth: '1200px',
                width: '100%',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'row',
                gap: '24px',
                '@media (max-width: 768px)': {
                    flexDirection: 'column'
                }
            }}>
                {/* Left side - Chat container */}
                <div style={{
                    flex: '1',
                    backgroundColor: 'white',
                    borderRadius: '16px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '650px',
                    backdropFilter: 'blur(10px)'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '20px'
                    }}>
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: 'linear-gradient(45deg, #3498db, #8e44ad)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '24px',
                            fontWeight: 'bold',
                            marginRight: '15px'
                        }}>
                            AI
                        </div>
                        <div>
                            <h1 style={{ 
                                color: '#333', 
                                margin: '0',
                                fontSize: '24px',
                                fontWeight: '600'
                            }}>
                                AI Career Advisor
                            </h1>
                            <p style={{
                                margin: '5px 0 0 0',
                                color: '#666',
                                fontSize: '14px'
                            }}>
                                Discover career paths based on your interests
                            </p>
                        </div>
                    </div>
                    
                    <div 
                        ref={chatContainerRef}
                        style={{
                            border: 'none',
                            borderRadius: '12px',
                            backgroundColor: '#f8f9fa',
                            height: '450px',
                            overflowY: 'auto',
                            marginBottom: '20px',
                            padding: '16px',
                            textAlign: 'left',
                            flexGrow: 1
                        }}
                    >
                        {chatMessages.map((msg, index) => (
                            <div key={index} style={{
                                marginBottom: '16px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: msg.type === 'user' ? 'flex-end' : 'flex-start'
                            }}>
                                <div style={{
                                    maxWidth: '80%',
                                    padding: '12px 16px',
                                    borderRadius: msg.type === 'user' ? '18px 18px 0 18px' : '18px 18px 18px 0',
                                    backgroundColor: msg.type === 'user' ? '#2196f3' : '#ffffff',
                                    color: msg.type === 'user' ? 'white' : '#333',
                                    fontWeight: '400',
                                    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                                    border: msg.type === 'user' ? 'none' : '1px solid #e0e0e0'
                                }}>
                                    {msg.message}
                                </div>
                                <span style={{
                                    fontSize: '12px',
                                    color: '#999',
                                    marginTop: '6px'
                                }}>
                                    {msg.sender === 'AI' ? 'AI Career Advisor' : 'You'}
                                </span>
                            </div>
                        ))}
                        {isListening && (
                            <div style={{
                                padding: '12px 16px',
                                backgroundColor: '#fff8e1',
                                borderRadius: '10px',
                                color: '#ff6d00',
                                border: '1px solid #ffe0b2',
                                marginTop: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                                animation: 'pulse 1.5s infinite'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}>
                                    <span style={{
                                        width: '12px',
                                        height: '12px',
                                        borderRadius: '50%',
                                        backgroundColor: '#ff6d00',
                                        display: 'inline-block',
                                        animation: 'pulse 1s infinite'
                                    }}></span>
                                    <strong>Your turn to speak...</strong> 🎤
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <div style={{ 
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '16px'
                    }}>
                        <button 
                            onClick={startTest} 
                            disabled={isTestRunning}
                            style={{
                                padding: '12px 24px',
                                fontSize: '16px',
                                fontWeight: '500',
                                backgroundColor: isTestRunning ? '#ccc' : '#4CAF50',
                                color: 'white',
                                border: 'none',
                                borderRadius: '30px',
                                cursor: isTestRunning ? 'not-allowed' : 'pointer',
                                boxShadow: isTestRunning ? 'none' : '0 4px 8px rgba(76, 175, 80, 0.3)',
                                transition: 'all 0.3s ease',
                                flex: '1',
                                maxWidth: '180px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px'
                            }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polygon points="10 8 16 12 10 16 10 8"></polygon>
                            </svg>
                            {isTestRunning ? 'Processing...' : 'Start Test'}
                        </button>
                        
                        <button 
                            onClick={stopResponse}
                            style={{
                                padding: '12px 24px',
                                fontSize: '16px',
                                fontWeight: '500',
                                backgroundColor: '#f44336',
                                color: 'white',
                                border: 'none',
                                borderRadius: '30px',
                                cursor: 'pointer',
                                boxShadow: '0 4px 8px rgba(244, 67, 54, 0.3)',
                                transition: 'all 0.3s ease',
                                flex: '1',
                                maxWidth: '180px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px'
                            }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            </svg>
                            Stop
                        </button>
                    </div>
                </div>

                {/* Right side - Image container */}
                <div style={{
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    borderRadius: '16px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                    padding: '24px',
                    overflow: 'hidden',
                    height: '650px',
                    position: 'relative'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        right: '20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div style={{
                            fontSize: '18px',
                            fontWeight: '600',
                            color: '#333'
                        }}>
                            Voice Interaction
                        </div>
                        
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '6px 12px',
                            borderRadius: '20px',
                            backgroundColor: isListening ? '#e8f5e9' : isTestRunning ? '#e3f2fd' : '#f5f5f5',
                            border: isListening ? '1px solid #4caf50' : isTestRunning ? '1px solid #2196f3' : '1px solid #ddd',
                        }}>
                            <span style={{ 
                                display: 'inline-block', 
                                width: '8px', 
                                height: '8px', 
                                backgroundColor: isListening ? '#4caf50' : isTestRunning ? '#2196f3' : '#9e9e9e', 
                                borderRadius: '50%',
                                animation: (isListening || isTestRunning) ? 'pulse 1s infinite' : 'none'
                            }}></span>
                            <span style={{
                                fontSize: '14px',
                                color: isListening ? '#4caf50' : isTestRunning ? '#2196f3' : '#9e9e9e'
                            }}>
                                {isListening ? 'Listening' : isTestRunning ? 'Speaking' : 'Ready'}
                            </span>
                        </div>
                    </div>
                    
                    <div style={{
                        flex: '1',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        padding: '40px 0'
                    }}>
                        <img 
                            src={`./${currentImage}`} 
                            alt="Voice interaction visualization"
                            style={{
                                maxWidth: '100%',
                                maxHeight: '80%',
                                borderRadius: '12px',
                                objectFit: 'contain',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                transition: 'all 0.5s ease'
                            }}
                        />
                    </div>
                    
                    {/* Status indicator */}
                    <div style={{
                        width: '80%',
                        padding: '16px',
                        marginTop: '20px',
                        backgroundColor: isListening ? '#e8f5e9' : '#f5f5f5',
                        borderRadius: '12px',
                        border: isListening ? '1px solid #66bb6a' : '1px solid #e0e0e0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                        transition: 'all 0.3s ease'
                    }}>
                        {isListening ? (
                            <>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        fontWeight: 'bold',
                                        color: '#2e7d32'
                                    }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                                            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                                            <line x1="12" y1="19" x2="12" y2="23"></line>
                                            <line x1="8" y1="23" x2="16" y2="23"></line>
                                        </svg>
                                        <span>Listening for your response</span>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        gap: '5px',
                                        alignItems: 'center'
                                    }}>
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} style={{
                                                display: 'inline-block',
                                                width: '6px',
                                                height: '6px',
                                                backgroundColor: '#4caf50',
                                                borderRadius: '50%',
                                                animation: `pulse 1s infinite ${i * 0.15}s`
                                            }}></span>
                                        ))}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div style={{
                                color: isTestRunning ? '#1976d2' : '#757575',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}>
                                {isTestRunning ? (
                                    <>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                                            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                                        </svg>
                                        <span>AI is speaking - please wait</span>
                                    </>
                                ) : (
                                    <>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polyline points="12 6 12 12 16 14"></polyline>
                                        </svg>
                                        <span>Ready to start the conversation</span>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
            {/* Add CSS animation */}
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

                @keyframes pulse {
                    0% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.05); }
                    100% { opacity: 1; transform: scale(1); }
                }

                /* Custom scrollbar */
                *::-webkit-scrollbar {
                    width: 6px;
                }
                
                *::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 10px;
                }
                
                *::-webkit-scrollbar-thumb {
                    background: #c5c5c5;
                    border-radius: 10px;
                }
                
                *::-webkit-scrollbar-thumb:hover {
                    background: #a8a8a8;
                }

                /* Hover effects for buttons */
                button:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
                }
                
                button:active:not(:disabled) {
                    transform: translateY(0);
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
                `}
            </style>
        </div>
    );
};

export default AiTest;