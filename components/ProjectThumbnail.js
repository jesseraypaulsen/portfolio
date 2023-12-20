import "../styles/project.css";
import firstScreenshot from "../assets/screenshot_9.png"
import secondScreenshot from "../assets/screenshot_10.png"
import thirdScreenshot from "../assets/screenshot_11.png"

//https://www.w3schools.com/howto/howto_css_devices.asp

export const ProjectThumbnail = ({ imageLoaded }) => <div className='thumbnail-container'>
  <SmartPhone image={firstScreenshot} imageLoaded={imageLoaded} />
  <SmartPhone image={secondScreenshot} imageLoaded={imageLoaded} />
  <SmartPhone image={thirdScreenshot} imageLoaded={imageLoaded} />
</div>


const SmartPhone = ({image, imageLoaded}) => <div className="smartphone">
  <div className="top-edge">
    <div></div>
  </div>
  <img src={image} onLoad={imageLoaded} />
  <div className="bottom-edge">
    <div></div>
  </div>
</div>