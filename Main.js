import { Home } from "./Home";
import { Work } from "./Work";
import { About } from "./About";
import { Contact } from "./Contact";
import { Project } from "./Project";
import { Routes, Route } from "react-router-dom";
import { useRef } from "react";
import "./main.css";

export function Main() {
  const scrollRef = useRef(null);
  /* ReactRouter breaks scrolling by not refreshing it when new components are rendered.
     Solutions on stackoverflow all rely on useLocation to call scrollTo once in the parent 
     component and apply it to all sub-components. But HashRouter and useLocation do not work 
     together. */
  return (
    <div className="main" ref={scrollRef}>
      <Routes>
        <Route path="/" element={<Home scrollRef={scrollRef} />} />
        <Route path="work" element={<Work scrollRef={scrollRef} />} />
        <Route path="about" element={<About scrollRef={scrollRef} />} />
        <Route path="contact" element={<Contact scrollRef={scrollRef} />} />
        <Route path="project" element={<Project scrollRef={scrollRef} />} />
      </Routes>
    </div>
  );
}
