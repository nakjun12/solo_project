import { useState } from "react";
import { Quote } from "@/lib/Dummy";
import fetchQuotes from "@/pages/api/fetchQuotes";
import type { GetStaticProps } from "next";

type Props = {
  initialQuote: Quote;
};

export default function Quotes({ initialQuote }: Props) {
  const [quote, setQuote] = useState<Quote | null>(initialQuote);

  const handleNewQuoteClick = async () => {
    const newQuote = await fetchQuotes();
    setQuote(newQuote);
  };

  return (
    <div>
      <h1>명언 랜덤 출력기</h1>
      {quote ? (
        <div>
          <p>"{quote.text}"</p>
          <p>- {quote.author}</p>
        </div>
      ) : (
        <p>명언을 불러오는 중입니다...</p>
      )}
      <button onClick={handleNewQuoteClick}>새로운 명언</button>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const initialQuote = await fetchQuotes();
  return {
    props: {
      initialQuote,
    },
    revalidate: 3600, // 1 hour
  };
};
