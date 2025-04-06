import React, { useState } from 'react';
import "./indian-geo.css";

const IndianGeographyLivebook = () => {
  // Detailed modules with comprehensive text content
  const modules = [
    {
      title: 'Physical Features of India',
      description: 'Understanding India\'s diverse physical landscape',
      videoId: "gI9tibkul9A", // This might be an invalid YouTube ID
      content: [
        "India's geography is remarkably diverse, with physical features that can be divided into six main categories:",
        "",
        "1. The Himalayan Mountains:",
        "   - Young, fold mountains formed by tectonic collision",
        "   - Three parallel ranges: Himadri (Greater), Himachal (Lesser), and Shiwaliks (Outer)",
        "   - Home to world's highest peaks including K2 (8,611m) and Kangchenjunga (8,586m)",
        "   - Source of major rivers like Ganga, Yamuna, and Brahmaputra",
        "   - Acts as climate barrier preventing cold winds from Central Asia",
        "",
        "2. The Northern Plains:",
        "   - Formed by alluvial deposits of Indus-Ganga-Brahmaputra systems",
        "   - World's most extensive stretch of alluvium (2,400 km long)",
        "   - Divided into Punjab, Ganga, and Brahmaputra plains",
        "   - Fertile soil supports intensive agriculture (India's 'food bowl')",
        "",
        "3. The Peninsular Plateau:",
        "   - Ancient tableland of igneous and metamorphic rocks",
        "   - Comprises Deccan Plateau (south of Narmada) and Central Highlands",
        "   - Rich in mineral resources (iron, coal, manganese, bauxite)",
        "   - Bordered by Western and Eastern Ghats",
        "",
        "4. The Indian Desert:",
        "   - Arid region in western Rajasthan (Thar Desert)",
        "   - Characterized by sand dunes and low vegetation",
        "   - Receives less than 150mm annual rainfall",
        "   - Features unique desert ecosystems and cultures",
        "",
        "5. The Coastal Plains:",
        "   - Narrow strips between mountains and sea",
        "   - Western coast (narrower) has estuaries and lagoons",
        "   - Eastern coast (wider) features deltas of major rivers",
        "   - Important for fishing, ports, and tourism",
        "",
        "6. The Islands:",
        "   - Andaman & Nicobar (Bay of Bengal): Volcanic origin",
        "   - Lakshadweep (Arabian Sea): Coral atolls",
        "   - Strategic military and ecological significance"
      ],
      questions: [
        { 
          question: "Which is the highest peak in India?", 
          options: ["Kangchenjunga", "Nanda Devi", "K2", "Mount Everest"],
          answer: "K2",
          explanation: "K2 (Godwin-Austen) in POK is India's highest peak (8,611m), though Kangchenjunga is highest within Indian territory."
        },
        { 
          question: "The Northern Plains are formed by which rivers?", 
          options: ["Ganga only", "Indus only", "Ganga, Indus, Brahmaputra", "Peninsular rivers"],
          answer: "Ganga, Indus, Brahmaputra",
          explanation: "The plains are formed by alluvial deposits of the Indus, Ganga and Brahmaputra river systems."
        },
        { 
          question: "Which plateau is known as 'Mineral Heartland of India'?", 
          options: ["Deccan", "Chota Nagpur", "Malwa", "Meghalaya"],
          answer: "Chota Nagpur",
          explanation: "Chota Nagpur Plateau has India's richest mineral deposits including coal, iron, mica etc."
        },
        { 
          question: "The Thar Desert is located in which state?", 
          options: ["Gujarat", "Rajasthan", "Punjab", "Haryana"],
          answer: "Rajasthan",
          explanation: "About 85% of the Thar Desert lies in Rajasthan, extending into Gujarat, Punjab and Haryana."
        },
        { 
          question: "Which coastal plain is wider?", 
          options: ["Eastern", "Western", "Both equal", "None of these"],
          answer: "Eastern",
          explanation: "The Eastern Coastal Plain is wider (100-130km) compared to Western (50-80km) due to more river deltas."
        }
      ]
    },
    {
      title: 'Drainage Systems of India',
      description: 'Understanding India\'s river systems and watersheds',
      videoId: "S_FRXSuQeOM",
      content: [
        "India's drainage systems can be classified into two major groups with distinct characteristics:",
        "",
        "Himalayan Rivers (Perennial):",
        "   - Source: Glaciers and rainfall",
        "   - Examples: Indus, Ganga, Brahmaputra, Yamuna",
        "   - Characteristics:",
        "     * Long courses with large basins",
        "     * High water flow throughout year",
        "     * Form extensive floodplains and fertile deltas",
        "     * Prone to flooding during monsoon",
        "   - The Ganga System:",
        "     * Most sacred and important river",
        "     * Originates as Bhagirathi from Gangotri glacier",
        "     * Joined by Yamuna at Allahabad (Prayagraj)",
        "     * Forms world's largest delta (Sundarbans)",
        "",
        "Peninsular Rivers (Seasonal):",
        "   - Source: Rainfall only",
        "   - Examples: Godavari, Krishna, Kaveri, Narmada",
        "   - Characteristics:",
        "     * Shorter courses with smaller basins",
        "     * Flow varies seasonally (heavy in monsoon, low in summer)",
        "     * Many flow eastward into Bay of Bengal",
        "     * Some west-flowing rivers form estuaries",
        "   - Special Features:",
        "     * Narmada-Tapi flow west through rift valleys",
        "     * Godavari is called 'Dakshin Ganga' (Ganga of South)",
        "     * Kaveri has highest irrigation efficiency",
        "",
        "Watershed Management Challenges:",
        "   - Growing water scarcity in many basins",
        "   - Pollution from agricultural and industrial runoff",
        "   - Inter-state water disputes (Cauvery, Krishna-Godavari)",
        "   - Need for sustainable water conservation practices"
      ],
      questions: [
        { 
          question: "Which is the longest river in India?", 
          options: ["Ganga", "Yamuna", "Godavari", "Brahmaputra"],
          answer: "Ganga",
          explanation: "Ganga flows 2,525 km from Gangotri to Bay of Bengal, making it India's longest river."
        },
        { 
          question: "The river Brahmaputra is known as in Tibet?", 
          options: ["Tsangpo", "Mekong", "Yangtze", "Irrawaddy"],
          answer: "Tsangpo",
          explanation: "Brahmaputra is called Tsangpo in Tibet, Jamuna in Bangladesh and Dihang in Arunachal."
        },
        { 
          question: "Which river forms the largest delta in India?", 
          options: ["Ganga-Brahmaputra", "Godavari", "Krishna", "Mahanadi"],
          answer: "Ganga-Brahmaputra",
          explanation: "The Sundarbans delta (Ganga-Brahmaputra) is world's largest at about 1 lakh sq km."
        },
        { 
          question: "Which river is known as 'Dakshin Ganga'?", 
          options: ["Krishna", "Godavari", "Kaveri", "Narmada"],
          answer: "Godavari",
          explanation: "Godavari is called Dakshin Ganga due to its large size and importance in peninsular India."
        },
        { 
          question: "The river Narmada flows through which rift valley?", 
          options: ["Satpura", "Vindhya", "Narmada-Son", "None of these"],
          answer: "Narmada-Son",
          explanation: "Narmada flows west through the Narmada-Son rift valley between Satpura and Vindhya ranges."
        }
      ]
    },
    {
      title: 'Climate of India',
      description: 'Understanding monsoon mechanisms and weather patterns',
      videoId: "cIcmIr7kRRk",
      content: [
        "India's climate is predominantly tropical monsoon, characterized by distinct seasonal patterns:",
        "",
        "The Indian Monsoon System:",
        "   - Caused by differential heating of land and sea",
        "   - Southwest Monsoon (June-September):",
        "     * Brings 75% of India's annual rainfall",
        "     * Advances from Kerala (June 1) to NW India (mid-July)",
        "     * Two branches: Arabian Sea and Bay of Bengal",
        "   - Northeast Monsoon (October-December):",
        "     * Affects mainly Tamil Nadu coast",
        "     * Provides 50% of annual rainfall to SE India",
        "",
        "Seasonal Variations:",
        "1. Winter (December-February):",
        "   - Cold weather in north (frost in plains, snow in Himalayas)",
        "   - Mild in peninsular India",
        "   - Western disturbances bring rain to NW India",
        "",
        "2. Summer (March-May):",
        "   - Intense heat (especially in northern plains)",
        "   - Local thunderstorms (Nor'westers in Bengal)",
        "   - Loo - hot, dry winds in NW India",
        "",
        "3. Rainy Season (June-September):",
        "   - Progresses from south to north",
        "   - Heavy rainfall on windward side of Western Ghats",
        "   - Break periods when rain stops for days",
        "",
        "4. Post-Monsoon (October-November):",
        "   - Retreating monsoon",
        "   - Cyclones form in Bay of Bengal affecting east coast",
        "",
        "Climate Regions:",
        "   - Tropical Wet: Western Ghats, NE India (heavy rain)",
        "   - Tropical Dry: Most of interior peninsula",
        "   - Subtropical: Northern plains",
        "   - Arid: Rajasthan",
        "   - Mountain: Himalayas",
        "",
        "Climate Change Impacts:",
        "   - Erratic monsoon patterns",
        "   - Rising frequency of extreme weather events",
        "   - Glacial retreat in Himalayas",
        "   - Sea level rise threatening coastal areas"
      ],
      questions: [
        { 
          question: "What causes the Indian Monsoon system?", 
          options: ["Earth's rotation", "Differential heating of land and sea", "Tectonic activity", "Solar flares"],
          answer: "Differential heating of land and sea",
          explanation: "The Indian Monsoon is caused by the temperature difference between land and sea, leading to seasonal wind shifts."
        },
        { 
          question: "Which monsoon brings the majority of India's annual rainfall?", 
          options: ["Southwest Monsoon", "Northeast Monsoon", "Western Disturbances", "Cyclonic Monsoon"],
          answer: "Southwest Monsoon",
          explanation: "The Southwest Monsoon (June-September) brings about 75% of India's annual rainfall, making it the dominant monsoon season."
        },
        { 
          question: "When does the Southwest Monsoon typically reach Kerala?", 
          options: ["May 15", "June 1", "July 1", "August 15"],
          answer: "June 1",
          explanation: "The Southwest Monsoon typically advances into India from the Arabian Sea and reaches Kerala around June 1."
        },
        { 
          question: "Which Indian state receives most of its rainfall from the Northeast Monsoon?", 
          options: ["Kerala", "Tamil Nadu", "Maharashtra", "Rajasthan"],
          answer: "Tamil Nadu",
          explanation: "Tamil Nadu receives about 50% of its annual rainfall from the Northeast Monsoon, which occurs between October and December."
        },
        { 
          question: "The Southwest Monsoon has two branches. What are they?", 
          options: ["Himalayan and Western", "Bay of Bengal and Arabian Sea", "Indian Ocean and Pacific Ocean", "Deccan and Gangetic"],
          answer: "Bay of Bengal and Arabian Sea",
          explanation: "The Southwest Monsoon has two branches—one originating from the Arabian Sea and the other from the Bay of Bengal, bringing rain to different parts of India."
        }
      ]
    },
    {
      title: 'Natural Vegetation & Wildlife',
      description: 'Understanding India\'s diverse ecosystems',
      videoId: "5OOiPkv5GCc",
      content: [
        "India's vegetation types closely follow its climate and terrain patterns:",
        "",
        "Major Forest Types:",
        "1. Tropical Evergreen:",
        "   - Western Ghats, Andaman, NE India",
        "   - Dense, multi-layered with no definite seasonality",
        "   - Species: Mahogany, rosewood, ebony",
        "   - High biodiversity (50% of India's plant species)",
        "",
        "2. Tropical Deciduous (Monsoon Forests):",
        "   - Most extensive (65% of forest area)",
        "   - Moist deciduous (eastern slopes of W. Ghats, NE)",
        "   - Dry deciduous (Peninsular plateau, foothills)",
        "   - Teak, sal, sandalwood important species",
        "",
        "3. Thorn Forests:",
        "   - Arid regions of Rajasthan, Gujarat",
        "   - Xerophytic plants with thorns, small leaves",
        "   - Babul, khejri, cactus species",
        "",
        "4. Montane Forests:",
        "   - Himalayan slopes (varies with altitude)",
        "   - Temperate broadleaf (oak, rhododendron)",
        "   - Coniferous (pine, deodar at higher levels)",
        "   - Alpine grasslands above tree line",
        "",
        "Wildlife Conservation:",
        "   - India has 7% of world's recorded species",
        "   - 104 National Parks and 566 Wildlife Sanctuaries",
        "   - Project Tiger (1973) increased tiger numbers to 3,167 (2022)",
        "   - Challenges: Habitat loss, poaching, human-wildlife conflict",
        "",
        "Biodiversity Hotspots:",
        "   - Western Ghats-Sri Lanka: 5,000 flowering plants (1,700 endemic)",
        "   - Himalayas: Home to snow leopard, red panda",
        "   - Indo-Burma: Covers NE India, rich in primates",
        "",
        "Protected Area Network:",
        "   - Biosphere Reserves (18): Nilgiri, Sundarbans, Gulf of Mannar",
        "   - Ramsar Sites (75 wetlands): Chilika, Keoladeo, Loktak",
        "   - UNESCO World Heritage Sites: Kaziranga, Manas, Nanda Devi"
      ],
      questions: [
        { 
          question: "Which type of forest covers the largest area in India?", 
          options: ["Tropical Evergreen Forest", "Tropical Deciduous Forest", "Thorn Forest", "Mangrove Forest"],
          answer: "Tropical Deciduous Forest",
          explanation: "Tropical Deciduous Forests, also known as Monsoon Forests, cover the largest area in India and shed their leaves in the dry season."
        },
        { 
          question: "Which state in India has the largest forest cover?", 
          options: ["Madhya Pradesh", "Arunachal Pradesh", "Chhattisgarh", "Maharashtra"],
          answer: "Madhya Pradesh",
          explanation: "Madhya Pradesh has the largest forest cover in India, followed by Arunachal Pradesh and Chhattisgarh."
        },
        { 
          question: "Sundarbans is famous for which type of forest?", 
          options: ["Tropical Deciduous Forest", "Mangrove Forest", "Thorn Forest", "Alpine Forest"],
          answer: "Mangrove Forest",
          explanation: "Sundarbans, located in West Bengal, is the world's largest mangrove forest and is home to the Royal Bengal Tiger."
        },
        { 
          question: "Which of the following is a wildlife sanctuary in India?", 
          options: ["Kaziranga", "Valley of Flowers", "Gir", "All of the above"],
          answer: "All of the above",
          explanation: "Kaziranga (Assam), Valley of Flowers (Uttarakhand), and Gir (Gujarat) are all famous wildlife sanctuaries in India."
        },
        { 
          question: "Which animal is mainly protected in the Gir National Park?", 
          options: ["Bengal Tiger", "One-Horned Rhino", "Asiatic Lion", "Snow Leopard"],
          answer: "Asiatic Lion",
          explanation: "Gir National Park in Gujarat is the only place where the Asiatic Lion is found in the wild."
        }
      ]
    },
    {
      title: 'Agriculture & Soil Types',
      description: 'Understanding India\'s farming systems and land resources',
      videoId: "bgqea0E2eAY",
      content: [
        "India's agricultural systems are closely tied to its diverse soil types and climatic conditions:",
        "",
        "Major Soil Types:",
        "1. Alluvial Soils:",
        "   - Northern plains and river valleys",
        "   - Rich in potash, phosphoric acid, lime",
        "   - Ideal for wheat, rice, sugarcane",
        "   - New alluvium (khadar) vs old alluvium (bangar)",
        "",
        "2. Black Soils (Regur):",
        "   - Deccan plateau (Maharashtra, MP, Gujarat)",
        "   - High clay content, moisture retentive",
        "   - Perfect for cotton (called 'black cotton soil')",
        "   - Rich in iron, lime, calcium, magnesium",
        "",
        "3. Red Soils:",
        "   - Eastern and southern peninsula",
        "   - Formed from crystalline igneous rocks",
        "   - Rich in iron, poor in nitrogen and humus",
        "   - Suitable for millets, groundnuts, tobacco",
        "",
        "4. Laterite Soils:",
        "   - High rainfall areas (Western Ghats, NE, Odisha)",
        "   - Leached soils with iron and aluminum oxides",
        "   - Good for tea, coffee, cashew when fertilized",
        "",
        "Agricultural Seasons:",
        "   - Kharif (June-October): Rice, maize, cotton, groundnut",
        "   - Rabi (November-April): Wheat, barley, mustard, gram",
        "   - Zaid (March-June): Watermelon, cucumber, vegetables",
        "",
        "Green Revolution Impacts:",
        "   - Introduced HYV seeds, irrigation, fertilizers",
        "   - Made India self-sufficient in food grains",
        "   - Focused on wheat and rice in Punjab, Haryana, UP",
        "   - Environmental concerns: Water depletion, soil degradation",
        "",
        "Recent Developments:",
        "   - Organic farming initiatives (Sikkim is 100% organic)",
        "   - Precision agriculture using technology",
        "   - Climate-smart agriculture practices",
        "   - Promotion of millets as 'nutri-cereals'"
      ],
      questions: [
        { 
          question: "Which soil type is most suitable for cotton cultivation?", 
          options: ["Alluvial Soil", "Black Soil", "Red Soil", "Laterite Soil"],
          answer: "Black Soil",
          explanation: "Black Soil, also known as Regur Soil, retains moisture and is ideal for growing cotton, making it the best soil for cotton cultivation."
        },
        { 
          question: "Which crop is known as the 'Golden Fiber' of India?", 
          options: ["Jute", "Cotton", "Silk", "Wool"],
          answer: "Jute",
          explanation: "Jute is called the 'Golden Fiber' due to its golden color and high economic value in India."
        },
        { 
          question: "Which soil is the most fertile and extensively used for agriculture in India?", 
          options: ["Black Soil", "Laterite Soil", "Alluvial Soil", "Desert Soil"],
          answer: "Alluvial Soil",
          explanation: "Alluvial Soil, found in the Indo-Gangetic plains, is highly fertile and ideal for growing crops like wheat and rice."
        },
        { 
          question: "Which of the following is a Rabi crop?", 
          options: ["Rice", "Wheat", "Maize", "Cotton"],
          answer: "Wheat",
          explanation: "Wheat is a Rabi crop sown in winter and harvested in spring, while Kharif crops like rice are sown in monsoon."
        },
        { 
          question: "Which state is the largest producer of rice in India?", 
          options: ["Punjab", "West Bengal", "Uttar Pradesh", "Andhra Pradesh"],
          answer: "West Bengal",
          explanation: "West Bengal is the largest producer of rice in India, followed by Uttar Pradesh and Punjab."
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
    <div className="indian-geo-container">
      <header className="header">
        <h1>Indian Geography Livebook</h1>
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

export default IndianGeographyLivebook;