import { db } from "./firebaseConfig";
import { collection, getDocs, doc, setDoc, getDoc } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// Function to fetch student data
export const getStudentData = async (uid) => {
    try {
        const studentRef = doc(db, "students", uid);
        const studentSnap = await getDoc(studentRef);

        if (studentSnap.exists()) {
            return studentSnap.data();
        } else {
            console.log("No student data found");
            return null;
        }
    } catch (error) {
        console.error("Error fetching student data:", error);
        return null;
    }
};

// Function to update student data
export const updateStudentData = async (uid, studentDetails) => {
    try {
        const studentRef = doc(db, "students", uid);
        await setDoc(studentRef, studentDetails, { merge: true });
        console.log("Student data updated successfully.");
    } catch (error) {
        console.error("Error updating student data:", error);
    }
};

// Function to fetch all students (if needed)
export const getAllStudents = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "students"));
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error fetching students:", error);
        return [];
    }
};

// 🔹 SINGLE LOGOUT FUNCTION WITH REDIRECTION (Fixed)
export const logoutAndRedirect = (navigate) => {
    const auth = getAuth();

    signOut(auth)
        .then(() => {
            console.log("User logged out successfully");
            navigate("/login"); // Redirect to login page after logout
        })
        .catch((error) => {
            console.error("Logout failed:", error);
        });
};
