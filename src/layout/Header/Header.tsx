import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DarkLightSwitch from "../../components/DarkLightSwitch/DarkLightSwitch";
import { CONSTANTS } from "../../constants";
import { changeDayNight } from "../../store/slice/modeSlice";
import { RootState } from "../../store/store";
import "./Header.scss";
export interface DarkLightSwitchProps {
  theme: string;
}

export const Header = () => {
  const [fullScreen, setFullScreen] = useState(false);

  const { mode } = useSelector((state: RootState) => state.mode);
  const dispatch = useDispatch();

  const dayNightHandler = () => {
    dispatch(changeDayNight());
  };

  const fullScreenHandler = () => {
    if (!fullScreen) {
      document.documentElement.requestFullscreen();
      setFullScreen(true);
    } else {
      document.exitFullscreen();
      setFullScreen(false);
    }
  };
  return (
    <nav className="nav-container">
      <Link to="/">
        <img src="/assets/icons/lofi-logo.gif" alt="" />
      </Link>
      <div className="nav-menu">
        <a target="_blank" rel="noreferrer" href={CONSTANTS.AUTHOR_GITHUB_LINK}>
          <i className="fab fab-github"></i>
          <span>GitHub</span>
        </a>
        <div onClick={dayNightHandler}>
          <DarkLightSwitch theme={mode} />
        </div>
      </div>
      <button onClick={fullScreenHandler} className="nav-fullscreen-btn">
        <i className="fas fa-expand fa-lg"></i>
      </button>
    </nav>
  );
};

export default Header;
