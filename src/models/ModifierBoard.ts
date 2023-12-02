export interface ModifierBoard {
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
