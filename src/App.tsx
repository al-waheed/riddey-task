import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import "./styles.css";

const App: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);

  const increaseProgress = () => {
    if (progress < 10) {
      setProgress((prevProgress) => prevProgress + 1);
    }
  };

  return (
    <div className="container">
      <div className="card_box">
        <div className="card_icon">
          <img src="/img/Logo + Text.jpg" alt="icon" />
        </div>
        <div className="card_heading">
          <h1>Upgrade to Riddey PRO and boost productivity!</h1>
          <p>Pellentesque porttitor euismod ante, accumsan consequat purus!</p>
        </div>
        <div className="card_features">
          <div className="features">
            <img src="/img/Logo + Text.png" alt="icon" />
            <h3>
              Featur e#1 <span>- Etiam convallis, nibh vitae dui risus</span>
            </h3>
          </div>
          <div className="features">
            <img src="/img/Logo + Text.png" alt="icon" />
            <h3>
              Feature #2 <span>- Etiam convallis, nibh vitae dui risus</span>
            </h3>
          </div>
          <div className="features">
            <img src="/img/Logo + Text.png" alt="icon" />
            <h3>
              Feature #3 <span>- Etiam convallis, nibh vitae dui risus</span>
            </h3>
          </div>
        </div>
        <div className="card_progress">
          <h4>Current usage</h4>
          <h5>{progress} out of 10 boards in use</h5>
          <ProgressBar progress={progress} />
          <button
            className="card_btn"
            onClick={increaseProgress}
            disabled={progress === 10}
          >
            Add New Board
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
