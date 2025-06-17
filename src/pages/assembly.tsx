import "../index.css"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Renders the Assembly page component.
 *
 * Displays a heading and a paragraph with content related to the Assembly page.
 *
 * @returns {JSX.Element} The rendered Assembly page.
 */
export function Assembly() {
    const [hoverNext, setHoverNext] = useState(false);
    const [hoverLast, setHoverLast] = useState(false);
    const navigate = useNavigate();
    return (   
        <>
            <div>
                <h1>Assembly Page</h1>
                <p>This is the Assembly page content.</p>
            </div>
             <div className="page">
                <button
                    style={{
                        color: hoverLast ? "black" : "rgb(255, 66, 129)",
                        fontSize: "18px",
                        border: "2px solid rgb(255, 66, 129)",
                        background: hoverLast ? "rgb(255, 66, 129)" : "transparent",
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
                    onClick={() => navigate("/pages/cpp")}>
                
                    Last Page
                </button> {/*This Button navigates to the last page*/}
            </div>
 
        </>
    );
}