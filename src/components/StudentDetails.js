import { useState } from "react";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

function StudentDetails({ user, onComplete }) {
  const [studentInfo, setStudentInfo] = useState({
    class: "",
    attendance: "",
    marks: { math: "", science: "", history: "" },
    sports: "",
    overallGrowth: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentInfo((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMarksChange = (e) => {
    const { name, value } = e.target;
    setStudentInfo((prev) => ({
      ...prev,
      marks: { ...prev.marks, [name]: value }
    }));
  };

  const handleSubmit = async () => {
    try {
      await updateDoc(doc(db, "students", user.uid), studentInfo);
      onComplete();
    } catch (error) {
      console.error("Error saving details:", error);
    }
  };

  return (
    <div>
      <h2>Enter Your Details</h2>
      <input type="text" name="class" placeholder="Class" onChange={handleChange} />
      <input type="text" name="attendance" placeholder="Attendance %" onChange={handleChange} />
      <h3>Marks</h3>
      <input type="text" name="math" placeholder="Math %" onChange={handleMarksChange} />
      <input type="text" name="science" placeholder="Science %" onChange={handleMarksChange} />
      <input type="text" name="history" placeholder="History %" onChange={handleMarksChange} />
      <input type="text" name="sports" placeholder="Sports Activity" onChange={handleChange} />
      <input type="text" name="overallGrowth" placeholder="Overall Growth" onChange={handleChange} />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default StudentDetails;
