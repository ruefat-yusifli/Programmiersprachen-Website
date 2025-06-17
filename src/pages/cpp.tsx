import "../index.css"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * React component that renders the C++ page.
 *
 * Displays a heading and a paragraph with content related to C++.
 *
 * @returns {JSX.Element} The rendered C++ page content.
 */

export function Cpp() {
    const [hoverNext, setHoverNext] = useState(false);
    const [hoverLast, setHoverLast] = useState(false);
    const navigate = useNavigate();
    return (
        <>
            <div>
                <h1>C++ Page</h1>
                <p>This is the C++ page content.</p>
            </div>
            <div className="page">
                <button
                    style={{
                        color: hoverNext ? "black" : "rgb(255, 66, 66)",
                        fontSize: "18px",
                        border: "2px solid rgb(255, 66, 66)",
                        background: hoverNext ? "rgb(255, 66, 66)" : "transparent",
                        padding: "12px 30px",
                        borderRadius: "6px",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        position: "fixed",
                        top: "750px",
                        left: "1600px",
                        fontWeight: "bold",
                    }}
                    onMouseEnter={() => setHoverNext(true)}
                    onMouseLeave={() => setHoverNext(false)}
                    onClick={() => navigate("/pages/assembly")}
                >
                    Next Page
                </button> {/* This Button navigates to assembly page */}
                <button
                    style={{
                        color: hoverLast ? "black" : "rgb(66, 154, 255)",
                        fontSize: "18px",
                        border: "2px solid rgb(66, 154, 255)",
                        background: hoverLast ? "rgb(66, 154, 255)" : "transparent",
                        padding: "12px 30px",
                        borderRadius: "6px",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        position: "fixed",
                        top: "750px",
                        left: "140px",
                        fontWeight: "bold",
                    }}
                    onMouseEnter={() => setHoverLast(true)}
                    onMouseLeave={() => setHoverLast(false)}
                    onClick={() => navigate("/pages/typescript")}
                >
                    Last Page
                </button> {/*This Button navigates to the last page*/}
            </div>
        </>
    );
}