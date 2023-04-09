import Header from '@/components/organisms/Header';
import { pageTransitionAnim } from '@/lib/Animate';
import { SiteContextProvider } from '@/lib/context/MenuContext';
import '@/styles/globals.css';
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/tailwind.css';

const Site = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <Head>
        <title>ROOT</title>
        <meta
          name="description"
          content="기술 공부는 개발자의 뿌리입니다. 기술면접을 ROOT와 함께 대비하세요!."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/laptop.png" />
      </Head>
      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="wait">
          <m.div
            key={router._inFlightRoute}
            initial="hide"
            animate="show"
            exit="hide"
            variants={pageTransitionAnim}
          >
            <div className=" bg-pageBG  text-pageText transition-colors duration-300 min-h-screen select-none ">
              <Header />
              <div className="mx-auto max-w-6xl">
                <Component {...pageProps} />
              </div>
            </div>
          </m.div>
        </AnimatePresence>
      </LazyMotion>
    </>
  );
};
//lazymotion 애니메이션 지연 기능 렌더링을 더 빠르게
//animatepresence exit animation가능하게함

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider enableSystem={false} disableTransitionOnChange>
      <SiteContextProvider>
        <Site Component={Component} pageProps={pageProps} router={router} />
      </SiteContextProvider>
    </ThemeProvider>
  );
}
