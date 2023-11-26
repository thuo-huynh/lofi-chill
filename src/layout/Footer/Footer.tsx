import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { chill, jazzy, sleep } from "../../data/songData";
import { useState } from "react";
import Player from "../../components/Player/Player";
import { CONSTANTS } from "../../constants";
import "./Footer.scss";

export const Footer = () => {
  const { moodMode } = useSelector((state: RootState) => state.mood);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  return (
    <div className="footer">
      <div className="song-name">
        {moodMode === "chill" ? (
          <span>Song name: {chill[currentSongIndex].name}</span>
        ) : moodMode === "jazzy" ? (
          <span>Song name: {jazzy[currentSongIndex].name}</span>
        ) : (
          <span>Song name: {sleep[currentSongIndex].name}</span>
        )}
      </div>
      <div className="controller">
        {moodMode === "chill" ? (
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            songs={chill}
          ></Player>
        ) : moodMode === "jazzy" ? (
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            songs={jazzy}
          ></Player>
        ) : (
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            songs={sleep}
          ></Player>
        )}
      </div>
      <div className="author">
        Made by:
        <a
          href={CONSTANTS.AUTHOR_GITHUB_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="author-name"
        >
          {CONSTANTS.AUTHOR}
        </a>
      </div>
    </div>
  );
};

export default Footer;
