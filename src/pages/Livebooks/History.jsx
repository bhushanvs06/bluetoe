import React, { useState } from 'react';
import "./indian-geo.css";

const MarathaHistoryLivebook = () => {
  // Detailed modules with comprehensive text content
  const modules = [
    {
      title: 'Origins of the Maratha Empire',
      description: 'Understanding the foundations of Maratha power',
      videoId: "mDAvWi0_wr8", // This might be an invalid YouTube ID
      content: [
        "The Maratha Empire emerged in the 17th century as a significant power in the Indian subcontinent:",
        "",
        "1. Historical Context:",
        "   - Rise amid declining Mughal authority",
        "   - Began in Western Deccan (modern Maharashtra)",
        "   - Initially a resistance movement against Adilshahi Sultanate",
        "   - Later expanded to challenge Mughal dominance",
        "",
        "2. Geographical Importance:",
        "   - Western Ghats provided natural fortifications",
        "   - Strategic hill forts (approximately 350) formed defense network",
        "   - Sahyadri mountains offered tactical advantages",
        "   - Deccan plateau allowed for guerrilla warfare tactics",
        "",
        "3. Early Leadership:",
        "   - Shahaji Bhonsle (1594-1664): Military commander, father of Shivaji",
        "   - Served under Adilshahi Sultanate and Mughals",
        "   - Established initial power base in Pune region",
        "   - Laid groundwork for son's future conquests",
        "",
        "4. Cultural Foundations:",
        "   - Influenced by Bhakti movement and Hindu revivalism",
        "   - Inspired by saints like Tukaram and Ramdas",
        "   - Developed unique Maratha identity and nationalism",
        "   - Promoted Sanskrit and Marathi language and literature",
        "",
        "5. Socio-Political Structure:",
        "   - Drew strength from agricultural communities",
        "   - Transcended caste barriers in military recruitment",
        "   - Developed administrative systems based on village communities",
        "   - Established initial governance through councils (Ashtapradhan)"
      ],
      questions: [
        { 
          question: "Who was the father of Shivaji Maharaj?", 
          options: ["Sambhaji Bhonsle", "Shahaji Bhonsle", "Ekoji Bhonsle", "Maloji Bhonsle"],
          answer: "Shahaji Bhonsle",
          explanation: "Shahaji Bhonsle (1594-1664) was a military commander who served under the Adilshahi Sultanate and later the Mughals. He was the father of Shivaji Maharaj."
        },
        { 
          question: "Which region formed the initial power base of the Maratha movement?", 
          options: ["Gujarat", "Pune region", "Bijapur", "Golconda"],
          answer: "Pune region",
          explanation: "The Pune region in the Western Deccan formed the initial power base of the Maratha movement, where Shahaji and later Shivaji established their authority."
        },
        { 
          question: "What geographical feature provided natural protection to the Marathas?", 
          options: ["Ganges River", "Thar Desert", "Western Ghats", "Eastern Ghats"],
          answer: "Western Ghats",
          explanation: "The Western Ghats mountain range provided natural fortifications and strategic advantages to the Marathas, with their numerous hill forts forming a defense network."
        },
        { 
          question: "Which religious movement influenced the cultural foundations of the Maratha Empire?", 
          options: ["Sufi movement", "Bhakti movement", "Lingayat movement", "Jain movement"],
          answer: "Bhakti movement",
          explanation: "The Bhakti movement, which emphasized devotion and spiritual equality, significantly influenced the cultural and religious foundations of the Maratha Empire."
        },
        { 
          question: "What was the ruling council established by the Marathas called?", 
          options: ["Chauth", "Sardeshmukhi", "Ashtapradhan", "Panchayat"],
          answer: "Ashtapradhan",
          explanation: "The Ashtapradhan was the council of eight ministers established by Shivaji Maharaj to assist in governance and administration of the Maratha state."
        }
      ]
    },
    {
      title: 'Shivaji Maharaj: The Founder',
      description: 'The life and achievements of Chhatrapati Shivaji Maharaj',
      videoId: "gKBfgKmqQjA",
      content: [
        "Chhatrapati Shivaji Maharaj (1630-1680) established the Maratha Empire through his extraordinary leadership and vision:",
        "",
        "Early Life and Education:",
        "   - Born at Shivneri Fort to Shahaji and Jijabai",
        "   - Received military training from Dadoji Konddeo",
        "   - Influenced by mother's religious devotion and patriotism",
        "   - Educated in statecraft, warfare, and Hindu scriptures",
        "   - Developed guerrilla warfare tactics suited to mountainous terrain",
        "",
        "Key Military Campaigns:",
        "   - Captured Torna Fort (1646) at age 16, marking beginning of Maratha power",
        "   - Conquered Raigad (1656), which became his capital",
        "   - Defeated Afzal Khan at Pratapgad (1659) using wagh nakh (tiger claws)",
        "   - Escaped from Mughal captivity at Agra (1666)",
        "   - Sacked Surat (1664, 1670), weakening Mughal economic power",
        "   - Battle of Salher (1672): Major victory against Mughals",
        "",
        "Administrative Reforms:",
        "   - Coronation (1674): Declared Chhatrapati (sovereign ruler)",
        "   - Established Ashtapradhan (council of eight ministers)",
        "   - Implemented revenue systems (Chauth and Sardeshmukhi)",
        "   - Created navy (first Indian ruler with naval focus)",
        "   - Promoted Sanskrit and Marathi as court languages",
        "   - Developed legal code (Adil Shahi) based on justice and equity",
        "",
        "Leadership Philosophy:",
        "   - Religious tolerance despite Hindu revival",
        "   - Protected mosques and Quran during campaigns",
        "   - Employed Muslims in high positions (e.g., Ibrahim Khan as navy chief)",
        "   - Emphasized swaraj (self-rule) and opposition to foreign dominance",
        "   - Established meritocratic military recruitment",
        "",
        "Legacy and Death:",
        "   - Died at Raigad Fort in 1680 (age 50)",
        "   - Left empire of 4-5% of subcontinent with 300+ forts",
        "   - Created foundation for later Maratha expansion",
        "   - Revered as national hero and symbol of resistance",
        "   - Inspired future independence movements"
      ],
      questions: [
        { 
          question: "In which year was Shivaji Maharaj crowned as Chhatrapati?", 
          options: ["1664", "1670", "1674", "1680"],
          answer: "1674",
          explanation: "Shivaji Maharaj was coronated as Chhatrapati (sovereign ruler) in 1674 at Raigad Fort, marking the formal establishment of the Maratha Empire."
        },
        { 
          question: "At which fort did Shivaji Maharaj defeat Afzal Khan?", 
          options: ["Raigad", "Pratapgad", "Torna", "Sindhudurg"],
          answer: "Pratapgad",
          explanation: "Shivaji Maharaj defeated the Adilshahi general Afzal Khan at Pratapgad Fort in 1659, using a wagh nakh (tiger claw) weapon in close combat."
        },
        { 
          question: "Which city did Shivaji Maharaj sack twice to weaken Mughal economic power?", 
          options: ["Delhi", "Agra", "Surat", "Burhanpur"],
          answer: "Surat",
          explanation: "Shivaji Maharaj sacked Surat, a major Mughal port city and economic center, twice (in 1664 and 1670), significantly weakening Mughal economic power."
        },
        { 
          question: "What was the weapon used by Shivaji Maharaj to kill Afzal Khan?", 
          options: ["Sword", "Wagh nakh", "Spear", "Bow and arrow"],
          answer: "Wagh nakh",
          explanation: "Shivaji Maharaj used a wagh nakh (tiger claw), a hand weapon that could be concealed in the palm, to counter Afzal Khan's treacherous attack."
        },
        { 
          question: "Who was appointed as the chief of Shivaji's navy?", 
          options: ["Tanaji Malusare", "Baji Prabhu", "Ibrahim Khan", "Kanhoji Angre"],
          answer: "Ibrahim Khan",
          explanation: "Ibrahim Khan, a Muslim admiral, was appointed as the chief of Shivaji's navy, demonstrating Shivaji's meritocratic approach and religious tolerance."
        }
      ]
    },
    {
      title: 'Maratha Expansion and Peshwa Era',
      description: 'The growth of Maratha power under the Peshwas',
      videoId: "zp8rCKln_7I",
      content: [
        "Following Shivaji's death, the Maratha Empire underwent significant expansion under Peshwa leadership:",
        "",
        "Immediate Succession Crisis:",
        "   - Sambhaji (1680-1689): Shivaji's elder son",
        "   - Continued resistance against Mughals",
        "   - Executed by Aurangzeb after capture",
        "   - Rajaram (1689-1700): Continued guerrilla warfare",
        "   - Tarabai (1700-1707): Regent for son Shivaji II",
        "   - Maintained resistance during Mughal invasion",
        "",
        "Rise of the Peshwas:",
        "   - Peshwa: Originally prime minister, became de facto ruler",
        "   - Balaji Vishwanath (1713-1720): First powerful Peshwa",
        "   - Secured release of Shahu (Shivaji's grandson) from Mughals",
        "   - Established hereditary Peshwa position",
        "   - Bajirao I (1720-1740): Greatest Peshwa general",
        "   - Expanded Maratha territory to central and northern India",
        "   - Never lost a battle in his career",
        "",
        "Territorial Expansion:",
        "   - Balaji Bajirao (Nanasaheb) (1740-1761)",
        "   - Maratha control extended to Attock (modern Pakistan)",
        "   - Annexed territories: Gujarat, Malwa, Bundelkhand",
        "   - Maratha influence from Arabian Sea to Bengal",
        "   - Expeditions to Rajputana, Punjab, and Rohilkhand",
        "   - Collected Chauth from many regions of India",
        "",
        "Maratha Confederacy:",
        "   - Decentralized structure with semi-autonomous chiefs",
        "   - Major families: Holkars of Indore, Scindias of Gwalior",
        "   - Gaekwads of Baroda, Bhonsles of Nagpur",
        "   - Peshwa maintained central authority from Pune",
        "   - Combined military strength of over 100,000 troops",
        "",
        "The Zenith of Power:",
        "   - Brief period of dominance (1750-1761)",
        "   - Controlled approximately 1/3 of Indian subcontinent",
        "   - Filled power vacuum left by declining Mughals",
        "   - Established influence over Delhi and Mughal Emperor",
        "   - Faced challenge from rising Afghan power under Ahmad Shah Abdali"
      ],
      questions: [
        { 
          question: "Who was the first powerful Peshwa of the Maratha Empire?", 
          options: ["Balaji Vishwanath", "Bajirao I", "Balaji Bajirao", "Madhavrao I"],
          answer: "Balaji Vishwanath",
          explanation: "Balaji Vishwanath (1713-1720) was the first powerful Peshwa who transformed the role from prime minister to de facto ruler and established the hereditary Peshwa position."
        },
        { 
          question: "Which Peshwa is known as the greatest Maratha general who never lost a battle?", 
          options: ["Balaji Vishwanath", "Bajirao I", "Madhavrao I", "Balaji Bajirao"],
          answer: "Bajirao I",
          explanation: "Bajirao I (1720-1740) is considered the greatest Maratha general who never lost a battle in his career and expanded Maratha territory to central and northern India."
        },
        { 
          question: "What was the Maratha system of collecting tax from territories not under their direct control?", 
          options: ["Jagir", "Mansabdari", "Chauth", "Zamindari"],
          answer: "Chauth",
          explanation: "Chauth was a tax equal to 25% of revenue collected by Marathas from territories not under their direct control, in exchange for protection and non-invasion."
        },
        { 
          question: "Which Maratha ruler was executed by Mughal Emperor Aurangzeb?", 
          options: ["Shivaji", "Sambhaji", "Rajaram", "Shahu"],
          answer: "Sambhaji",
          explanation: "Sambhaji, Shivaji's elder son who ruled from 1680-1689, was captured, tortured, and executed by Mughal Emperor Aurangzeb after refusing to convert to Islam."
        },
        { 
          question: "Which female regent led the Maratha resistance against Mughals after Rajaram's death?", 
          options: ["Jijabai", "Tarabai", "Ahilyabai Holkar", "Putalabai"],
          answer: "Tarabai",
          explanation: "Tarabai, wife of Rajaram, served as regent for her young son Shivaji II from 1700-1707 and led the Maratha resistance against the Mughals during a critical period."
        }
      ]
    },
    {
      title: 'Third Battle of Panipat and Aftermath',
      description: 'The turning point in Maratha history and its consequences',
      videoId: "N6JsUK1Xgvs",
      content: [
        "The Third Battle of Panipat (1761) marked a crucial turning point in Maratha history:",
        "",
        "Causes of the Conflict:",
        "   - Maratha expansion into Punjab and northern territories",
        "   - Ahmad Shah Abdali's (Durrani) ambitions in India",
        "   - Rohilla and Awadh alliance with Afghans",
        "   - Lack of support from Rajputs and Jats",
        "   - Internal disputes among Maratha commanders",
        "",
        "The Battle of Panipat:",
        "   - Date: January 14, 1761",
        "   - Location: Panipat (modern Haryana)",
        "   - Maratha forces led by Sadashivrao Bhau",
        "   - Afghan forces led by Ahmad Shah Abdali",
        "   - Massive scale: 100,000+ troops on each side",
        "   - Tactical errors by Marathas:",
        "     * Long supply lines from Deccan",
        "     * Heavy artillery slowed movement",
        "     * Inclusion of non-combatants in camp",
        "   - Decisive Afghan victory",
        "   - Estimated 40,000-70,000 Marathas killed",
        "",
        "Immediate Consequences:",
        "   - Loss of key Maratha leaders and commanders",
        "   - Retreat from northern territories",
        "   - Severe blow to Maratha prestige and finances",
        "   - Balaji Bajirao (Nanasaheb Peshwa) died from shock",
        "   - Vacuum of power in north India",
        "",
        "Recovery Period:",
        "   - Madhavrao I Peshwa (1761-1772)",
        "   - Restored Maratha fortunes and reconquered territories",
        "   - Reestablished authority over Rajputana and northern India",
        "   - Curtailed Nizam of Hyderabad's power",
        "   - Successful military campaigns against Hyder Ali of Mysore",
        "",
        "Long-term Impact:",
        "   - Prevented complete Maratha domination of India",
        "   - Weakened Maratha confederacy and central authority",
        "   - Opened door for eventual British expansion",
        "   - Forced shift from offensive to defensive posture",
        "   - Transformed political landscape of 18th century India"
      ],
      questions: [
        { 
          question: "When was the Third Battle of Panipat fought?", 
          options: ["January 14, 1760", "January 14, 1761", "January 14, 1762", "January 14, 1763"],
          answer: "January 14, 1761",
          explanation: "The Third Battle of Panipat was fought on January 14, 1761, between the Maratha forces and the Afghan army led by Ahmad Shah Abdali."
        },
        { 
          question: "Who led the Maratha forces at the Third Battle of Panipat?", 
          options: ["Peshwa Balaji Bajirao", "Madhavrao I", "Sadashivrao Bhau", "Bajirao I"],
          answer: "Sadashivrao Bhau",
          explanation: "Sadashivrao Bhau, cousin of Peshwa Balaji Bajirao, was the supreme commander of the Maratha forces at the Third Battle of Panipat."
        },
        { 
          question: "Who led the Afghan forces against the Marathas at Panipat?", 
          options: ["Nadir Shah", "Ahmad Shah Abdali", "Dost Mohammad Khan", "Zaman Shah"],
          answer: "Ahmad Shah Abdali",
          explanation: "Ahmad Shah Abdali (also known as Ahmad Shah Durrani), the founder of the Durrani Empire, led the Afghan forces against the Marathas at Panipat."
        },
        { 
          question: "Which Peshwa is credited with restoring Maratha power after the defeat at Panipat?", 
          options: ["Balaji Bajirao", "Madhavrao I", "Raghunathrao", "Narayan Rao"],
          answer: "Madhavrao I",
          explanation: "Madhavrao I Peshwa (1761-1772) is credited with restoring Maratha fortunes and reconquering territories after the devastating defeat at Panipat."
        },
        { 
          question: "What was one of the tactical errors made by the Marathas at Panipat?", 
          options: ["Having too few troops", "Not using artillery", "Including non-combatants in their camp", "Attacking too early"],
          answer: "Including non-combatants in their camp",
          explanation: "The Marathas made a tactical error by including thousands of non-combatants (pilgrims, servants, and families) in their camp, which complicated logistics and retreat."
        }
      ]
    },
    {
      title: 'Decline and British Conquest',
      description: 'The final phase of the Maratha Empire and its legacy',
      videoId: "Aesag8J7EeM",
      content: [
        "The decline of the Maratha Empire and its eventual defeat by the British East India Company:",
        "",
        "Internal Factors of Decline:",
        "   - Succession disputes after Madhavrao I's death (1772)",
        "   - Court intrigues and assassination of Peshwa Narayan Rao (1773)",
        "   - Regency of Nana Fadnavis (1773-1800)",
        "   - Weakening of central Peshwa authority",
        "   - Growing independence of Maratha chiefs",
        "   - Failure to modernize military technology",
        "   - Lack of naval power to counter British",
        "",
        "Anglo-Maratha Wars:",
        "   - First Anglo-Maratha War (1775-1782):",
        "     * Caused by British support for Raghunathrao's claim",
        "     * Treaty of Salbai (1782): Generally favorable to Marathas",
        "     * Maintained Maratha dominance in Western India",
        "   - Second Anglo-Maratha War (1803-1805):",
        "     * Triggered by Treaty of Bassein (1802)",
        "     * Peshwa Bajirao II accepted British protection",
        "     * Defeats at Assaye and Argaon against Arthur Wellesley",
        "     * Significant territorial losses",
        "   - Third Anglo-Maratha War (1817-1818):",
        "     * Final defeat of Maratha confederacy",
        "     * Peshwa Bajirao II surrendered to British",
        "     * End of Peshwa rule (annexed to Bombay Presidency)",
        "     * Princely states created under British suzerainty",
        "",
        "Notable Resistance Leaders:",
        "   - Yashwantrao Holkar: Defeated British at Bharatpur",
        "   - Mahadji Scindia: Modernized army with French assistance",
        "   - Nana Saheb: Adopted son of Bajirao II, leader in 1857 revolt",
        "   - Tatya Tope: Military commander in 1857 revolt",
        "   - Rani Lakshmi Bai of Jhansi: Fought British in 1857",
        "",
        "Legacy:",
        "   - Administrative institutions incorporated by British",
        "   - Influence on later Indian freedom movement",
        "   - Cultural and linguistic impact on Western India",
        "   - Military traditions and tactics studied by British",
        "   - Revival of Hindu traditions and Sanskrit learning",
        "",
        "Modern Significance:",
        "   - Shivaji as symbol of nationalism and resistance",
        "   - Architectural heritage: Forts, temples, ghats",
        "   - Literary legacy: Bakhar chronicles, poetry",
        "   - Continuing political influence in Maharashtra",
        "   - Inspirational source for Indian military doctrine"
      ],
      questions: [
        { 
          question: "How many Anglo-Maratha Wars were fought?", 
          options: ["One", "Two", "Three", "Four"],
          answer: "Three",
          explanation: "Three Anglo-Maratha Wars were fought: First (1775-1782), Second (1803-1805), and Third (1817-1818), resulting in the eventual defeat of the Maratha Empire."
        },
        { 
          question: "Which treaty marked the beginning of the end for Maratha independence?", 
          options: ["Treaty of Salbai", "Treaty of Bassein", "Treaty of Purandar", "Treaty of Surat"],
          answer: "Treaty of Bassein",
          explanation: "The Treaty of Bassein (1802), signed by Peshwa Bajirao II with the British, accepting British protection, marked the beginning of the end for Maratha independence."
        },
        { 
          question: "Who was the last Peshwa of the Maratha Empire?", 
          options: ["Madhavrao II", "Narayanrao", "Bajirao II", "Raghunathrao"],
          answer: "Bajirao II",
          explanation: "Bajirao II (1795-1818) was the last Peshwa of the Maratha Empire. After his defeat in the Third Anglo-Maratha War, he surrendered to the British and the Peshwa position was abolished."
        },
        { 
          question: "Which Maratha leader modernized his army with French assistance?", 
          options: ["Yashwantrao Holkar", "Mahadji Scindia", "Nana Fadnavis", "Daulatrao Scindia"],
          answer: "Mahadji Scindia",
          explanation: "Mahadji Scindia modernized his army with French assistance, employing officers like Benoît de Boigne to train his troops in European military tactics and technology."
        },
        { 
          question: "Which British general defeated the Marathas at the Battle of Assaye?", 
          options: ["Lord Cornwallis", "Lord Wellesley", "Arthur Wellesley", "Lord Hastings"],
          answer: "Arthur Wellesley",
          explanation: "Arthur Wellesley (later Duke of Wellington) defeated the Marathas at the Battle of Assaye in 1803 during the Second Anglo-Maratha War."
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
    <div className="indian-history-container">
      <header className="header">
        <h1>Maratha History Livebook</h1>
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

export default MarathaHistoryLivebook;