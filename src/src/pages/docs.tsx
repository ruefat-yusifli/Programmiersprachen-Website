import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export function Use() {
    const navigate = useNavigate();

    const codeExamples = [
        {
            code: `function greet(name: string): string {
    return "Hallo, " + name + "!";
}

const user: string = "Max";
console.log(greet(user));`,
            description: "Einfache Begrüßungsfunktion mit statischen Typen."
        },
        {
            code: `interface User {
    id: number;
    name: string;
}

const user: User = { id: 1, name: "Anna" };
console.log(user.name);`,
            description: "Beispiel mit Interface und Objekt-Typisierung."
        }
    ];

    const copyToClipboard = async (text: string) => {
        await navigator.clipboard.writeText(text);
        alert("Code kopiert!");
    };

    return (
        <>
            <section style={{
                position: "fixed",
                top: "0px",
                left: "0px",
                backgroundColor: "#242424",
                width: "100%",
                height: "60px",
                zIndex: 10
            }}>
                <b className="typescript" style={{
                    position: "fixed",
                    top: "17px",
                    left: "55px",
                    cursor: "pointer"
                }}
                    onClick={() => navigate("/")}>typescript</b>
                <img src="/Typescript_logo_2020.svg.png" alt="ts" style={{
                    width: "25px",
                    position: "fixed",
                    left: "20px",
                    top: "17px"
                }} />
                <b onClick={() => navigate("/pages/use")} style={{
                    cursor: "pointer",
                    position: "fixed",
                    top: "17px",
                    left: "150px",
                    color: "rgb(66, 154, 255)"
                }} className="use">Docs</b>
            </section>

            <section style={{ paddingTop: "80px" }}>
                <h1 className="why" id="why" style={{
                    fontSize: "35px",
                    textAlign: "center",
                    position: "relative",
                    left: "600px",
                }}>Warum sollte man TypeScript verwenden?</h1>

                <div
                    style={{
                        width: "600px",
                        margin: "30px auto",
                        padding: "24px",
                        backgroundColor: "rgba(26, 26, 26, 0.87)",
                        color: "white",
                        borderRadius: "16px",
                        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
                        fontFamily: "Arial, sans-serif",
                        lineHeight: "1.6",
                        fontSize: "16px",
                        position: "relative",
                    left: "600px",
                    }}
                    className="animated-box"
                >
                    TypeScript bietet zahlreiche Vorteile, die es zu einer hervorragenden Wahl für moderne Webentwicklung machen. Durch die statische Typisierung werden viele Fehler bereits beim Schreiben des Codes erkannt – noch bevor das Projekt überhaupt ausgeführt wird. Das führt nicht nur zu einer deutlich besseren Codequalität, sondern auch zu mehr Wartbarkeit, besonders in größeren Projekten. Die klare Struktur und Typisierung sorgen dafür, dass der Code übersichtlich und leicht nachvollziehbar bleibt. Entwickler profitieren zudem von einer erstklassigen Unterstützung in modernen Code-Editoren wie Visual Studio Code – inklusive Autovervollständigung, intelligenter Navigation und umfangreicher Tool-Integration. Besonders in der Teamarbeit zeigt TypeScript seine Stärken: Dank klar definierter Typen wird sofort ersichtlich, welche Werte erwartet und zurückgegeben werden, was Missverständnisse minimiert und die Zusammenarbeit effizienter macht. Und nicht zuletzt hilft TypeScript dabei, auch wachsende Projekte zuverlässig zu skalieren und komplexe Anwendungen sicher und strukturiert umzusetzen.
                </div>

                <h1 style={{
                    fontSize: "32px",
                    textAlign: "center",
                    marginTop: "40px",
                    position: "relative",
                    left: "600px",
                }} className="why">Vorteile von TypeScript</h1>

                <div
                    style={{
                        width: "600px",
                        margin: "30px auto",
                        padding: "24px",
                        backgroundColor: "rgba(26, 26, 26, 0.87)",
                        color: "white",
                        borderRadius: "16px",
                        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
                        fontFamily: "Arial, sans-serif",
                        lineHeight: "1.6",
                        fontSize: "16px",
                        position: "relative",
                    left: "600px",
                    }}
                    className="animated-box"
                >
                    <ul style={{ paddingLeft: "20px", margin: 0 }}>
                        <li><strong>Statische Typisierung:</strong> Fehler werden frühzeitig erkannt.</li>
                        <li><strong>IntelliSense:</strong> Autovervollständigung und Hilfe beim Schreiben von Code.</li>
                        <li><strong>Bessere Lesbarkeit:</strong> Durch explizite Typen ist der Code leichter verständlich.</li>
                        <li><strong>Großartige Tool-Unterstützung:</strong> Besonders in VS Code.</li>
                        <li><strong>Skalierbarkeit:</strong> Geeignet für kleine und sehr große Projekte.</li>
                        <li><strong>Verbesserte Teamarbeit:</strong> Klarere Kommunikation durch Typdefinitionen.</li>
                    </ul>
                </div>

                <h1 style={{
                    fontSize: "32px",
                    textAlign: "center",
                    marginTop: "40px",
                    position: "relative",
                    left: "600px",
                }} className="why">Beispielcode</h1>

                {codeExamples.map((example, idx) => (
                    <div
                        key={idx}
                        style={{
                            width: "600px",
                            margin: "30px auto",
                            padding: "0 24px 24px 24px",
                            backgroundColor: "#1e1e1e",
                            borderRadius: "16px",
                            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
                            fontFamily: "'Courier New', monospace",
                            fontSize: "14px",
                            position: "relative",
                            color: "#dcdcdc",
                            left: "600px",
                        }}
                        className="animated-box"
                    >
                        <p style={{ paddingTop: "16px", color: "#aaa" }}>{example.description}</p>
                        <button
                            onClick={() => copyToClipboard(example.code)}
                            style={{
                                position: "absolute",
                                top: "12px",
                                right: "16px",
                                backgroundColor: "#333",
                                color: "#fff",
                                border: "none",
                                padding: "6px 10px",
                                borderRadius: "6px",
                                cursor: "pointer"
                            }}
                        >
                            Kopieren
                        </button>
                        <SyntaxHighlighter language="typescript" style={vscDarkPlus} wrapLines>
                            {example.code}
                        </SyntaxHighlighter>
                    </div>
                ))}
            </section>
        </>
    );
}
