import { quizData } from "@/lib/Dummy";
import { useRef, useState, useEffect } from "react";
import type { Quiz } from "@/Type/typeList";
import Stopwatch from "@/components/molecules/StopWatch";

type level = "전체" | "고급" | "중급" | "초급";

type Props = {};

export default function Quiz({}: Props) {
  const [answerValue, setanswerValue] = useState<string>("");
  const [quiz, setQuiz] = useState<Quiz>();
  const [next, setNext] = useState<boolean>(false);
  const [level, setlevel] = useState<level>("전체");
  const answerinputRef = useRef<HTMLInputElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const { current } = answerinputRef;

  const quizList: Quiz[] = quizData;

  useEffect(() => {
    const filterQuiz = quizList.filter((el) => {
      if (level === "전체") {
        return true;
      }

      return el.level === level;
    });
    const index = Math.floor(Math.random() * filterQuiz.length) + 1; //length 5면, 0~4까지 +1해서 1~5까지
    const nextQuiz: Quiz | undefined = quizList.find((el) => {
      return el.id === index;
    });
    setQuiz(nextQuiz);
    setTime(0);
  }, [next, isActive, level]);

  useEffect(() => {
    if (answerValue !== "") {
    } //정답체크
  }, [answerValue]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //버블링 차단
    if (!current) return;
    else setanswerValue(current.value);
    current.value = "";
    setIsActive(false);
  };

  const nextLevel = () => {
    setNext(!next);
  };

  return (
    <>
      <div className="sm:flex  max-w-6xl mx-auto justify-around items-center sm:px-54">
        <div className="">
          <section className="w-full quizQuestion  bg-blue">
            {isActive ? quiz?.question : "시작을 눌러주세요"}
          </section>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              ref={answerinputRef}
              placeholder={
                isActive ? "정답을 입력해주세요" : "start를 눌러주세요"
              }
              disabled={!isActive}
            />
            <button type="submit">입력</button>
          </form>

          <button type="button" onClick={() => nextLevel()}>
            다음 문제
          </button>

          {answerValue !== ""
            ? answerValue === quiz?.answer
              ? "정답입니다"
              : `오답입니다 정답은 ${quiz?.answer}입니다.`
            : ""}
        </div>
        <nav>
          <Stopwatch
            isActive={isActive}
            setisActive={setIsActive}
            setanswerValue={setanswerValue}
            time={time}
            setTime={setTime}
            current={current}
          />
        </nav>
      </div>
    </>
  );
}
//stop워치 이동할것임
//입력한 값과 답을 보여줌
//반응형 고려하고 배치에 대해 생각해볼 것
//stop ㄴ루렀을때 없어지는거 해결할 것
// 다음문제 해결
