import React from "react";
import { ModifierBoard } from "../../models/ModifierBoard";

export default function CountDownTimer({
  seconds,
  minutes,
  hours,
  isRunning,
  pause,
  resume,
  setTimerHandler,
  setTimerStart,
  timerStart,
}: ModifierBoard) {
  return (
    <div className="countdown">
      {timerStart ? (
        <div className="countdownRunning"></div>
      ) : (
        <div className="countdownStop"></div>
      )}
    </div>
  );
}
