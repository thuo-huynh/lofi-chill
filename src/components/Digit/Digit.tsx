import React from "react";

interface DigitProps {
  value: number;
  title: string;
}
export default function Digit({ value, title }: DigitProps) {
  const valueStr = value.toString().padStart(2, "0");
  const [leftDigit, rightDigit] = valueStr.split("");
  return (
    <div className="container">
      <span className="title">{title}</span>
      <div className="digitContainer">
        <span className="singleDigit">{leftDigit}</span>
        <span className="singleDigit">{rightDigit}</span>
      </div>
    </div>
  );
}
