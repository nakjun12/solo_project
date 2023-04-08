import type { Level, Quiz } from '@/Type/typeList';
import { quizData } from '@/lib/Dummy';
import { speak } from '@/lib/Helpers';
import { useEffect, useState } from 'react';
import RadioButton from '../atmos/RadioButton';

const ReadString = () => {
  const [next, setNext] = useState<boolean>(false);
  const [level, setlevel] = useState<Level>('전체');
  const [quiz, setQuiz] = useState<Quiz>();
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const quizList: Quiz[] = quizData;

  useEffect(() => {
    const filterQuiz = quizList.filter((el) => {
      if (level === '전체') {
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
      quiz?.question || 'JavaScript에서 객체를 만드는 방법은 무엇인가요?',
      window.speechSynthesis,
    );
  };

  return (
    <>
      <RadioButton level={level} setlevel={setlevel} />
      <div className="flex flex-row justify-center">
        <button type="button" onClick={() => setNext(!next)} className="mr-8">
          다음 문제
        </button>
        <button
          onClick={() => {
            speakHandler();
          }}
          type="button"
        >
          설명 듣기
        </button>
      </div>
      <section className="output-video-container">
        {isCheck ? (
          <>
            <h1 className="mb-6">{quiz?.question}</h1>
            <h2 className="mb-8">{quiz?.answer}</h2>
          </>
        ) : (
          ''
        )}
        <button
          onClick={() => {
            setIsCheck(!isCheck);
          }}
        >
          {isCheck ? (
            <>
              <h1>숨기기</h1>
            </>
          ) : (
            <h1>정답 확인하기</h1>
          )}
        </button>
      </section>
    </>
  );
};

export default ReadString;
