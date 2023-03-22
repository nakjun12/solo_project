import Stopwatch from "@/components/molecules/StopWatch";
import { useRef, useState } from "react";

export default function index() {
  const [answerValue, setanswerValue] = useState<string>("");
  const answerinputRef = useRef<HTMLInputElement>(null);
  console.log(answerinputRef);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //버블링 차단
    const { current } = answerinputRef;
    if (!current) return;
    else setanswerValue(current.value);
    current.value = "";
  };

  return (
    <main className="flex">
      <div>
        <article></article>
        <section>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              ref={answerinputRef}
              placeholder="정답을 일력해주세요"
            ></input>
            <button type="submit">입력</button>
          </form>
          {answerValue}
        </section>
      </div>
      <Stopwatch />
      index
    </main>
  );
}
