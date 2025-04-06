import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/home";
import Chats from "./pages/Chats/chats";
import Calendar from "./pages/Calender/Calendar";
import Assignments from "./pages/Assignments/Assignments";
import MainLivebooks from "./pages/Livebooks/MainLivebooks";
import Auth from "./components/Auth";
import StudentDetails from "./components/StudentDetails";
import { auth } from "./firebase";
import { getStudentData } from "./firebase/firestore";


// LiveBooks Subjects
import Math from "./pages/Livebooks/Math";
import Science from "./pages/Livebooks/Science";
import English from "./pages/Livebooks/English";
import History from "./pages/Livebooks/History";
import Geography from "./pages/Livebooks/Geography";


// AI Pages
import AiTeacher from "./pages/Ai_teacher/Ai_teacher";
import AiTest from "./pages/Ai_test/Ai_test";

function App() {
  const [user, setUser] = useState(null);
  const [student, setStudent] = useState(null);
  const [needsDetails, setNeedsDetails] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        const studentData = await getStudentData(user.uid);
        if (studentData) {
          setStudent(studentData);
          setNeedsDetails(!studentData.class);
        } else {
          setNeedsDetails(true);
        }
      } else {
        setUser(null);
        setStudent(null);
      }
    });
    return () => unsubscribe();
  }, []);

  if (!user) return <Auth onLogin={(user) => setUser(user)} />;
  if (needsDetails) return <StudentDetails user={user} onComplete={() => setNeedsDetails(false)} />;

  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="redirecter" onClick={() => navigate("/")}> <i className="bi bi-house-door-fill"></i> <span>Home</span> </div>
        {/* AI Features */}
        <div className="redirecter" onClick={() => navigate("/ai-teacher")}> <i className="bi bi-robot"></i> <span>AI Teacher</span> </div>
        <div className="redirecter" onClick={() => navigate("/ai-test")}> <i className="bi bi-puzzle-fill"></i> <span>AI Test</span> </div>
        <div className="redirecter" onClick={() => navigate("/livebooks/mainLivebooks")}> <i className="bi bi-book"></i> <span>LiveBooks</span> </div>
        <div className="redirecter" onClick={() => navigate("/chats")}> <i className="bi bi-chat-dots-fill"></i> <span>Chats</span> </div>
        <div className="redirecter" onClick={() => navigate("/calendar")}> <i className="bi bi-calendar-event-fill"></i> <span>Calendar</span> </div>
        <div className="redirecter" onClick={() => navigate("/assignments")}> <i className="bi bi-file-earmark-text-fill"></i> <span>Assignments</span> </div>
        </div>
        

      {/* Header */}
      <div className="header">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <i className="bi bi-search"></i>
        </div>
        <div className="profile-section">
          <i className="bi bi-bell icon"></i>
          <i className="bi bi-chat icon"></i>
          <div className="profile">
            <img src={student?.profilePicture || "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"} alt="User" />
            <span>{student?.name || "User"}</span>
            <button onClick={() => auth.signOut()}>Logout</button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home student={student} />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/ai-teacher" element={<AiTeacher />} />
          <Route path="/ai-test" element={<AiTest />} />
          <Route path="/livebooks/Mainlivebooks" element={<MainLivebooks />} />
          {/* LiveBooks Routes */}
          <Route path="/livebooks/math" element={<Math />} />
          <Route path="/livebooks/science" element={<Science />} />
          <Route path="/livebooks/english" element={<English />} />
          <Route path="/livebooks/history" element={<History />} />
          <Route path="/livebooks/geography" element={<Geography />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;