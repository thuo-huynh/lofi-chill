export interface ModifierBoard {
  seconds: number;
  minutes: number;
  hours: number;
  isRunning: boolean;
  pause: () => void;
  resume: () => void;
  setTimeHandler: (hour: number, minute: number, second: number) => void;
  setTimerStart: (timeStart: boolean) => void;
  timeStart: boolean;
  restart: any;
}
