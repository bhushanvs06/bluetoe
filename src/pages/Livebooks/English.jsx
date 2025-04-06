import React, { useState } from 'react';
import "./indian-geo.css";

const EnglishClass10Livebook = () => {
  // Detailed modules with comprehensive text content
  const modules = [
    {
      title: 'Literary Devices',
      description: 'Understanding various literary devices and their usage',
      videoId: "OY2zPFQsKSI", // This might be an invalid YouTube ID
      content: [
        "Literary devices are techniques that writers use to create a special effect in their writing.",
        "",
        "1. Metaphor:",
        "   - A figure of speech that makes a comparison between two unlike things without using 'like' or 'as'.",
        "   - Example: 'Time is a thief.'",
        "",
        "2. Simile:",
        "   - A figure of speech that compares two different things using 'like' or 'as'.",
        "   - Example: 'Her smile is like the sun.'",
        "",
        "3. Personification:",
        "   - Giving human traits to non-human things.",
        "   - Example: 'The wind whispered through the trees.'",
        "",
        "4. Alliteration:",
        "   - The repetition of the same initial consonant sounds in a series of words.",
        "   - Example: 'She sells sea shells by the sea shore.'",
        "",
        "5. Hyperbole:",
        "   - An exaggerated statement not meant to be taken literally.",
        "   - Example: 'I’m so hungry I could eat a horse.'"
      ],
      questions: [
        { 
          question: "What is a metaphor?", 
          options: ["A comparison using 'like'", "A direct comparison", "An exaggerated statement", "Giving human traits to objects"],
          answer: "A direct comparison",
          explanation: "A metaphor makes a direct comparison between two unlike things without using 'like' or 'as'."
        },
        { 
          question: "Which of the following is an example of personification?", 
          options: ["The stars danced in the sky", "He runs like the wind", "She is as brave as a lion", "The car roared to life"],
          answer: "The stars danced in the sky",
          explanation: "Personification gives human traits to non-human things, such as stars 'dancing'."
        },
        { 
          question: "What does alliteration involve?", 
          options: ["Repetition of vowel sounds", "Repetition of consonant sounds", "Exaggeration", "Comparison"],
          answer: "Repetition of consonant sounds",
          explanation: "Alliteration is the repetition of the same initial consonant sounds in a series of words."
        },
        { 
          question: "What is hyperbole?", 
          options: ["A figure of speech that compares", "An exaggerated statement", "A type of rhyme", "A narrative technique"],
          answer: "An exaggerated statement",
          explanation: "Hyperbole is an exaggerated statement not meant to be taken literally."
        },
        { 
          question: "Which of the following is a simile?", 
          options: ["He is a lion in battle", "She is as brave as a lion", "The wind howled", "Time is a thief"],
          answer: "She is as brave as a lion",
          explanation: "A simile compares two different things using 'like' or 'as'."
        }
      ]
    },
    {
      title: 'Grammar and Sentence Structure',
      description: 'Understanding the rules of grammar and how to construct sentences',
      videoId: "jul2urONzOQ",
      content: [
        "Grammar is the set of rules that govern the structure of sentences in a language.",
        "",
        "1. Parts of Speech:",
        "   - Noun: A person, place, thing, or idea.",
        "   - Verb: An action or state of being.",
        "   - Adjective: A word that describes a noun.",
        "   - Adverb: A word that modifies a verb, adjective, or other adverb.",
        "",
        "2. Sentence Types:",
        "   - Simple Sentence: Contains one independent clause.",
        "   - Compound Sentence: Contains two or more independent clauses joined by a conjunction.",
        "   - Complex Sentence: Contains one independent clause and at least one dependent clause.",
        "",
        "3. Subject-Verb Agreement:",
        "   - The subject and verb must agree in number (singular or plural).",
        "   - Example: 'She runs' (singular) vs. 'They run' (plural)."
      ],
      questions: [
        { 
          question: "What is a noun?", 
          options: ["A word that describes an action", "A word that describes a noun", "A person, place, thing, or idea", "A type of sentence"],
          answer: "A person, place, thing, or idea",
          explanation: "A noun is a word that represents a person, place, thing, or idea."
        },
        { 
          question: "What is a compound sentence?", 
          options: ["A sentence with one independent clause", "A sentence with two independent clauses", "A sentence with one dependent clause", "A sentence with no clauses"],
          answer: "A sentence with two independent clauses",
          explanation: "A compound sentence contains two or more independent clauses joined by a conjunction."
        },
        { 
          question: "What does subject-verb agreement mean?", 
          options: ["The subject and verb must agree in tense", "The subject and verb must agree in number", "The subject and verb must agree in person", "None of the above"],
          answer: "The subject and verb must agree in number",
          explanation: "Subject-verb agreement means that the subject and verb must agree in number (singular or plural)."
        },
        { 
          question: "Which of the following is an example of an adverb?", 
          options: ["Quickly", "Beautiful", "Dog", "Run"],
          answer: "Quickly",
          explanation: "An adverb modifies a verb, adjective, or other adverb, and 'quickly' describes how an action is performed."
        },
        { 
          question: "What is an adjective?", 
          options: ["A word that describes a noun", "A word that describes a verb", "A type of sentence", "A conjunction"],
          answer: "A word that describes a noun",
          explanation: "An adjective is a word that describes or modifies a noun."
        }
      ]
    },
    {
      title: 'Reading Comprehension',
      description: 'Developing skills to understand and analyze texts',
      videoId: "3nLX0CjMO-Q",
      content: [
        "Reading comprehension is the ability to understand and interpret what you read.",
        "",
        "1. Strategies for Comprehension:",
        "   - Preview the text: Look at headings, subheadings, and images.",
        "   - Ask questions: What is the main idea? What are the supporting details?",
        "   - Summarize: After reading, summarize the main points in your own words.",
        "",
        "2. Identifying Main Ideas and Supporting Details:",
        "   - The main idea is the central point of a text.",
        "   - Supporting details provide evidence or examples that reinforce the main idea.",
        "",
        "3. Making Inferences:",
        "   - Inference is the process of drawing conclusions based on evidence and reasoning.",
        "   - Look for clues in the text to understand deeper meanings."
      ],
      questions: [
        { 
          question: "What is the main idea of a text?", 
          options: ["A supporting detail", "The central point", "An inference", "A summary"],
          answer: "The central point",
          explanation: "The main idea is the central point or message that the author wants to convey."
        },
        { 
          question: "What is a strategy for improving reading comprehension?", 
          options: ["Reading quickly", "Ignoring headings", "Previewing the text", "Skipping difficult words"],
          answer: "Previewing the text",
          explanation: "Previewing the text helps you understand the structure and main ideas before reading."
        },
        { 
          question: "What are supporting details?", 
          options: ["The main idea", "Examples and evidence", "Inferences", "Summaries"],
          answer: "Examples and evidence",
          explanation: "Supporting details provide examples and evidence that reinforce the main idea."
        },
        { 
          question: "What does it mean to make an inference?", 
          options: ["To summarize the text", "To draw conclusions based on evidence", "To identify the main idea", "To read quickly"],
          answer: "To draw conclusions based on evidence",
          explanation: "Making an inference involves drawing conclusions based on evidence and reasoning from the text."
        },
        { 
          question: "Which of the following is NOT a strategy for comprehension?", 
          options: ["Asking questions", "Summarizing", "Ignoring the text", "Previewing"],
          answer: "Ignoring the text",
          explanation: "Ignoring the text is not a strategy for comprehension; it hinders understanding."
        }
      ]
    },
    {
      title: 'Writing Skills',
      description: 'Developing effective writing techniques and styles',
      videoId: "RSoRzTtwgP4",
      content: [
        "Writing is a form of communication that conveys ideas, thoughts, and information.",
        "",
        "1. Types of Writing:",
        "   - Narrative: Tells a story with a clear sequence of events.",
        "   - Descriptive: Uses sensory details to paint a picture for the reader.",
        "   - Expository: Explains or informs about a topic.",
        "   - Persuasive: Aims to convince the reader of a particular viewpoint.",
        "",
        "2. Writing Process:",
        "   - Prewriting: Brainstorming and organizing ideas.",
        "   - Drafting: Writing the first version of the text.",
        "   - Revising: Making changes to improve content and structure.",
        "   - Editing: Correcting grammar, punctuation, and spelling.",
        "   - Publishing: Sharing the final piece with an audience.",
        "",
        "3. Importance of Audience and Purpose:",
        "   - Understanding your audience helps tailor your writing style and tone.",
        "   - The purpose of writing influences the content and structure."
      ],
      questions: [
        { 
          question: "What is narrative writing?", 
          options: ["Writing that informs", "Writing that tells a story", "Writing that describes", "Writing that persuades"],
          answer: "Writing that tells a story",
          explanation: "Narrative writing tells a story with a clear sequence of events."
        },
        { 
          question: "What is the first step in the writing process?", 
          options: ["Drafting", "Revising", "Prewriting", "Editing"],
          answer: "Prewriting",
          explanation: "Prewriting is the first step where you brainstorm and organize your ideas."
        },
        { 
          question: "What is the purpose of persuasive writing?", 
          options: ["To tell a story", "To describe something", "To inform about a topic", "To convince the reader"],
          answer: "To convince the reader",
          explanation: "Persuasive writing aims to convince the reader of a particular viewpoint."
        },
        { 
          question: "Why is understanding your audience important?", 
          options: ["It helps you write faster", "It helps tailor your writing style", "It makes writing easier", "It is not important"],
          answer: "It helps tailor your writing style",
          explanation: "Understanding your audience helps you adjust your writing style and tone to better connect with them."
        },
        { 
          question: "What is editing?", 
          options: ["Making changes to improve content", "Correcting grammar and punctuation", "Brainstorming ideas", "Sharing the final piece"],
          answer: "Correcting grammar and punctuation",
          explanation: "Editing involves correcting grammar, punctuation, and spelling in your writing."
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
    <div className="english-class-container">
      <header className="header">
        <h1>English Class 10 Livebook</h1>
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

export default EnglishClass10Livebook;