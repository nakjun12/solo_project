import { useEffect, useState } from "react";
import styles from "./Stopwatch.module.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

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
    if (time !== 0) {
      playTickSound();
    }
  }, [time]);

  const playTickSound = () => {
    //수정요함
    const tickSound = new Audio("/tickSound.mp3");
    tickSound.play();
  };

  const handleStartStop = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
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
    </div>
  );
};

export default Stopwatch;
