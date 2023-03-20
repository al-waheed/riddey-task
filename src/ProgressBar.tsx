import React from "react";
import "./styles.css";

type ProgressBarProps = {
  progress: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const barStyle = {
    backgroundColor: "#eee",
    height: "5px",
    width: "70%",
    margin: "0 auto",
  };

  const fillStyle = {
    backgroundColor: "#E26559",
    height: "100%",
    width: `${progress * 10}%`,
    transition: "width 0.5s ease-in-out",
  };


  return (
      <div style={barStyle}>
        <div style={fillStyle}/>
      </div>
  );
};

export default ProgressBar;
