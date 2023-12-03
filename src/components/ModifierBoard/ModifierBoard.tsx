import React, { useRef, useState } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../../store/store";
import "./ModifierBoard.scss";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { changeMoodStatus } from "../../store/slice/moodSlice";
import { changeVolume } from "../../store/slice/volumeSlice";
import ReactAudioPlayer from "react-audio-player";
import { NoiseOption } from "../NoiseOptions/NoiseOptions";

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
  let { volumeValue, isMuted } = useAppSelector((state: RootState) => state.volume);

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

  const noiseOptions = [
    { label: "City rain", src: "./assets/musics/rain_city.mp3", key: "cityRain" },
    { label: "Fireplace", src: "./assets/musics/fireplace.mp3", key: "fireplace" },
    { label: "Snow", src: "./assets/musics/snow.mp3", key: "snow" },
    { label: "Summer Storm", src: "./assets/musics/summer_storm.mp3", key: "summerStorm" },
    { label: "Fan", src: "./assets/musics/fan.mp3", key: "fan" },
    { label: "Forest Night", src: "./assets/musics/forest_night.mp3", key: "forestNight" },
    { label: "Wave", src: "./assets/musics/waves.mp3", key: "wave" },
    { label: "Wind", src: "./assets/musics/wind.mp3", key: "wind" },
    { label: "People", src: "./assets/musics/people_talk_inside.mp3", key: "people" },
    { label: "River", src: "./assets/musics/river.mp3", key: "river" },
    { label: "Rain Forest", src: "./assets/musics/rain_forest.mp3", key: "rainForest" },
  ];

  const [soundState, setSoundState] = useState<any>(sounds);
  const prevVolume = useRef(volumeValue);

  const openMoodHandler = () => {
    setOpenMood(!openMood);
    setOpenFocus(false);
  };
  const openFocusHandler = () => {
    setOpenFocus(!openFocus);
    setOpenMood(false);
  };

  const changeMoodHandler = (event: any) => {
    dispatch(changeMoodStatus(event.target.id));
  };

  const changeVolumeHandler = (event: any) => {
    const volumeValue = event.target.value;
    prevVolume.current = volumeValue;
    dispatch(changeVolume({ isMuted: volumeValue === 0, volumeValue }));
  };

  const muteVolumeHandler = () => {
    const newVolumeValue = isMuted ? prevVolume.current : 0;
    dispatch(changeVolume({ volumeValue: newVolumeValue, isMuted: !isMuted }));
  };

  return (
    <div className={"modifier " + (openMood && "mood ") + (openFocus && " focus")}>
      <div className="modifier__icon">
        <div className={"icon " + (openMood && "active")}>
          <i onClick={openMoodHandler} className="fas fa-sliders-h fa-2x"></i>
        </div>
        {openMood && (
          <div className="modifier-box">
            <h4>Mood</h4>
            <div className="options">
              <div
                id="sleep"
                className={"item " + (moodMode === "sleep" ? "active" : "")}
                onClick={changeMoodHandler}
              >
                <i id="sleep" className="fas fa-moon fa-2x"></i>
                <span id="sleep">Sleep</span>
              </div>
              <div
                id="jazzy"
                className={"item " + (moodMode === "jazzy" ? "active" : "")}
                onClick={changeMoodHandler}
              >
                <i id="jazzy" className="fas fa-guitar fa-2x"></i>
                <span id="jazzy">Jazzy</span>
              </div>

              <div
                id="chill"
                className={"item " + (moodMode === "chill" ? "active" : "")}
                onClick={changeMoodHandler}
              >
                <i id="chill" className="fas fa-coffee fa-2x"></i>
                <span id="chill">Chill</span>
              </div>
            </div>
            <div className="volume">
              <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                <i
                  className={isMuted ? "fas fa-volume-mute fa-lg" : "fas fa-volume-up fa-lg"}
                  onClick={muteVolumeHandler}
                ></i>
                <Slider
                  className="volume-slider"
                  value={volumeValue}
                  onChange={changeVolumeHandler}
                />
              </Stack>
            </div>
            <h5>Background Noise</h5>
            <div className="background-noise">
              {noiseOptions.map(({ label, src, key }) => (
                <NoiseOption
                  key={key}
                  label={label}
                  src={src}
                  value={soundState[key]}
                  onChange={(newValue) =>
                    setSoundState({
                      ...soundState,
                      [key]: newValue,
                    })
                  }
                />
              ))}
              {/* <div className="noise-option">
                <p>City traffic</p>
                <ReactAudioPlayer
                  preload="auto"
                  autoPlay
                  src="./assets/musics/city_traffic.mp3"
                  loop
                  volume={soundState.cityTraffic / 100}
                />
                <Slider
                  className="slider"
                  value={soundState.cityTraffic}
                  onChange={(event: Event) =>
                    setSoundState({
                      ...soundState,
                      cityTraffic: parseInt((event.target as HTMLInputElement).value),
                    })
                  }
                />
              </div>
              <div className="noise-option">
                <p>City rain</p>
                <ReactAudioPlayer
                  preload="auto"
                  autoPlay
                  src="./assets/musics/rain_city.mp3"
                  loop
                  volume={soundState.cityRain / 100}
                />
                <Slider
                  className="slider"
                  value={soundState.cityRain}
                  onChange={(event: Event) =>
                    setSoundState({
                      ...soundState,
                      cityRain: parseInt((event.target as HTMLInputElement).value),
                    })
                  }
                />
              </div>
              <div className="noise-option">
                <p>Fireplace</p>
                <ReactAudioPlayer
                  preload="auto"
                  autoPlay
                  src="./assets/musics/fireplace.mp3"
                  loop
                  volume={soundState.fireplace / 100}
                />
                <Slider
                  className="slider"
                  onChange={(event: Event) =>
                    setSoundState({
                      ...soundState,
                      fireplace: parseInt((event.target as HTMLInputElement).value),
                    })
                  }
                />
              </div>
              <div className="noise-option">
                <p>Snow</p>
                <ReactAudioPlayer
                  preload="auto"
                  autoPlay
                  src="./assets/musics/snow.mp3"
                  loop
                  volume={soundState.snow / 100}
                />
                <Slider
                  className="slider"
                  value={soundState.snow}
                  onChange={(event: Event) =>
                    setSoundState({
                      ...soundState,
                      snow: parseInt((event.target as HTMLInputElement).value),
                    })
                  }
                />
              </div>
              <div className="noise-option">
                <p>Summer Storm</p>
                <ReactAudioPlayer
                  preload="auto"
                  autoPlay
                  src="./assets/musics/summer_storm.mp3"
                  loop
                  volume={soundState.summerStorm / 100}
                />
                <Slider
                  className="slider"
                  value={soundState.summerStorm}
                  onChange={(event: Event) =>
                    setSoundState({
                      ...soundState,
                      summerStorm: parseInt((event.target as HTMLInputElement).value),
                    })
                  }
                />
              </div>
              <div className="noise-option">
                <p>Fan</p>
                <ReactAudioPlayer
                  preload="auto"
                  autoPlay
                  src="./assets/musics/fan.mp3"
                  loop
                  volume={soundState.fan / 100}
                />
                <Slider
                  className="slider"
                  value={soundState.fan}
                  onChange={(event: Event) =>
                    setSoundState({
                      ...soundState,
                      fan: parseInt((event.target as HTMLInputElement).value),
                    })
                  }
                />
              </div>
              <div className="noise-option">
                <p>Forest Night</p>
                <ReactAudioPlayer
                  preload="auto"
                  autoPlay
                  src="./assets/musics/forest_night.mp3"
                  loop
                  volume={soundState.forestNight / 100}
                />
                <Slider
                  className="slider"
                  value={soundState.forestNight}
                  onChange={(event: Event) =>
                    setSoundState({
                      ...soundState,
                      forestNight: parseInt((event.target as HTMLInputElement).value),
                    })
                  }
                />
              </div>
              <div className="noise-option">
                <p>Wave</p>
                <ReactAudioPlayer
                  preload="auto"
                  autoPlay
                  src="./assets/musics/waves.mp3"
                  loop
                  volume={soundState.wave / 100}
                />
                <Slider
                  className="slider"
                  value={soundState.wave}
                  onChange={(event: Event) =>
                    setSoundState({
                      ...soundState,
                      wave: parseInt((event.target as HTMLInputElement).value),
                    })
                  }
                />
              </div>
              <div className="noise-option">
                <p>Wind</p>
                <ReactAudioPlayer
                  preload="auto"
                  autoPlay
                  src="./assets/musics/wind.mp3"
                  loop
                  volume={soundState.wind / 100}
                />
                <Slider
                  className="slider"
                  value={soundState.wind}
                  onChange={(event: Event) =>
                    setSoundState({
                      ...soundState,
                      wind: parseInt((event.target as HTMLInputElement).value),
                    })
                  }
                />
              </div>
              <div className="noise-option">
                <p>People</p>
                <ReactAudioPlayer
                  preload="auto"
                  autoPlay
                  src="./assets/musics/people_talk_inside.mp3"
                  loop
                  volume={soundState.people / 100}
                />
                <Slider
                  className="slider"
                  value={soundState.people}
                  onChange={(event: Event) =>
                    setSoundState({
                      ...soundState,
                      people: parseInt((event.target as HTMLInputElement).value),
                    })
                  }
                />
              </div>
              <div className="noise-option">
                <p>River</p>
                <ReactAudioPlayer
                  preload="auto"
                  autoPlay
                  src="./assets/musics/river.mp3"
                  loop
                  volume={soundState.river / 100}
                />
                <Slider
                  className="slider"
                  value={soundState.river}
                  onChange={(event: Event) =>
                    setSoundState({
                      ...soundState,
                      river: parseInt((event.target as HTMLInputElement).value),
                    })
                  }
                />
              </div>
              <div className="noise-option">
                <p>Rain Forest</p>
                <ReactAudioPlayer
                  preload="auto"
                  autoPlay
                  src="./assets/musics/rain_forest.mp3"
                  loop
                  volume={soundState.rainForest / 100}
                />
                <Slider
                  className="slider"
                  value={soundState.rainForest}
                  onChange={(event: Event) =>
                    setSoundState({
                      ...soundState,
                      rainForest: parseInt((event.target as HTMLInputElement).value),
                    })
                  }
                />
              </div> */}
            </div>
          </div>
        )}
      </div>
      <div className="modifier__icon">
        <div className={"icon" + (openFocus && "active")}></div>
      </div>
    </div>
  );
}
