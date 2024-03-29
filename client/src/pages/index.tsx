import Animation from '@/components/atmos/Animation';
import MainTap from '@/components/molecules/MainTap';
import MainBlock from '@/components/organisms/MainBlock';
import { swipeAnim } from '@/lib/Animate';
import { m } from 'framer-motion';
import { useMemo, useState } from 'react';

export default function Quotes() {
  const [activeTab, setActiveTab] = useState<number>(1);
  const activeBoolean = useMemo(() => {
    return activeTab === 1 ? true : false;
  }, [activeTab]);

  return (
    <main>
      <section className="flex w-full flex-col lg:flex-row mt-20 items-start justify-around ">
        <div className="flex flex-col min-x-[350px] sm:min-w-[500px] pr-20 text-3xl font-bevietnam my-20 mx-auto sm:my-auto">
          {activeBoolean && (
            <m.div
              initial="hide"
              animate={activeBoolean ? 'show' : 'hide'}
              variants={swipeAnim}
            >
              <h1 className="font-bold leading-snug ">
                키워드 퀴즈로 면접에 대비하세요!
              </h1>
            </m.div>
          )}
          {!activeBoolean && (
            <m.div
              initial="hide"
              animate={!activeBoolean ? 'show' : 'hide'}
              variants={swipeAnim}
            >
              <h1 className="font-bold leading-snug ">
                영상으로 면접을 준비하세요!
              </h1>
            </m.div>
          )}
          <MainTap activeBoolean={activeBoolean} setActiveTab={setActiveTab} />
        </div>
        <div className="mx-auto">
          <Animation activeBoolean={activeBoolean} />
        </div>
      </section>
      <section className="mt-40">
        <MainBlock />
      </section>
    </main>
  );
}

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const initialQuote = await fetchQuotes();
//   return {
//     props: {
//       initialQuote: initialQuote.slip.advice,
//     },
//   };
// };

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
