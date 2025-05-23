import { useNavigate } from "react-router-dom";

export function Use() {
    const navigate = useNavigate();
    return (
        <>
            <section style={{
                position: "fixed",
                top: "0px",
                left: "0px",
                backgroundColor: "#242424",
                width: "100%",
                height: "60px"
            }}>
                <b className="typescript" style={{
                    position: "fixed",
                    top: "17px",
                    left: "55px"
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
                    left: "150px"
                }} className="use">use</b>
            </section>
            <div style={{
                position: "fixed",
                top: "300px",
                left: "700px",
                color: "rgb(255, 255, 255)",
            }}>
            </div>
        </>
    );
}