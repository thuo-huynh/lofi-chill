import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { changeRainStatus } from "../../store/slice/rainSlice";
import { RootState, useAppDispatch, useAppSelector } from "../../store/store";
import "./RainToggleButton.scss";

const RainToggleButton = () => {
  const dispatch = useAppDispatch();
  const { rainMode, rainValue } = useAppSelector((state: RootState) => state.rain);
  const [buttonClick, setButtonClick] = useState(false);

  const rainButtonHandler = () => {
    const newRainValue = rainValue === 0 ? 30 : 0;
    dispatch(changeRainStatus({ currentStatus: rainMode, value: newRainValue }));
    setButtonClick(!buttonClick);
  };

  return (
    <div className="rain-toggle-container">
      {buttonClick && (
        <ReactAudioPlayer
          preload="auto"
          autoPlay
          src="./assets/musics/rain_city.mp3"
          loop
          volume={rainValue / 100}
        />
      )}
      <div className="button" onClick={rainButtonHandler}>
        <div className="icon">
          <i className="fas fa-cloud-rain"></i>
        </div>
      </div>
    </div>
  );
};

export default RainToggleButton;
