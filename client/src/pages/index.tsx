import MainCarousel from '@/components/molecules/mainCarousel';
import fetchQuotes from '@/pages/api/fetchQuotes';
import type { GetStaticProps } from 'next';
import { useState } from 'react';
type Props = {
  initialQuote: any;
};

export default function Quotes({ initialQuote }: Props) {
  const [quote, setQuote] = useState<string | null>(initialQuote);

  const handleNewQuoteClick = async () => {
    const newQuote = await fetchQuotes();
    setQuote(newQuote.slip.advice);
  };

  return (
    <div>
      <MainCarousel></MainCarousel>
      <h1>명언 랜덤 출력기</h1>
      {quote ? (
        <div>
          <p>"{quote}"</p>
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
      initialQuote: initialQuote.slip.advice,
    },
  };
};

//헤드 설정 잊지말것
{
  /* <main className="mx-auto flex flex-col items-center"> */
}
{
  /* <Head>
<title>Create Next App</title>
<meta name="description" content="Generated by create next app" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="icon" href="/favicon.ico" />
</Head> */
}
//기술면접 사진과 화상면접 사진 넣기
// ISR 오래걸림
