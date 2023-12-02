import React, { useState } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../../store/store";

interface ModifierBoardProps {
  seconds: number;
  minutes: number;
  hours: number;
  isRunning: boolean;
  pause: () => void;
  resume: () => void;
  setTimerHandler: (hour: number, minute: number, second: number) => void;
  setTimerStart: (timeStart: boolean) => void;
  timerStart: boolean;
  restart: any;
}
export default function ModifierBoard({
  seconds,
  minutes,
  hours,
  isRunning,
  pause,
  resume,
  restart,
  setTimerHandler,
  setTimerStart,
  timerStart,
}: ModifierBoardProps) {
  const dispatch = useAppDispatch();
  const { moodMode } = useAppSelector((state: RootState) => state.mood);
  const { rainValue } = useAppSelector((state: RootState) => state.rain);
  const { volumeValue } = useAppSelector((state: RootState) => state.volume);

  const [openMood, setOpenMood] = useState(false);
  const [openFocus, setOpenFocus] = useState(false);

  const sounds = {
    cityTraffic: 0,
    cityRain: 0,
    fireplace: 0,
    snow: 0,
    summerStorm: 0,
    fan: 0,
    forestNight: 0,
    wave: 0,
    wind: 0,
    people: 0,
    river: 0,
    rainForest: 0,
  };
  const [soundState, setSoundState] = useState(sounds);

  const openMoodHandler = () => {};
  const openFocusHandler = () => {};

  return (
    <div className={"modifier" + (openMood && " mood") + (openFocus && " focus")}>
      <div className="modifier__icon">
        <div className={"icon" + (openMood && "active")}>
          <i onClick={openMoodHandler} className="fas fa-sliders-h fa-2x"></i>
        </div>
      </div>
      <div className="modifier__icon">
        <div className={"icon" + (openFocus && "active")}>
          <i onClick={openFocusHandler} className="fas fa-book-reader fa-2x"></i>
        </div>
      </div>
    </div>
  );
}
