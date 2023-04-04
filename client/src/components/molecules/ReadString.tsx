import { speak } from "@/lib/Helpers";
import { useState, useEffect } from "react";
import type { Quiz, Level } from "@/Type/typeList";
import { quizData } from "@/lib/Dummy";
import RadioButton from "../atmos/RadioButton";
const ReadString = () => {
  const [next, setNext] = useState<boolean>(false);
  const [level, setlevel] = useState<Level>("전체");
  const [quiz, setQuiz] = useState<Quiz>();
  const quizList: Quiz[] = quizData;
  console.log(quiz);
  useEffect(() => {
    const filterQuiz = quizList.filter((el) => {
      if (level === "전체") {
        return true;
      }

      return el.level === level;
    });
    const quizIndex = Math.floor(Math.random() * filterQuiz.length); //length 5면, 0~4까지 +1해서 1~5까지
    const nextQuiz: Quiz | undefined = filterQuiz.find((el, index) => {
      return index === quizIndex;
    });
    setQuiz(nextQuiz); //정답보려 할때는 안바귀게해야함
  }, [next, level]);

  const speakHandler = () => {
    speechSynthesis.cancel();
    speak(
      quiz?.question || "JavaScript에서 객체를 만드는 방법은 무엇인가요?",
      window.speechSynthesis
    );
  };

  return (
    <>
      <RadioButton level={level} setlevel={setlevel} />
      <button type="button" onClick={() => setNext(!next)}>
        다음 문제
      </button>
      <button
        onClick={() => {
          speakHandler();
        }}
      >
        설명 듣기
      </button>
    </>
  );
};

export default ReadString;
