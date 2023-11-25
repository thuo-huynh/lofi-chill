import { useState } from "react";

export interface DarkLightSwitchProps {
  theme: string;
}

export const Header = () => {
  const [fullScreen, setFullScreen] = useState(false);

  const dayNightHandler = () => {};

  const fullScreenHandler = () => {
    if (!fullScreen) {
      document.documentElement.requestFullscreen();
      setFullScreen(true);
    } else {
      document.exitFullscreen();
      setFullScreen(false);
    }
  };
};

export default Header;
