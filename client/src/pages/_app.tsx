import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Header from "@/components/organisms/Header";
import { SiteContextProvider } from "@/lib/Context";
import { LazyMotion, domAnimation, AnimatePresence, m } from "framer-motion";
import { pageTransitionAnim } from "@/lib/Animate";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });
import "../styles/tailwind.css";

const Site = ({ Component, pageProps, router }: AppProps) => {
  console.log(router._inFlightRoute);
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        <m.div
          key={router._inFlightRoute}
          initial="hide"
          animate="show"
          exit="hide"
          variants={pageTransitionAnim}
        >
          <div className=" bg-pageBG  text-pageText transition-colors duration-300 min-h-screen select-none">
            <Header />
            <div className="mx-auto max-w-6xl">
              <Component {...pageProps} />
            </div>
          </div>
        </m.div>
      </AnimatePresence>
    </LazyMotion>
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
