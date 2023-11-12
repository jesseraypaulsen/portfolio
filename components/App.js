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
      {homeImagesLoaded ? <Nav/> : null}
      <Main 
        setHomeImagesFlag={setHomeImagesFlag} 
        homeImagesLoaded={homeImagesLoaded} 
        setAboutImageFlag={setAboutImageFlag} 
        aboutImageLoaded={aboutImageLoaded} 
      />
      <div className={homeImagesLoaded ? "loaded" : "loading"}>Loading...</div>
    </>
  );
}

/* https://codesandbox.io/s/react-image-preload-ptosn?file=/src/App.js

import { IMAGES } from "./Images"


const IMAGES = []

const App = () => {
  const [imgsLoaded, setImgsLoaded] = useState(false)

  useEffect(() => {
    const loadImage = image => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = image.url
        // wait 2 seconds to simulate loading time
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image.url)
          }, 2000)

        loadImg.onerror = err => reject(err)
      })
    }

    Promise.all(IMAGES.map(image => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch(err => console.log("Failed to load images", err))
  }, [])

  return (
    <>
      <main className="images">
        {imgsLoaded ? (
          IMAGES.map(image => (
            <img key={image.id} src={image.url} alt="Human" />
          ))
        ) : (
          <h1>Loading images...</h1>
        )}
      </main>
    </>
  )
}

*/
