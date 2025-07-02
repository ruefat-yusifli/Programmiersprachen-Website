import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Renders the Typescript page with navigation buttons.
 *
 * This component displays a heading and two styled navigation buttons:
 * - "Next Page": Navigates to the C++ page (`/pages/cpp`).
 * - "Last Page": Navigates to the home page (`/`).
 *
 * The buttons feature hover effects that change their color and background.
 *
 * @component
 * @returns {JSX.Element} The rendered Typescript page with navigation controls.
 */
export function Ts() {
    const [hoverNext, setHoverNext] = useState(false);
    const [hoverLast, setHoverLast] = useState(false);
    const navigate = useNavigate();
    return (
        <>
            <div>
                <h1 style={{
                    position: "relative",
                    top: "-325px",
                    left: "800px",
                    color: "rgb(255, 255, 255)",
                    fontSize: "48px",
                    fontWeight: "bold",
                    textAlign: "center",
                }}>Typescript</h1>
            </div>
            <div className="page">
                <button
                    style={{
                        color: hoverNext ? "black" : "rgb(255, 66, 129)",
                        fontSize: "18px",
                        border: "2px solid rgb(255, 66, 129)",
                        background: hoverNext ? "rgb(255, 66, 129)" : "transparent",
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
                    onClick={() => navigate("/pages/cpp")}
                >
                    Next Page
                </button> {/* This Button navigates to the C++ page */}
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
                    onClick={() => navigate("/")}
                >
                    Last Page
                </button> {/*This Button navigates to the last page*/}
                <div className="Content">
                    
                </div>
            </div>
        </>
    );
}