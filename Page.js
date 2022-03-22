import { Header } from "./Header";
import { Work } from "./Work";
import { About } from "./About";
import { Contact } from "./Contact";
import { Project } from "./Project";
import { Routes, Route, Link } from "react-router-dom";

export function Page() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Work />}>
          <Work />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="project" element={<Project />} />
      </Routes>
    </div>
  );
}

{
  /*
   return (
     <div>
       <Header />
       <Project />
     </div>
   );
   */
}
