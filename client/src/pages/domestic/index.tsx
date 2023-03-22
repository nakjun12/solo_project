import Stopwatch from "@/components/molecules/StopWatch";
import { useRef, useState, useEffect } from "react";
import Quiz from "@/components/molecules/Quiz";

export default function index() {
  return (
    <main>
      <div className="flex">
        <article></article>
        <section>
          <Quiz />
          <Stopwatch />
        </section>
      </div>
      index
    </main>
  );
}

//릴레이
// 하나씩 푸는 것
