import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainLivebooks.css';

function MainLivebooks() {
  const navigate = useNavigate();
  const [hoveredSubject, setHoveredSubject] = useState(null);

  // Updated to use absolute paths instead of relative paths
  const subjects = [
    { name: "Mathematics", path: "/livebooks/Math" },
    { name: "Science", path: "/livebooks/Science" },
    { name: "English", path: "/livebooks/English" },
    { name: "History", path: "/livebooks/History" },
    { name: "Geography", path: "/livebooks/Geography" }
  ];

  const handleSubjectClick = (path) => {
    navigate(path);
  };

  return (
    <div className="livebooks-container">
      <div className="create-box">
        <h1>Study at Your Own Pace With LiveBooks</h1>
        <p>Select a subject below to get started</p>
      </div>

      <div className="subjects-grid">
        {subjects.map((subject) => (
          <div
            key={subject.name}
            className={`subject-card ${hoveredSubject === subject.name ? 'hovered' : ''}`}
            onClick={() => handleSubjectClick(subject.path)}
            onMouseEnter={() => setHoveredSubject(subject.name)}
            onMouseLeave={() => setHoveredSubject(null)}
          >
            <h2>{subject.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainLivebooks;