import { useState } from "react";
import { useTimer } from "react-timer-hook";
import { RootState, useAppSelector } from "../../store/store";
import "./Home.scss";
import RainToggleButton from "../../components/RainToggleButton/RainToggleButton";

export const Home = () => {
  const [timerStart, setTimerStart] = useState(false);
  const { mode } = useAppSelector((state: RootState) => state.mode);
  const { rainMode } = useAppSelector((state: RootState) => state.rain);

  const combineMode = `${mode}-${rainMode}`;
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 0);

  const videoSources = {
    "night-clear": "/assets/video/Night-clear.mp4",
    "night-rain": "/assets/video/Night-rainny.mp4",
    "day-clear": "/assets/video/Day-sunny.mp4",
    "day-rain": "/assets/video/Day-rainny.mp4",
  };

  const { seconds, minutes, hours, isRunning, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => setTimerStart(false),
  });

  const setTimerHandler = (hour: number, minute: number, second: number) => {
    const time = new Date();
    const setupTimer = Number(hour) * 3600 + Number(second) + Number(minute) * 60;
    time.setSeconds(time.getSeconds() + setupTimer);
    restart(time);
  };

  return (
    <>
      {Object.entries(videoSources).map(([mode, src]) => (
        <video
          key={mode}
          className={`video ${combineMode === mode ? "videoIn" : ""}`}
          autoPlay
          loop
          muted
        >
          <source src={src} type="video/mp4" />
        </video>
      ))}
      <RainToggleButton />
    </>
  );
};

export default Home;
