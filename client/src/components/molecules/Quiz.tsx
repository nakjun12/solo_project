import { quizData } from "@/lib/Dummy";
import { useRef, useState, useEffect } from "react";
import type { Quiz } from "@/Type/typeList";

type level = "전체" | "고급" | "중급" | "초급";

type Props = {};

export default function Quiz({}: Props) {
  const [answerValue, setanswerValue] = useState<string>("");
  const [quiz, setQuiz] = useState<Quiz>();
  const [next, setNext] = useState<boolean>(false);
  const [level, setlevel] = useState<level>("전체");
  const answerinputRef = useRef<HTMLInputElement>(null);

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
    console.log("하이");
  }, [next]);

  useEffect(() => {
    if (answerValue !== "") {
    } //정답체크
  }, [answerValue]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //버블링 차단
    const { current } = answerinputRef;
    if (!current) return;
    else setanswerValue(current.value);
    current.value = "";
  };

  const nextLevel = () => {
    setNext(!next);
  };

  return (
    <>
      <div>
        {quiz?.question}
        <form onSubmit={onSubmit}>
          <input
            type="text"
            ref={answerinputRef}
            placeholder="정답을 일력해주세요"
          />
          <button type="submit">입력</button>
        </form>
        <button type="button" onClick={() => nextLevel()}>
          다음 문제
        </button>

        {answerValue}
      </div>
    </>
  );
}
