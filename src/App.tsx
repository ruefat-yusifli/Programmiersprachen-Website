import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

/**
 * Home component renders the main landing page with a fixed navigation bar,
 * a dropdown menu for selecting programming languages, and informational sections
 * about TypeScript, C++, and Assembly. It also includes a button to navigate to the
 * TypeScript page. The component uses React state to handle hover effects and dropdown
 * visibility, and utilizes React Router's navigation for page transitions.
 *
 * @component
 * @returns {JSX.Element} The rendered Home page component.
 */
export function Home() {
  const [hover, setHover] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <section
        style={{
          position: "fixed",
          top: "0px",
          left: "0px",
          backgroundColor: "#242424",
          width: "100%",
          height: "60px",
          zIndex: 10,
        }}
      >
        <b
          className="typescript"
          style={{
            position: "fixed",
            top: "17px",
            left: "35px",
            color: "rgb(66, 154, 255)",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          Home
        </b>

        <div
          style={{
            position: "fixed",
            top: "17px",
            left: "110px",
            userSelect: "none",
            color: "white",
          }}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <b style={{ cursor: "pointer" }} className="sprachen">Sprachen ▾</b>
          <div className={`dropdown ${dropdownOpen ? "open" : ""}`}>
            <div className="dropdown-item" onClick={() => navigate("/pages/typescript")}>
              TypeScript
            </div>
            <div className="dropdown-item" onClick={() => navigate("/pages/cpp")}>
              C++
            </div>
            <div className="dropdown-item" onClick={() => navigate("pages/assembly")}>
              Assembly
            </div>
          </div>
        </div>
        <div className="Github">
         <a href="https://github.com/ruefat-yusifli/Programmiersprachen-Website" target="_blank" rel="noopener noreferrer" className="github">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
</a>

        </div>
      </section>

      <div
        style={{
          position: "fixed",
          top: "300px",
          left: "700px",
          color: "white",
        }}
      >
        <p
          style={{
            position: "fixed",
            top: "170px",
            left: "855px",
            fontSize: "50px",
            fontWeight: "bold",
          }}
        >
          Home
        </p>
        <p
          style={{
            position: "fixed",
            top: "300px",
            left: "335px",
            fontSize: "25px",
          }}
        >
          Hier findest du Übersichten über verschiedene Programmiersprachen wie z.B. Typescript, Assembly oder auch C++
        </p>
      </div>

      <button
        style={{
          color: hover ? "black" : "rgb(66, 154, 255)",
          fontSize: "18px",
          border: "2px solid rgb(66, 154, 255)",
          background: hover ? "rgb(66, 154, 255)" : "transparent",
          padding: "12px 30px",
          borderRadius: "6px",
          cursor: "pointer",
          transition: "all 0.2s ease",
          position: "fixed",
          top: "400px",
          left: "850px",
          fontWeight: "bold",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => navigate("/pages/typescript")}
      >
        Next Page
      </button>

      <section className="box">
        <h1 style={{ fontSize: "25px", marginLeft: "65px" }}>Typescript</h1>
        <p style={{ fontSize: "12px", margin: "5px 10px" }}>
          Typescript ist eine Erweiterung von Javascript und bietet statische Typisierung, was die
          Entwicklung von großen und komplexen Anwendungen erleichtert. Es ist eine Open-Source-Sprache,
          die von Microsoft entwickelt wird und auf JavaScript basiert.
        </p>
      </section>

      <section className="box2">
        <h1 style={{ fontSize: "25px", marginLeft: "95px" }}>C++</h1>
        <p style={{ fontSize: "13px", margin: "5px 15px" }}>
          C++ ist eine leistungsstarke, objektorientierte Programmiersprache, die für System- und Anwendungsentwicklung
          verwendet wird.
        </p>
      </section>

      <section className="box3">
        <h1 style={{ fontSize: "25px", marginLeft: "50px" }}>Assembly</h1>
        <p style={{ fontSize: "13px", margin: "5px 15px" }}>
          Assembly ist eine Low-Level-Programmiersprache, die direkt auf die Hardware eines Computers zugreift.
          Sie wird oft für Systemprogrammierung und in eingebetteten Systemen verwendet.
        </p>
      </section>
    </>
  );
}