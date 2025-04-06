import "./home.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { getStudentData } from "../../firebase/firestore";

const Home = () => {
  const [student, setStudent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudent = async () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          const data = await getStudentData(user.uid);
          setStudent(data);
        }
      });
    };
    fetchStudent();
  }, []);

  if (!student) return <h2>Loading Student Data...</h2>;

  return (
    <div className="dashboard" style={{ color: "black" }}>
      {/* Student Profile Section */}
      <div className="student-header">
        {student.profilePicture && (
          <img
            src={student.profilePicture}
            alt="Profile"
            className="student-profile-pic"
            style={{ width: "100px", height: "100px" }}
          />
        )}
        <div className="student-info" style={{ color: "black" }}>
          <h1>Hi {student.name}</h1>
          <p>
            {student.class}th Grade | Student ID: {student.email}
          </p>
        </div>
      </div>

      {/* AI Features Section */}
      <div className="ai-features">
        <h2>AI Learning Tools</h2>
        <div className="feature-box" onClick={() => navigate("/ai-teacher")}>
          <i className="bi bi-robot"></i>
          <h3>AI Teacher</h3>
          <p>Get AI-powered tutoring customized for you.</p>
        </div>
        <div className="feature-box" onClick={() => navigate("/ai-test")}>
          <i className="bi bi-person"></i>
          <h3>AI Personality Test</h3>
          <p>Discover your strengths and best learning style.</p>
        </div>
      </div>

      {/* LiveBooks Section */}
      <div className="livebooks">
        <h2>LiveBooks - All Subjects</h2>
        <div className="subjects-container">
          <div className="subject-box" onClick={() => navigate("/livebooks/math")}>
            <h3>Math</h3>
          </div>
          <div className="subject-box" onClick={() => navigate("/livebooks/science")}>
            <h3>Science</h3>
          </div>
          <div className="subject-box" onClick={() => navigate("/livebooks/english")}>
            <h3>English</h3>
          </div>
          <div className="subject-box" onClick={() => navigate("/livebooks/history")}>
            <h3>History</h3>
          </div>
          <div className="subject-box" onClick={() => navigate("/livebooks/geography")}>
            <h3>Geography</h3>
          </div>
        </div>
      </div>

      {/* Learning Goals Section */}
      <div className="learning-goals">
        <div className="goal-card">
          <i className="bi bi-bullseye goal-icon"></i>
          <h3>Short-Term Goal</h3>
          <p>Improve Math Grade to A+</p>
        </div>
        <div className="goal-card">
          <i className="bi bi-book goal-icon"></i>
          <h3>Long-Term Goal</h3>
          <p>Prepare for College Admissions</p>
        </div>
        <div className="goal-card">
          <i className="bi bi-trophy goal-icon"></i>
          <h3>Personal Goal</h3>
          <p>Join Debate Team</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
