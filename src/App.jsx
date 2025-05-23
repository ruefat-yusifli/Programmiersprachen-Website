import { useState } from "react";

export function Home() {
  const [hover, setHover] = useState(false);

  return (
    <>
    <div style={{
        position: "fixed",
        top: "300px",
        left: "700px",
        color: "rgb(255, 255, 255)",
      }}>
        <p style={{
          position: "fixed",
          top: "170px",
          left: "810px",
          fontSize: "50px",
          fontWeight: "bold"
        }}>Typescript</p>
        <p style={{
          position: "fixed",
          top: "300px",
          left: "600px",
          fontSize: "25px"
        }}>Typescript ist eine auf JavaScript basierende Programmiersprache</p>
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
      >
        Get Started
      </button>
      <section class="box">
        <h1 style={{
          fontSize: "25px",
          position: "relative",
          top: "-10px",
          left: "25px"
        }}>Typensicherheit</h1>
        <p style={{
          fontSize: "13px",
          position: "relative",
          top: "-10px",
          left: "5px"
        }}>Mit statischer Typisierung musst du dir nie wieder Sorgen machen über Fehler durch Tippfehler, falsches Zugreifen auf undefined-Werte oder das Übergeben eines falschen Typs an eine Funktion.

TypeScript erkennt solche Probleme schon beim Schreiben deines Codes</p>
      </section>
      <section class="box2">
        <h1 style={{
          fontSize: "25px",
          position: "relative",
          top: "-10px",
          left: "50px"
        }}>Frameworks</h1>
        <p style={{
          fontSize: "13px",
          position: "relative",
          top: "-10px",
          left: "15px"
        }}>TypeScript wird aktiv von Microsoft entwickelt und ist mittlerweile ein industrieller Standard. Nahezu alle modernen Web-Frameworks wie React, Angular, Vue, Next.js oder Svelte bieten eine native und umfassende Integration von TypeScript</p>
      </section>

      <section class="box3">
        <h1 style={{
          fontSize: "25px",
          position: "relative",
          top: "-10px",
          left: "50px"
        }}>Modularität</h1>
        <p style={{
          fontSize: "11px",
          position: "relative",
          top: "-10px",
          left: "5px"
        }}>TypeScript erweitert JavaScript um moderne Features wie Klassen, Module, asynchrone Programmierung und Datenmodellierung, die eine strukturierte, wartbare und gut organisierte Entwicklung ermöglichen und dadurch die Effizienz und Zusammenarbeit in Entwicklerteams deutlich verbessern</p>
      </section>
      
    </>
  );
}
