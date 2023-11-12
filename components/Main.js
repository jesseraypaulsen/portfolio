import { Home } from "./Home";
import { About } from "./About";
import { Routes, Route } from "react-router-dom";
import { useRef, useState } from "react";
import "../styles/main.css";

export function Main({ setHomeImagesFlag, homeImagesLoaded, setAboutImageFlag, aboutImageLoaded }) {
  const mainRef = useRef(null);
  const [height, setHeight] = useState(0);

  const doStuff = () => {

    
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
      <div className="main" ref={mainRef} style={{ height, overflow: "hidden" }}>
        <Routes>
          <Route path="/" element={<Home doStuff={doStuff} setHomeImagesFlag={setHomeImagesFlag} homeImagesLoaded={homeImagesLoaded} />} />
          <Route path="about" element={<About doStuff={doStuff} setAboutImageFlag={setAboutImageFlag} aboutImageLoaded={aboutImageLoaded} />} />
        </Routes>
      </div>
  );
}
