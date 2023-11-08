import { Home } from "./Home";
import { Work } from "./Work";
import { About } from "./About";
import { Contact } from "./Contact";
import { Project } from "./Project";
import { Routes, Route } from "react-router-dom";
import { useRef, useState } from "react";
import "../styles/main.css";

export function Main() {
  const mainRef = useRef(null);
  const [height, setHeight] = useState(0);

  const doStuff = () => {
    /* ReactRouter breaks scrolling by not refreshing it when new components are rendered.
     Solutions on stackoverflow all rely on useLocation to call scrollTo once in the parent 
     component and apply it to all sub-components. But HashRouter and useLocation do not work 
     together. */
    mainRef.current.scrollTo(0, 0);

    /* explicitly change the height of Main based on the height of the currently rendered section, so that 
    the height transition animation will work */
    setTimeout(() => {
      // setHeight(mainRef.current.firstElementChild.clientHeight + 50 + "px");
      setHeight(mainRef.current.firstElementChild.clientHeight + "px");

      console.log(
        "mainRef.current.firstElementChild.clientHeight ",
        mainRef.current.firstElementChild.clientHeight,
      );
    }, 500); // delay for the work section, otherwise height is wrong
  };
  return (
    <div className="main" ref={mainRef} style={{ height, overflow: "hidden" }}>
      <Routes>
        <Route path="/" element={<Home callback={doStuff} />} />
        <Route path="work" element={<Work callback={doStuff} />} />
        <Route path="about" element={<About callback={doStuff} />} />
        <Route path="contact" element={<Contact callback={doStuff} />} />
        <Route path="/project/:id" element={<Project callback={doStuff} />} />
      </Routes>
    </div>
  );
}
