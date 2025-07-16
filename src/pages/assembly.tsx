import "../index.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createnav } from "../components/nav-bar";

/**
 * Renders the Assembly page component with navigation and content.
 *
 * Displays a heading, styled navigation buttons, and informative content about Assembly.
 *
 * @returns {JSX.Element} The rendered Assembly page.
 */
export function Assembly() {
    const [hoverLast, setHoverLast] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            {createnav()}
            <div>
                <h1 style={{
                    position: "relative",
                    top: "-325px",
                    left: "750px",
                    color: "white",
                    fontSize: "48px",
                    fontWeight: "bold",
                    textAlign: "center",
                }}>Assembly</h1>
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
                    onClick={() => navigate("/pages/cpp")}
                >
                    Last Page
                </button>
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
                    <h2 style={{ color: "rgb(255, 66, 129)", fontSize: "32px", marginBottom: "20px" }}>Was ist Assembly?</h2>
                    <p>
                        Assembly (auch: Assemblersprache) ist eine Low-Level-Programmiersprache, die direkt mit der Maschinensprache eines bestimmten Prozessors zusammenarbeitet.
                        Sie erlaubt es Devs, extrem nah an der Hardware zu arbeiten und jedes Bit zu kontrollieren.
                    </p>

                    <h3 style={{ color: "rgb(66, 154, 255)", marginTop: "30px" }}>Besonderheiten von Assembly:</h3>
                    <ul style={{ marginLeft: "20px" }}>
                        <li>⚙️ <strong>Hardware-Nähe:</strong> Direkter Zugriff auf Register, Speicher und CPU-Instruktionen.</li>
                        <li>🧠 <strong>Extrem performant:</strong> Ideal für zeitkritische oder ressourcenarme Anwendungen.</li>
                        <li>🧩 <strong>Architekturabhängig:</strong> Jeder Prozessor hat seine eigene Befehlssatzarchitektur (ISA).</li>
                        <li>🛠️ <strong>Fehleranfällig & komplex:</strong> Keine Abstraktionen, daher schwer lesbar und wartbar.</li>
                    </ul>

                    <h3 style={{ color: "rgb(255, 66, 129)", marginTop: "30px" }}>Typische Einsätze:</h3>
                    <ul style={{ marginLeft: "20px" }}>
                        <li>📦 Bootloader und Betriebssystemkerne</li>
                        <li>🔐 Reverse Engineering und Exploit-Entwicklung</li>
                        <li>📟 Embedded-Systeme und Firmware</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
