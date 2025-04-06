import React, { useState, useRef, useEffect } from 'react';
import './AiTeacher.css';

function AiTeacher() {
  const [query, setQuery] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [aiResponse, setAiResponse] = useState('Hey, Ask Me Anything !!\nI am here to Help you');
  const [errorMessage, setErrorMessage] = useState('');
  const [aiImgSrc, setAiImgSrc] = useState('listen(2).gif');
  const [isMicMuted, setIsMicMuted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isDetailedExplanation, setIsDetailedExplanation] = useState(false);
  const [conversationHistory, setConversationHistory] = useState([]);
  const [googleVoice, setGoogleVoice] = useState(null);
  
  const recognitionRef = useRef(null);
  const speechRef = useRef(null);

  // Load and set Google UK English Female voice
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      const googleUKFemale = availableVoices.find(
        voice => voice.name === 'Google UK English Female'
      );
      
      if (googleUKFemale) {
        setGoogleVoice(googleUKFemale);
      } else {
        // Fallback to first available English voice if Google UK Female not found
        const fallbackVoice = availableVoices.find(voice => voice.lang.includes('en')) || availableVoices[0];
        setGoogleVoice(fallbackVoice);
        if (!googleUKFemale) {
          setErrorMessage('Note: Google UK English Female voice not available. Using fallback voice.');
        }
      }
    };

    // Chrome needs this
    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
  }, []);

  useEffect(() => {
    if (speechRef.current) {
      speechRef.current.volume = volume;
    }
  }, [volume]);

  const formatResponse = (text) => {
    let formatted = text.replace(/\*\s*(.+?)\s*\*/g, '• $1\n')
                        .replace(/- (.+?)(?:\n|$)/g, '• $1\n');
    
    if (!formatted.includes('•') && formatted.includes('\n')) {
      formatted = formatted.split('\n')
                          .filter(line => line.trim())
                          .map(line => `• ${line}`)
                          .join('\n');
    }
    
    return formatted;
  };

  const speakText = (text) => {
    if (!googleVoice) {
      setErrorMessage('Voice not available for speech');
      return;
    }

    speechSynthesis.cancel();
    setIsSpeaking(false);
    
    const cleanText = text.replace(/[*\-•]/g, '').replace(/\n/g, ', ');
    
    // Split into sentences for more natural pauses
    const sentences = cleanText.match(/[^\.!\?]+[\.!\?]+/g) || [cleanText];
    
    sentences.forEach((sentence, index) => {
      const utterance = new SpeechSynthesisUtterance(sentence.trim());
      
      // Configure voice settings for natural speech
      utterance.voice = googleVoice;
      utterance.volume = volume;
      utterance.rate = 0.95; // Slightly slower than normal
      utterance.pitch = 1.1; // Slightly higher pitch for female voice
      utterance.lang = 'en-GB'; // UK English
      
      // Add slight pause between sentences
      if (index > 0) {
        utterance.onstart = () => {
          setAiImgSrc('speak.gif');
        };
      }
      
      utterance.onend = function() {
        if (index === sentences.length - 1) {
          setAiImgSrc('listen(2).gif');
          setIsSpeaking(false);
        }
      };
      
      utterance.onerror = function() {
        setAiImgSrc('listen(2).gif');
        setIsSpeaking(false);
      };
      
      // Start speaking the first sentence immediately
      if (index === 0) {
        setAiImgSrc('speak.gif');
        setIsSpeaking(true);
      }
      
      // Add slight delay between sentences (50ms)
      setTimeout(() => {
        speechSynthesis.speak(utterance);
      }, index * 50);
    });
  };

  const stopSpeech = () => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
    setAiImgSrc('listen(2).gif');
  };

  const toggleMicMute = () => {
    setIsMicMuted(!isMicMuted);
    if (recognitionRef.current && recognitionRef.current.abort) {
      recognitionRef.current.abort();
    }
    setAiImgSrc('listen(2).gif');
  };

  const startListening = () => {
    if (isMicMuted) return;
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setErrorMessage('Speech recognition not supported in this browser');
      return;
    }
    
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.lang = "en-US";
    recognitionRef.current.interimResults = false;
    setAiImgSrc('listen.gif');
    
    recognitionRef.current.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuery(transcript);
      searchBoth(transcript);
      setAiImgSrc('listen(2).gif');
    };
    
    recognitionRef.current.onerror = (event) => {
      setAiImgSrc('listen(2).gif');
      setErrorMessage('Error occurred in recognition: ' + event.error);
    };
    
    recognitionRef.current.start();
  };

  const fetchAIResponse = async (searchQuery, detailed = false) => {
    const API_KEY = "AIzaSyDBQQNmvBnvnDtkLohaqkR8GQkKYkWoDQQ";
    setAiResponse("Thinking...");
    setIsDetailedExplanation(detailed);
    
    try {
      let prompt;
      if (detailed) {
        prompt = `Please provide a detailed explanation of: ${searchQuery}. Break it down into clear sections with examples if possible.`;
      } else {
        prompt = `Please format your response with bullet points using asterisks (*) for each item. Keep it concise with max 5 points in simple words: ${searchQuery}`;
      }

      const updatedHistory = [
        ...conversationHistory,
        { role: "user", parts: [{ text: prompt }] }
      ];

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: updatedHistory
          })
        }
      );

      const data = await response.json();
      const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || "No valid response.";
      const formattedResponse = formatResponse(responseText);
      
      setConversationHistory([
        ...updatedHistory,
        { role: "model", parts: [{ text: responseText }] }
      ]);
      
      setAiResponse(formattedResponse);
      speakText(formattedResponse);
    } catch (error) {
      setAiResponse("Error fetching AI response.");
    }
  };

  const requestDetailedExplanation = () => {
    if (query.trim()) {
      fetchAIResponse(query, true);
    }
  };

  const clearConversation = () => {
    setConversationHistory([]);
    setAiResponse('AI response will appear here...');
    setQuery('');
    setImageUrl('');
  };

  const searchImage = async (searchQuery) => {
    const apiKey = "36aZAoJVoowxIZ38MbyAwKrmzKW1Y7SS9vIgjQLClyRppfxOk4LOE4rt";
    
    try {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${searchQuery}&per_page=1`,
        {
          headers: { "Authorization": apiKey }
        }
      );
      
      const data = await response.json();
      setImageUrl(data.photos[0]?.src?.large || "");
    } catch (error) {
      setErrorMessage("Error fetching image.");
    }
  };

  const searchBoth = (searchQuery = query) => {
    searchImage(searchQuery);
    fetchAIResponse(searchQuery);
  };

  return (
    <div className="ai-teacher">
      <div className="container">
        <div className="left-section">
          <img id="resultImage" src={imageUrl} alt="Something is getting cooked 🍵" />
        </div>
        <div className="right-section">
          <div id="response" style={{ whiteSpace: 'pre-line' }}>
            {aiResponse}
          </div>
          {aiResponse !== 'AI response will appear here...' && aiResponse !== 'Thinking...' && (
            <div className="response-actions">
              <button 
                onClick={requestDetailedExplanation} 
                className="explanation-button"
                disabled={isSpeaking}
              >
                {isDetailedExplanation ? '🔍 Show Simplified Version' : '🔍 Get Detailed Explanation'}
              </button>
              <button 
                onClick={clearConversation} 
                className="clear-button"
              >
                🗑️ New Conversation
              </button>
            </div>
          )}
        </div>
      </div>
      
      <img className="ai-teacher-image" src={aiImgSrc} alt="AI Teacher" />
      
      
      
      <div className='con'></div>
      <input 
        type="text" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your Doubt or follow-up question..."
      />
      <div className="action-buttons">
        <button onClick={() => searchBoth()}>Ask</button>
        <button 
          onClick={startListening} 
          className={`mic-button ${isMicMuted ? 'muted' : ''}`}
        >
          {isMicMuted ? '🎤 Muted' : '🎤 Speak'}
        </button>
        <button onClick={toggleMicMute}>
          {isMicMuted ? '🔊 Unmute Mic' : '🔇 Mute Mic'}
        </button>
        
        {isSpeaking ? (
          <button onClick={stopSpeech} className="stop-button">
            ⏹ Stop Explaining
          </button>
        ) : (
          <button 
            onClick={() => speakText(aiResponse)} 
            className="read-button"
            disabled={aiResponse === 'Hey Ask Me Anything !!!' || aiResponse === 'Thinking...'}
          >
            🔊 {isDetailedExplanation ? 'Read Detailed Explanation' : 'Explain'}
          </button>
        )}
      </div>
    </div>
  );
}

export default AiTeacher;