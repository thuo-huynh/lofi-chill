import { useEffect, useRef, useState } from "react";
import { RootState, useAppSelector } from "../../store/store";
import { Song } from "../../models/Song";
import "./Player.scss";

export interface PlayerProps {
  currentSongIndex: number;
  setCurrentSongIndex: (index: number) => void;
  songs: Song[];
}

export const Player = ({
  currentSongIndex,
  setCurrentSongIndex,
  songs,
}: PlayerProps) => {
  const { volumeValue } = useAppSelector((state: RootState) => state.volume);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioElement = useRef<HTMLAudioElement>(null);
  const skipSong = (forwards: boolean) => {
    let newIndex = forwards ? currentSongIndex + 1 : currentSongIndex - 1;
    if (newIndex > songs.length - 1) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = songs.length - 1;
    }
    setCurrentSongIndex(newIndex);
  };
  useEffect(() => {
    if (isPlaying) {
      audioElement.current?.play();
    } else {
      audioElement.current?.pause();
    }
    audioElement.current!.volume = volumeValue / 100;
  });

  return (
    <div className="music-player">
      <audio loop src={songs[currentSongIndex].path} ref={audioElement}></audio>
      <div className="music-player__controller">
        <button className="skip-button" onClick={() => skipSong(false)}>
          <img src="/assets/icons/prev.svg" alt="" />
        </button>
        <button
          className="play-button"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? (
            <img src="/assets/icons/pause.svg" alt="" />
          ) : (
            <img src="/assets/icons/play.svg" alt="" />
          )}
        </button>
        <button className="skip-button" onClick={() => skipSong(true)}>
          <img src="/assets/icons/next.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Player;
