import type { Level, Quiz } from '@/Type/typeList';
import Stopwatch from '@/components/molecules/StopWatch';
import { quizData } from '@/lib/Dummy';
import { useEffect, useRef, useState } from 'react';
import RadioButton from '../atmos/RadioButton';
import useWindowWidth from '../atmos/useWindowWidth';

export default function Quiz() {
  const [answerValue, setanswerValue] = useState<string>('');
  const [quiz, setQuiz] = useState<Quiz>();
  const [next, setNext] = useState<boolean>(false);
  const [level, setlevel] = useState<Level>('전체');
  const answerinputRef = useRef<HTMLInputElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [time, setTime] = useState<number>(0);
  const [result, setResult] = useState<boolean>(false); //boolean 배열 고민할것
  const { current } = answerinputRef;

  const quizList: Quiz[] = quizData;
  const windowWidth = useWindowWidth();

  useEffect(() => {
    const filterQuiz = quizList.filter(el => {
      if (level === '전체') {
        return true;
      }

      return el.level === level;
    });

    const quizIndex = Math.floor(Math.random() * filterQuiz.length); //length 5면, 0~4까지 +1해서 1~5까지
    const nextQuiz: Quiz | undefined = filterQuiz.find((el, index) => {
      return index === quizIndex;
    });

    if (!result) setQuiz(nextQuiz); //정답보려 할때는 안바귀게해야함
    setTime(0);
  }, [next, isActive, level]);

  useEffect(() => {
    if (answerValue !== '') {
    } //정답체크
  }, [answerValue]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //버블링 차단

    if (!current) return;
    else setanswerValue(current.value);
    current.value = '';
    setIsActive(false); // 타이머
    setResult(true); // 답 입력시에 값 안바뀌게 잡아줌
  };

  const nextLevel = () => {
    setNext(!next);
  };

  const handleToggleSound = () => {
    setIsSoundOn(prevIsSoundOn => !prevIsSoundOn);
  };

  return (
    <section className="mainDiv mx-auto h-auto">
      <div className="sm:flex  max-w-6xl mx-auto justify-around items-center sm:px-54">
        <div className="mr-12">
          <h1 className="quizQuestion flex items-center justify-center">
            {isActive ? quiz?.question : '시작을 눌러주세요'}
          </h1>
          <form className="user-input flex items-center" onSubmit={onSubmit}>
            <input
              className="flex-1"
              type="text"
              ref={answerinputRef}
              placeholder={
                isActive ? '정답을 입력해주세요' : 'start를 눌러주세요'
              }
              disabled={!isActive}
            />
            <button className="ml-4" type="submit">
              입력
            </button>
          </form>

          {windowWidth <= 1050 ? (
            <nav>
              <Stopwatch
                isSoundOn={isSoundOn}
                isActive={isActive}
                setisActive={setIsActive}
                setanswerValue={setanswerValue}
                time={time}
                setTime={setTime}
                current={current}
                setResult={setResult}
              />
              <RadioButton level={level} setlevel={setlevel} />

              <div className="my-8 flex justify-center">
                <button type="button" onClick={() => nextLevel()}>
                  다음 문제
                </button>

                <button
                  type="button"
                  className="ml-4"
                  onClick={handleToggleSound}
                >
                  {isSoundOn ? 'Sound Off' : 'Sound On'}
                </button>
              </div>
            </nav>
          ) : (
            <></>
          )}
        </div>
        {windowWidth > 1050 ? (
          <nav>
            <Stopwatch
              isSoundOn={isSoundOn}
              isActive={isActive}
              setisActive={setIsActive}
              setanswerValue={setanswerValue}
              time={time}
              setTime={setTime}
              current={current}
              setResult={setResult}
            />
            <RadioButton level={level} setlevel={setlevel} />
            <div className="my-8 flex">
              <button type="button" onClick={() => nextLevel()}>
                다음 문제
              </button>

              <button
                type="button"
                className="ml-4"
                onClick={handleToggleSound}
              >
                {isSoundOn ? 'Sound Off' : 'Sound On'}
              </button>
            </div>
          </nav>
        ) : (
          <></>
        )}
      </div>
      <ul className="flex flex-col item-center mt-12">
        <li className="output-container">
          <label>
            {answerValue !== ''
              ? quiz?.answer.includes(answerValue)
                ? ' 정답입니다'
                : ` 오답입니다 `
              : '퀴즈의 키워드를 맞춰보세요'}
          </label>

          {answerValue !== '' ? answerValue : ''}
        </li>
        <li className="output-container">
          <label>정답</label>
          {answerValue !== '' ? quiz?.answer : ''}
        </li>
      </ul>
    </section>
  );
}
//stop워치 이동할것임
//입력한 값과 답을 보여줌
//반응형 고려하고 배치에 대해 생각해볼 것
//stop ㄴ루렀을때 없어지는거 해결할 것
// 다음문제 해결
