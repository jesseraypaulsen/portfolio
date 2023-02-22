import { useEffect } from "react";
import "../styles/home.css";
import picture from "../assets/federico-bottos-Z3NceSeZqgI-unsplash.jpg";
import { useNavigate } from "react-router-dom";

export function Home({ callback }) {
  useEffect(() => {
    // 1. set the height of Main based on the height of this div.
    // 2. scroll to the top of Main.
    callback();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="section-home">
      <div className="jumbotron" style={{ position: "relative" }}>
        <div>
          <img src={picture} />
        </div>
        <div
          style={{
            position: "absolute",
            // border: "1px solid white",
            display: "flex",
            flexDirection: "column",
            top: "20%",
            left: "10%",
          }}
        >
          <h1
            style={{
              color: "rgba(255,255,255,1.0)",
              // border: "5px dotted white",
              paddingBottom: "0.2em",
            }}
          >
            {" "}
            Jesse Paulsen
          </h1>
          <h3
            style={{
              color: "rgba(255,255,255,1.0)",
              // border: "2px dotted green",
              paddingBottom: "0.2em",
            }}
          >
            JavaScript Developer
          </h3>
          <button onClick={() => navigate("/work")}>See My Work</button>
        </div>
      </div>
    </div>
  );
}
