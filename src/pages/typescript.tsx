import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createnav } from "../components/nav-bar";

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
            {createnav()}
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
                <div className="Content" style={{
                        color: "white",
                        padding: "0px",
                        fontSize: "20px",
                        lineHeight: "1.6",
                        maxWidth: "800px",
                        margin: "0 auto",
                        textAlign: "left",
                        position: "relative",
                        top: "-100px",
                        left: "550px",
}}>
    <h2 style={{ color: "rgb(66, 154, 255)", fontSize: "32px", marginBottom: "20px" }}>Was ist TypeScript?</h2>
    <p>
        TypeScript ist eine von Microsoft entwickelte Programmiersprache, die auf JavaScript basiert, aber zusätzliche Funktionen bietet – insbesondere statische Typisierung.
        Durch TypeScript kannst du Fehler bereits beim Schreiben deines Codes erkennen, statt erst zur Laufzeit.
    </p>
    <h3 style={{ color: "rgb(255, 66, 129)", marginTop: "30px" }}>Vorteile von TypeScript:</h3>
    <ul style={{ marginLeft: "20px" }}>
        <li>🛡️ <strong>Typensicherheit:</strong> Vermeide viele gängige Laufzeitfehler durch Typüberprüfung beim Kompilieren.</li>
        <li>💡 <strong>IntelliSense:</strong> Bessere Autovervollständigung und Tooling in IDEs wie VS Code.</li>
        <li>📦 <strong>Große Community:</strong> Weit verbreitet, insbesondere bei größeren Projekten (z. B. Angular, React, etc.).</li>
        <li>🔄 <strong>Kompatibel mit JavaScript:</strong> Jeder JS-Code ist auch gültiger TS-Code – du kannst also schrittweise migrieren.</li>
    </ul>
</div>
            </div>
        </>
    );
}