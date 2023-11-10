import { Home } from "./Home";
import { Work } from "./Work";
import { About } from "./About";
import { Contact } from "./Contact";
import { Project } from "./Project";
import { Routes, Route } from "react-router-dom";
import { useRef, useState } from "react";
import "../styles/main.css";

export function Main({ loadStatus, setLoadStatus }) {
  const mainRef = useRef(null);
  const [height, setHeight] = useState(0);

  const doStuff = () => {

    if (loadStatus) setLoadStatus(false)

    /* ReactRouter breaks scrolling by not refreshing it when new components are rendered.
     Solutions on stackoverflow all rely on useLocation to call scrollTo once in the parent 
     component and apply it to all sub-components. But HashRouter and useLocation do not work 
     together. */

    mainRef.current.scrollTo(0, 0);

    /* explicitly change the height of Main based on the height of the currently rendered section, because 
    the height transition animation does not work when the height is set to auto. */

    setHeight(mainRef.current.firstElementChild.clientHeight + "px");

  };

  return (
    <>
      <div className="main" ref={mainRef} style={{ height, overflow: "hidden" }}>
        <Routes>
          <Route path="/" element={<Home callback={doStuff} />} />
          <Route path="work" element={<Work callback={doStuff} />} />
          <Route path="about" element={<About callback={doStuff} />} />
          <Route path="contact" element={<Contact callback={doStuff} />} />
          <Route path="/project/:id" element={<Project callback={doStuff} />} />
        </Routes>
      </div>
    </>
  );
}
