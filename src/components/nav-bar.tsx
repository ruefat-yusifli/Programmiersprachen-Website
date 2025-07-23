import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function createnav() {
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
            <div className="dropdown-item" onClick={() => navigate("/pages/assembly")}>
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
        </>
    ) 
}