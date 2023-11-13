import { Nav } from "./Nav";
import { Main } from "./Main";
import { useState } from 'react';
import "../styles/app.css";


export function App() {
  const [homeImagesLoaded, setHomeImagesLoaded] = useState(false)
  const [aboutImageLoaded, setAboutImageLoaded] = useState(false)

  const setHomeImagesFlag = () => {
    if (!homeImagesLoaded) setHomeImagesLoaded(true)
  }

  const setAboutImageFlag = () => {
    if (!aboutImageLoaded) setAboutImageLoaded(true)
  }

  return (
    <>
      {homeImagesLoaded || aboutImageLoaded ? <Nav/> : null}
      <Main 
        setHomeImagesFlag={setHomeImagesFlag} 
        homeImagesLoaded={homeImagesLoaded} 
        setAboutImageFlag={setAboutImageFlag} 
        aboutImageLoaded={aboutImageLoaded} 
      />
      <div className={homeImagesLoaded || aboutImageLoaded ? "loaded" : "loading"}>Loading...</div>
    </>
  );
}
