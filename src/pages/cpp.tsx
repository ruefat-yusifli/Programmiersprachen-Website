import "../index.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createnav } from "../components/nav-bar";

/**
 * React-Komponente, die die C++-Seite rendert.
 *
 * Zeigt einen Titel, Content über C++ und Navigationsbuttons:
 * - "Next Page": Navigiert zur Assembly-Seite (`/pages/assembly`)
 * - "Last Page": Navigiert zurück zur TypeScript-Seite (`/pages/typescript`)
 *
 * @returns {JSX.Element} Die gerenderte C++-Seite
 */
export function Cpp() {
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
                    color: "white",
                    fontSize: "48px",
                    fontWeight: "bold",
                    textAlign: "center",
                }}>C++</h1>
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
                </button> {/* This Button navigates to the Assembly page */}
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
                </button> {/* This Button navigates to the TypeScript page */}

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
                    <h2 style={{ color: "rgb(255, 66, 66)", fontSize: "32px", marginBottom: "20px" }}>Was ist C++?</h2>
                    <p>
                        C++ ist eine leistungsstarke, objektorientierte Programmiersprache, die in den 1980er Jahren von Bjarne Stroustrup entwickelt wurde.
                        Sie wird häufig in Systemprogrammierung, Spieleentwicklung, Embedded-Software und Hochleistungsanwendungen eingesetzt.
                    </p>

                    <h3 style={{ color: "rgb(66, 154, 255)", marginTop: "30px" }}>Stärken von C++:</h3>
                    <ul style={{ marginLeft: "20px" }}>
                        <li>⚙️ <strong>Low-Level-Kontrolle:</strong> Direkter Zugriff auf Speicher und Hardware-nahe Programmierung.</li>
                        <li>🚀 <strong>Hoch performant:</strong> Ideal für rechenintensive Aufgaben und Echtzeitsysteme.</li>
                        <li>🧱 <strong>Objektorientierung:</strong> Unterstützt Klassen, Vererbung und polymorphe Strukturen.</li>
                        <li>📂 <strong>Großes Ökosystem:</strong> Viele Libraries & Tools für unterschiedliche Anwendungsbereiche verfügbar.</li>
                    </ul>

                    <h3 style={{ color: "rgb(255, 66, 129)", marginTop: "30px" }}>Wann sollte man C++ verwenden?</h3>
                    <p>
                        Wenn du maximale Kontrolle über Ressourcen brauchst, z. B. bei der Entwicklung von Spielen, Betriebssystemen, Treibern oder Embedded-Systemen,
                        ist C++ eine hervorragende Wahl.
                    </p>
                </div>
            </div>
        </>
    );
}
