import React, { useState } from 'react';
import "./indian-geo.css";

const MathClass10Livebook = () => {
  // Detailed modules with comprehensive text content
  const modules = [
    {
      title: 'Algebra',
      description: 'Understanding the fundamentals of algebraic expressions and equations',
      videoId: "NybHckSEQBI", // This might be an invalid YouTube ID
      content: [
        "Algebra is a branch of mathematics that deals with symbols and the rules for manipulating those symbols.",
        "",
        "1. Algebraic Expressions:",
        "   - An expression formed by combining numbers, variables, and operations.",
        "   - Example: 3x + 5, where x is a variable.",
        "",
        "2. Equations:",
        "   - A statement that two expressions are equal.",
        "   - Example: 2x + 3 = 7.",
        "   - To solve for x, we isolate the variable.",
        "",
        "3. Polynomials:",
        "   - An expression consisting of variables raised to whole number powers.",
        "   - Example: 4x^2 + 3x - 5.",
        "",
        "4. Factoring:",
        "   - The process of breaking down an expression into simpler components.",
        "   - Example: x^2 - 9 = (x - 3)(x + 3).",
        "",
        "5. Quadratic Equations:",
        "   - An equation of the form ax^2 + bx + c = 0.",
        "   - Can be solved using factoring, completing the square, or the quadratic formula."
      ],
      questions: [
        { 
          question: "What is the degree of the polynomial 4x^3 + 2x^2 - x + 7?", 
          options: ["2", "3", "4", "1"],
          answer: "3",
          explanation: "The degree of a polynomial is the highest power of the variable, which is 3 in this case."
        },
        { 
          question: "What is the solution to the equation 2x + 3 = 7?", 
          options: ["1", "2", "3", "4"],
          answer: "2",
          explanation: "To solve for x, subtract 3 from both sides and then divide by 2: x = (7 - 3) / 2 = 2."
        },
        { 
          question: "Which of the following is a factor of x^2 - 5x + 6?", 
          options: ["(x - 2)", "(x - 3)", "(x + 2)", "(x + 3)"],
          answer: "(x - 2)",
          explanation: "The polynomial factors to (x - 2)(x - 3)."
        },
        { 
          question: "What is the quadratic formula?", 
          options: ["x = -b ± √(b^2 - 4ac) / 2a", "x = -b ± √(b^2 + 4ac) / 2a", "x = b ± √(b^2 - 4ac) / 2a", "x = -b ± √(b^2 + 4ac) / 2b"],
          answer: "x = -b ± √(b^2 - 4ac) / 2a",
          explanation: "The quadratic formula is used to find the roots of a quadratic equation."
        },
        { 
          question: "What is the value of x in the equation 3x - 9 = 0?", 
          options: ["0", "1", "3", "9"],
          answer: "3",
          explanation: "To solve for x, add 9 to both sides and then divide by 3: x = 9 / 3 = 3."
        }
      ]
    },
    {
      title: 'Geometry',
      description: 'Understanding the properties of shapes and theorems',
      videoId: "WqhlG3Vakw8",
      content: [
        "Geometry is the branch of mathematics that deals with shapes, sizes, and properties of space.",
        "",
        "1. Basic Shapes:",
        "   - Points, lines, line segments, rays, angles, and planes.",
        "",
        "2. Triangles:",
        "   - Types: Equilateral, Isosceles, Scalene.",
        "   - The sum of angles in a triangle is always 180 degrees.",
        "",
        "3. Pythagorean Theorem:",
        "   - In a right triangle, a^2 + b^2 = c^2, where c is the hypotenuse.",
        "",
        "4. Circles:",
        "   - Key terms: Radius, diameter, circumference, area.",
        "   - Area = πr^2 and Circumference = 2πr.",
        "",
        "5. Quadrilaterals:",
        "   - Types: Squares, rectangles, parallelograms, trapezoids.",
        "   - The sum of angles in a quadrilateral is always 360 degrees."
      ],
      questions: [
        { 
          question: "What is the sum of the angles in a triangle?", 
          options: ["90 degrees", "180 degrees", "360 degrees", "270 degrees"],
          answer: "180 degrees",
          explanation: "The sum of the interior angles of a triangle is always 180 degrees."
        },
        { 
          question: "What is the formula for the area of a circle?", 
          options: ["2πr", "πr^2", "πd", "r^2"],
          answer: "πr^2",
          explanation: "The area of a circle is calculated using the formula A = πr^2."
        },
        { 
          question: "In a right triangle, if one leg is 3 and the other leg is 4, what is the length of the hypotenuse?", 
          options: ["5", "6", "7", "8"],
          answer: "5",
          explanation: "Using the Pythagorean theorem: 3^2 + 4^2 = 9 + 16 = 25, so c = √25 = 5."
        },
        { 
          question: "What is the sum of the angles in a quadrilateral?", 
          options: ["180 degrees", "360 degrees", "270 degrees", "90 degrees"],
          answer: "360 degrees",
          explanation: "The sum of the interior angles of a quadrilateral is always 360 degrees."
        },
        { 
          question: "What type of triangle has all sides equal?", 
          options: ["Isosceles", "Scalene", "Equilateral", "Right"],
          answer: "Equilateral",
          explanation: "An equilateral triangle has all three sides of equal length."
        }
      ]
    },
    {
      title: 'Statistics',
      description: 'Understanding data collection, analysis, and interpretation',
      videoId: "NiL2pmZz1fc",
      content: [
        "Statistics is the study of data: how to collect, summarize, and interpret it.",
        "",
        "1. Data Collection:",
        "   - Methods: Surveys, experiments, observational studies.",
        "",
        "2. Measures of Central Tendency:",
        "   - Mean: Average of a set of numbers.",
        "   - Median: Middle value when data is ordered.",
        "   - Mode: Most frequently occurring value.",
        "",
        "3. Data Representation:",
        "   - Graphs: Bar graphs, histograms, pie charts.",
        "   - Tables: Organizing data for clarity.",
        "",
        "4. Probability:",
        "   - The likelihood of an event occurring.",
        "   - Calculated as the number of favorable outcomes divided by the total number of outcomes.",
        "",
        "5. Variability:",
        "   - Range: Difference between the highest and lowest values.",
        "   - Standard deviation: Measure of how spread out the numbers are."
      ],
      questions: [
        { 
          question: "What is the mean of the numbers 2, 4, 6, 8?", 
          options: ["4", "5", "6", "7"],
          answer: "5",
          explanation: "Mean = (2 + 4 + 6 + 8) / 4 = 20 / 4 = 5."
        },
        { 
          question: "What is the median of the numbers 3, 1, 4, 2?", 
          options: ["1", "2", "3", "4"],
          answer: "2.5",
          explanation: "When ordered (1, 2, 3, 4), the median is (2 + 3) / 2 = 2.5."
        },
        { 
          question: "What is the mode of the numbers 1, 2, 2, 3, 4?", 
          options: ["1", "2", "3", "4"],
          answer: "2",
          explanation: "The mode is the number that appears most frequently, which is 2."
        },
        { 
          question: "What is the probability of rolling a 3 on a standard die?", 
          options: ["1/6", "1/3", "1/2", "1/4"],
          answer: "1/6",
          explanation: "There is one favorable outcome (rolling a 3) out of six possible outcomes."
        },
        { 
          question: "What is the range of the numbers 5, 10, 15, 20?", 
          options: ["10", "15", "20", "25"],
          answer: "15",
          explanation: "Range = highest value - lowest value = 20 - 5 = 15."
        }
      ]
    },
    {
      title: 'Trigonometry',
      description: 'Understanding the relationships between angles and sides of triangles',
      videoId: "jlROKv8EuxY",
      content: [
        "Trigonometry is the study of the relationships between the angles and sides of triangles.",
        "",
        "1. Basic Trigonometric Ratios:",
        "   - Sine (sin), Cosine (cos), Tangent (tan).",
        "   - For a right triangle: sin(θ) = opposite/hypotenuse, cos(θ) = adjacent/hypotenuse, tan(θ) = opposite/adjacent.",
        "",
        "2. Pythagorean Identity:",
        "   - sin²(θ) + cos²(θ) = 1.",
        "",
        "3. Trigonometric Functions:",
        "   - Defined for all angles, can be extended to the unit circle.",
        "",
        "4. Applications:",
        "   - Used in physics, engineering, and architecture.",
        "   - Important for calculating heights and distances."
      ],
      questions: [
        { 
          question: "What is sin(30°)?", 
          options: ["0", "0.5", "1", "√2/2"],
          answer: "0.5",
          explanation: "sin(30°) = 1/2 = 0.5."
        },
        { 
          question: "What is cos(60°)?", 
          options: ["0", "0.5", "1", "√3/2"],
          answer: "0.5",
          explanation: "cos(60°) = 1/2 = 0.5."
        },
        { 
          question: "What is tan(45°)?", 
          options: ["0", "1", "√2", "undefined"],
          answer: "1",
          explanation: "tan(45°) = 1."
        },
        { 
          question: "What is the Pythagorean identity?", 
          options: ["sin²(θ) + cos²(θ) = 1", "sin²(θ) - cos²(θ) = 1", "tan²(θ) + 1 = sec²(θ)", "All of the above"],
          answer: "All of the above",
          explanation: "All these identities are derived from the Pythagorean theorem."
        },
        { 
          question: "In a right triangle, if the opposite side is 3 and the hypotenuse is 5, what is sin(θ)?", 
          options: ["0.6", "0.5", "0.8", "1"],
          answer: "0.6",
          explanation: "sin(θ) = opposite/hypotenuse = 3/5 = 0.6."
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
    <div className="math-class-container">
      <header className="header">
        <h1>Math Class 10 Livebook</h1>
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

export default MathClass10Livebook;