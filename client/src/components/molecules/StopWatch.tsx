import { useEffect, useState } from "react";
import styles from "./Stopwatch.module.css";
import playTickSound from "../atmos/TickSound";

interface props {
  isStart?: boolean;
}

const Stopwatch = ({ isStart = false }: props) => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(isStart);
  const [isSoundOn, setIsSoundOn] = useState(true);

  useEffect(() => {
    const interval: NodeJS.Timeout | null = isActive
      ? setInterval(() => {
          setTime((prevTime) => prevTime + 1);
        }, 100)
      : null;

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive]);

  useEffect(() => {
    if (time !== 0 && time % 2 === 0 && isSoundOn) {
      playTickSound();
    }
  }, [time, isSoundOn]);

  const handleStartStop = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  const handleToggleSound = () => {
    setIsSoundOn((prevIsSoundOn) => !prevIsSoundOn);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.timer}>{time.toFixed(1)}</h1>
      <button
        className={`${styles.btn} ${isActive ? styles.stop : styles.start}`}
        onClick={handleStartStop}
      >
        {isActive ? "Stop" : "Start"}
      </button>
      <button className={styles.button} onClick={handleReset}>
        Reset
      </button>
      <button className={styles.button} onClick={handleToggleSound}>
        {isSoundOn ? "Turn Sound Off" : "Turn Sound On"}
      </button>
    </div>
  );
};

export default Stopwatch;
