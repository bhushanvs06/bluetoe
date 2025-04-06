import React, { useState } from 'react';
import "./indian-geo.css";

const ScienceClass10Livebook = () => {
  // Detailed modules with comprehensive text content
  const modules = [
    {
      title: 'Chemical Reactions',
      description: 'Understanding the types and processes of chemical reactions',
      videoId: "TStjgUmL1RQ", // This might be an invalid YouTube ID
      content: [
        "Chemical reactions involve the transformation of substances through the breaking and forming of chemical bonds.",
        "",
        "1. Types of Chemical Reactions:",
        "   - Combination Reactions: Two or more substances combine to form a single product.",
        "   - Decomposition Reactions: A single compound breaks down into two or more simpler substances.",
        "   - Displacement Reactions: An element displaces another in a compound.",
        "   - Redox Reactions: Involves the transfer of electrons between substances.",
        "",
        "2. Balancing Chemical Equations:",
        "   - The law of conservation of mass states that matter cannot be created or destroyed.",
        "   - Balancing ensures that the number of atoms of each element is the same on both sides of the equation.",
        "",
        "3. Factors Affecting Reaction Rates:",
        "   - Concentration, temperature, surface area, and catalysts can influence how quickly a reaction occurs."
      ],
      questions: [
        { 
          question: "What type of reaction is represented by the equation 2H₂ + O₂ → 2H₂O?", 
          options: ["Decomposition", "Combination", "Displacement", "Redox"],
          answer: "Combination",
          explanation: "This is a combination reaction where hydrogen and oxygen combine to form water."
        },
        { 
          question: "What is the purpose of balancing a chemical equation?", 
          options: ["To increase the reaction rate", "To ensure mass conservation", "To change the products", "To add more reactants"],
          answer: "To ensure mass conservation",
          explanation: "Balancing a chemical equation ensures that the mass of reactants equals the mass of products."
        },
        { 
          question: "Which factor does NOT affect the rate of a chemical reaction?", 
          options: ["Temperature", "Concentration", "Color", "Surface area"],
          answer: "Color",
          explanation: "Color does not affect the rate of a chemical reaction; factors like temperature and concentration do."
        },
        { 
          question: "In a displacement reaction, what happens?", 
          options: ["Two compounds form a new compound", "One element replaces another in a compound", "A compound breaks down", "Two elements combine"],
          answer: "One element replaces another in a compound",
          explanation: "In a displacement reaction, one element displaces another from a compound."
        },
        { 
          question: "What is a redox reaction?", 
          options: ["A reaction that involves heat", "A reaction that involves light", "A reaction involving electron transfer", "A reaction that produces gas"],
          answer: "A reaction involving electron transfer",
          explanation: "Redox reactions involve the transfer of electrons between substances."
        }
      ]
    },
    {
      title: 'Human Body Systems',
      description: 'Understanding the major systems of the human body',
      videoId: "cQIU0yJ8RBg",
      content: [
        "The human body is made up of several systems that work together to maintain homeostasis.",
        "",
        "1. Circulatory System:",
        "   - Composed of the heart, blood vessels, and blood.",
        "   - Responsible for transporting nutrients, gases, and waste products.",
        "",
        "2. Respiratory System:",
        "   - Includes the lungs and airways.",
        "   - Responsible for gas exchange: oxygen in, carbon dioxide out.",
        "",
        "3. Digestive System:",
        "   - Comprises organs like the stomach, intestines, and liver.",
        "   - Breaks down food into nutrients for energy and growth.",
        "",
        "4. Nervous System:",
        "   - Consists of the brain, spinal cord, and nerves.",
        "   - Controls body functions and responds to stimuli.",
        "",
        "5. Musculoskeletal System:",
        "   - Includes bones, muscles, and joints.",
        "   - Provides structure, support, and movement."
      ],
      questions: [
        { 
          question: "What is the main function of the circulatory system?", 
          options: ["Gas exchange", "Nutrient absorption", "Transporting blood", "Producing hormones"],
          answer: "Transporting blood",
          explanation: "The circulatory system is responsible for transporting blood throughout the body."
        },
        { 
          question: "Which organ is primarily responsible for gas exchange?", 
          options: ["Heart", "Lungs", "Stomach", "Kidneys"],
          answer: "Lungs",
          explanation: "The lungs are responsible for the exchange of oxygen and carbon dioxide."
        },
        { 
          question: "What is the role of the digestive system?", 
          options: ["To circulate blood", "To break down food", "To control body functions", "To provide structure"],
          answer: "To break down food",
          explanation: "The digestive system breaks down food into nutrients that the body can use."
        },
        { 
          question: "What does the nervous system control?", 
          options: ["Digestion", "Movement", "Gas exchange", "All of the above"],
          answer: "All of the above",
          explanation: "The nervous system controls various body functions, including digestion and movement."
        },
        { 
          question: "What is the function of muscles in the musculoskeletal system?", 
          options: ["To protect organs", "To provide structure", "To enable movement", "To produce blood"],
          answer: "To enable movement",
          explanation: "Muscles enable movement by contracting and relaxing."
        }
      ]
    },
    {
      title: 'Forces and Motion',
      description: 'Understanding the laws of motion and forces',
      videoId: "A-Hpp9xUbiM",
      content: [
        "Forces and motion are fundamental concepts in physics that describe how objects move.",
        "",
        "1. Newton's Laws of Motion:",
        "   - First Law: An object at rest stays at rest, and an object in motion stays in motion unless acted upon by a net force.",
        "   - Second Law: Force equals mass times acceleration (F = ma).",
        "   - Third Law: For every action, there is an equal and opposite reaction.",
        "",
        "2. Types of Forces:",
        "   - Contact Forces: Forces that occur when objects are in contact (e.g., friction, tension).",
        "   - Non-contact Forces: Forces that act at a distance (e.g., gravitational, magnetic).",
        "",
        "3. Motion:",
        "   - Described in terms of speed, velocity, and acceleration.",
        "   - Speed is the distance traveled per unit of time, while velocity includes direction."
      ],
      questions: [
        { 
          question: "What does Newton's First Law state?", 
          options: ["Force equals mass times acceleration", "An object in motion stays in motion", "For every action, there is an equal reaction", "None of the above"],
          answer: "An object in motion stays in motion",
          explanation: "Newton's First Law states that an object will remain at rest or in uniform motion unless acted upon by a net force."
        },
        { 
          question: "What is the formula for calculating force?", 
          options: ["F = m + a", "F = m - a", "F = ma", "F = a/m"],
          answer: "F = ma",
          explanation: "Force is calculated using the formula F = ma, where m is mass and a is acceleration."
        },
        { 
          question: "What type of force is friction?", 
          options: ["Contact force", "Non-contact force", "Balanced force", "Unbalanced force"],
          answer: "Contact force",
          explanation: "Friction is a contact force that opposes the motion of objects in contact."
        },
        { 
          question: "What is the difference between speed and velocity?", 
          options: ["Speed includes direction", "Velocity is speed with direction", "They are the same", "None of the above"],
          answer: "Velocity is speed with direction",
          explanation: "Velocity is a vector quantity that includes both speed and direction."
        },
        { 
          question: "What is an example of a non-contact force?", 
          options: ["Friction", "Tension", "Gravity", "Normal force"],
          answer: "Gravity",
          explanation: "Gravity is a non-contact force that acts at a distance."
        }
      ]
    },
    {
      title: 'Ecosystems and Biodiversity',
      description: 'Understanding ecosystems, food chains, and biodiversity',
      videoId: "YuO4WB4SwCg",
      content: [
        "Ecosystems are communities of living organisms interacting with their environment.",
        "",
        "1. Components of Ecosystems:",
        "   - Biotic Factors: Living components (plants, animals, microorganisms).",
        "   - Abiotic Factors: Non-living components (water, soil, climate).",
        "",
        "2. Food Chains and Food Webs:",
        "   - Food Chain: A linear sequence of organisms through which nutrients and energy pass.",
        "   - Food Web: A complex network of interconnected food chains.",
        "",
        "3. Biodiversity:",
        "   - Refers to the variety of life in an ecosystem.",
        "   - High biodiversity contributes to ecosystem stability and resilience."
      ],
      questions: [
        { 
          question: "What are biotic factors?", 
          options: ["Non-living components", "Living components", "Both living and non-living", "None of the above"],
          answer: "Living components",
          explanation: "Biotic factors are the living components of an ecosystem, such as plants and animals."
        },
        { 
          question: "What is a food chain?", 
          options: ["A complex network of organisms", "A linear sequence of organisms", "A type of ecosystem", "None of the above"],
          answer: "A linear sequence of organisms",
          explanation: "A food chain is a linear sequence that shows how energy and nutrients flow from one organism to another."
        },
        { 
          question: "What does biodiversity refer to?", 
          options: ["The number of species in an ecosystem", "The variety of life in an ecosystem", "The health of an ecosystem", "The size of an ecosystem"],
          answer: "The variety of life in an ecosystem",
          explanation: "Biodiversity refers to the variety of life forms in a given ecosystem."
        },
        { 
          question: "What is the role of producers in an ecosystem?", 
          options: ["To consume energy", "To decompose organic matter", "To produce energy through photosynthesis", "To provide shelter"],
          answer: "To produce energy through photosynthesis",
          explanation: "Producers, such as plants, convert sunlight into energy through photosynthesis."
        },
        { 
          question: "What is a food web?", 
          options: ["A single food chain", "A complex network of food chains", "A type of ecosystem", "None of the above"],
          answer: "A complex network of food chains",
          explanation: "A food web is a complex network that shows how different food chains are interconnected."
        }
      ]
    }
  ];

  // State management
  const [currentModule, setCurrentModule] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [results, setResults] = useState([]);
  const [score, setScore] = useState(null);

  // Handlers
  const handleAnswerChange = (questionIndex, option) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = option;
    setSelectedAnswers(newAnswers);
  };

  const checkAnswers = () => {
    const newResults = modules[currentModule].questions.map((q, index) => ({
      isCorrect: selectedAnswers[index] === q.answer,
      correctAnswer: q.answer,
      explanation: q.explanation
    }));
    setResults(newResults);
    setScore(newResults.filter(r => r.isCorrect).length);
  };

  const goToNextModule = () => {
    if (currentModule < modules.length - 1) {
      setCurrentModule(currentModule + 1);
      setSelectedAnswers([]);
      setResults([]);
      setScore(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPrevModule = () => {
    if (currentModule > 0) {
      setCurrentModule(currentModule - 1);
      setSelectedAnswers([]);
      setResults([]);
      setScore(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="science-class-container">
      <header className="header">
        <h1>Science Class 10 Livebook</h1>
        <div className="progress-indicator">
          Module {currentModule + 1} of {modules.length}: {modules[currentModule].title}
        </div>
      </header>
      
      <main className="content-container">
        {/* Video and Content Section */}
        <section className="learning-section">
          <h2>{modules[currentModule].title}</h2>
          <p className="module-description">{modules[currentModule].description}</p>
          
          <div className="video-container">
            {modules[currentModule].videoId ? (
              <iframe 
                width="560" 
                height="315"
                src={`https://www.youtube.com/embed/${modules[currentModule].videoId}`}
                title={modules[currentModule].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            ) : (
              <p>Video is not available at the moment. Please check back later.</p>
            )}
          </div>
          
          <div className="text-content">
            {modules[currentModule].content.map((paragraph, index) => (
              paragraph === "" ? <br key={index} /> : <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          <div className="navigation-buttons">
            <button 
              onClick={goToPrevModule}
              disabled={currentModule === 0}
              className="nav-button prev-button"
            >
              ← Previous Topic
            </button>
            <button 
              onClick={goToNextModule}
              disabled={currentModule === modules.length - 1}
              className="nav-button next-button"
            >
              Next Topic →
            </button>
          </div>
        </section>

        {/* Quiz Section */}
        <section className="quiz-section">
          <h3>Test Your Knowledge: {modules[currentModule].title}</h3>
          <p className="quiz-instructions">Answer these 5 questions based on the content you just learned:</p>
          
          {modules[currentModule].questions.map((q, questionIndex) => (
            <div key={questionIndex} className="question-card">
              <p className="question-text">
                {questionIndex + 1}. {q.question}
              </p>
              <div className="options-grid">
                {q.options.map((option, optionIndex) => (
                  <button
                    key={optionIndex}
                    className={`option-btn ${
                      selectedAnswers[questionIndex] === option ? 'selected' : ''
                    } ${
                      results.length > 0 
                        ? option === q.answer 
                          ? 'correct' 
                          : selectedAnswers[questionIndex] === option 
                            ? 'wrong' 
                            : ''
                        : ''
                    }`}
                    onClick={() => handleAnswerChange(questionIndex, option)}
                    disabled={results.length > 0}
                  >
                    {option}
                    {results.length > 0 && option === q.answer && (
                      <span className="icon correct-icon">✓</span>
                    )}
                    {results.length > 0 && 
                      selectedAnswers[questionIndex] === option && 
                      option !== q.answer && (
                        <span className="icon wrong-icon">✕</span>
                    )}
                  </button>
                ))}
              </div>
              {results.length > 0 && questionIndex < modules[currentModule].questions.length - 1 && (
                <hr className="question-divider" />
              )}
            </div>
          ))}
          
          <div className="quiz-actions">
            {results.length === 0 ? (
              <button 
                className="submit-btn"
                onClick={checkAnswers}
                disabled={selectedAnswers.length !== modules[currentModule].questions.length}
              >
                Submit Answers
              </button>
            ) : (
              <div className="results-section">
                <div className={`score-display ${
                  score === 5 ? 'excellent' :
                  score >= 3 ? 'good' : 'poor'
                }`}>
                  <h4>Your Score: {score}/5</h4>
                  <p>
                    {score === 5 ? "Excellent! You've mastered this topic!" :
                     score >= 3 ? "Good job! Review the explanations below:" : 
                     "Keep practicing! Review the material and try again:"}
                  </p>
                </div>
                <button 
                  className="try-again-btn"
                  onClick={() => {
                    setSelectedAnswers([]);
                    setResults([]);
                    setScore(null);
                  }}
                >
                  Retake Quiz
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    
    </div>
  );
};

export default ScienceClass10Livebook;