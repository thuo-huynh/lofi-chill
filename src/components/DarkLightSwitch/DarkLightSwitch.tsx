import React, { useState } from "react";
import Lottie from "react-lottie-player";
import parseUnit from "parse-unit";

const animationData = require("./animationData.json");

interface DarkLightSwitchProps {
  size: number | string;
  checked: boolean;
  onChange: any;
  speed: number;
}

export default function DarkLightSwitch({ size, checked, onChange, speed }: DarkLightSwitchProps) {
  const [sizeValue, sizeUnit] = parseUnit(size);
  const [isReadyToAnimate, setReadyToAnimate] = useState(false);

  const segmentsToPlay: any = checked ? [2, 50] : [51, 96];
  const segmentToGoTo = checked ? 51 : 2;
  return (
    <button
      onClick={() => {
        setReadyToAnimate(true);
        onChange(!checked);
      }}
      style={{
        cursor: "pointer",
        overflow: "hidden",
        width: `${sizeValue}${sizeUnit || "px"}`,
        height: `${sizeValue * 0.47}${sizeUnit || "px"}`,
        appearance: "none",
        MozAppearance: "none",
        WebkitAppearance: "none",
        border: "none",
        backgroundColor: "transparent",
        padding: 0,
      }}
      aria-hidden="true"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: `${sizeValue * -0.575}${sizeUnit || "px"}`,
          marginLeft: `${sizeValue * -0.32}${sizeUnit || "px"}`,
          width: `${sizeValue * 1.65}${sizeUnit || "px"}`,
          height: `${sizeValue * 1.65}${sizeUnit || "px"}`,
        }}
      >
        <Lottie
          key="$preventGlitches"
          play={isReadyToAnimate}
          speed={speed}
          animationData={animationData}
          loop={false}
          segments={segmentsToPlay}
          goTo={segmentToGoTo}
        />
      </div>
    </button>
  );
}
