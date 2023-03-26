import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./Stopwatch.module.css";
import playTickSound from "../atmos/TickSound";

interface props {
  isActive: boolean;
  setisActive: Dispatch<SetStateAction<boolean>>;
  setanswerValue: Dispatch<SetStateAction<string>>;
  time: number;
  setTime: Dispatch<SetStateAction<number>>;
  current: HTMLInputElement | null;
  setResult: Dispatch<SetStateAction<boolean>>;
}

const Stopwatch = ({
  isActive,
  setisActive,
  setanswerValue,
  time,
  setTime,
  current,
  setResult,
}: props) => {
  // const [time, setTime] = useState(0);
  // const [isActive, setisActive] = useState(isStart);
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
    setisActive((prevIsActive) => !prevIsActive);
    if (isActive) {
      setTime(0);
      if (current) {
        current.value = "";
      }
    }
    if (!isActive) {
      setanswerValue("");
      setTime(0);
      if (current) {
        current.value = "";
      }
    }

    setResult(false);
  }; //올리지말지 고민할것

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

      <button className={styles.btn} onClick={handleToggleSound}>
        {isSoundOn ? "Turn Sound Off" : "Turn Sound On"}
      </button>
    </div>
  );
};

export default Stopwatch;
