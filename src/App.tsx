import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createnav } from "./components/nav-bar";

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
      {createnav()}
      

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