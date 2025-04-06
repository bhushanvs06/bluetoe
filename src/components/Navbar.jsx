import React from "react";
import { useNavigate } from "react-router-dom";
import { logoutAndRedirect } from "../firebase/firestore"; // Adjust path if needed

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logoutAndRedirect(navigate);
    };

    return (
        <nav>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    );
};

export default Navbar;
