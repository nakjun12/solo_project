import { Dispatch, SetStateAction, useEffect } from 'react';
import playTickSound from '../atmos/TickSound';
import styles from './Stopwatch.module.css';

interface props {
  isActive: boolean;
  setisActive: Dispatch<SetStateAction<boolean>>;
  setanswerValue: Dispatch<SetStateAction<string>>;
  time: number;
  setTime: Dispatch<SetStateAction<number>>;
  current: HTMLInputElement | null;
  setResult: Dispatch<SetStateAction<boolean>>;
  isSoundOn: boolean;
}

const Stopwatch = ({
  isActive,
  setisActive,
  setanswerValue,
  time,
  setTime,
  current,
  setResult,
  isSoundOn,
}: props) => {
  // const [time, setTime] = useState(0);
  // const [isActive, setisActive] = useState(isStart);

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
  }, [isActive, setTime]);

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
        current.value = '';
      }
    }
    if (!isActive) {
      setanswerValue('');
      setTime(0);
      if (current) {
        current.value = '';
      }
    }

    setResult(false);
  }; //올리지말지 고민할것

  return (
    <div className={styles.container}>
      <h1 className={styles.timer}>{time.toFixed(1)}</h1>
      <button
        className={`${styles.btn} ${isActive ? styles.stop : styles.start}`}
        onClick={handleStartStop}
      >
        {isActive ? 'Stop' : 'Start'}
      </button>
    </div>
  );
};

export default Stopwatch;
