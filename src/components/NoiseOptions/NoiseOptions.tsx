import React from "react";
import ReactAudioPlayer from "react-audio-player";
import Slider from "@mui/material/Slider";
import "./NoiseOptions.scss";

interface NoiseOptionsProps {
  label: string;
  src: string;
  value: number;
  onChange: (value: number) => void;
}
export const NoiseOption = ({ label, src, value, onChange }: NoiseOptionsProps) => (
  <div className="noise-option">
    <p>{label}</p>
    <ReactAudioPlayer preload="auto" autoPlay src={src} loop volume={value / 100} />
    <Slider
      className="slider"
      value={value}
      onChange={(event: Event) => onChange(parseInt((event.target as HTMLInputElement).value))}
    />
  </div>
);
