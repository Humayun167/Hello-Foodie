import { assets } from "../../assets/Images/assets";
import "./AppDownload.css";
const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better experience Download <br /> Hello Foodie App
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt=""></img>
        <img src={assets.app_store} alt=""></img>
      </div>
    </div>
  );
};

export default AppDownload;
