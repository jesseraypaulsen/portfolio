import { Header } from "./Header";
import { Work } from "./Work";
import { About } from "./About";
import { Contact } from "./Contact";
import { Project } from "./Project";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

export function Page() {
  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Work />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="project" element={<Project />} />
        {/*<Route path="home" element={<Home />} />*/}
      </Routes>
    </div>
  );
}
