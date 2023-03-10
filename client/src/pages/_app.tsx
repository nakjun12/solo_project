import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Header from "@/components/organisms/Header";
import { Inter } from "next/font/google";
import cx from "classnames";

const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={false} disableTransitionOnChange>
      <div className={cx("bg-pageBG")}>
        <div className="mx-auto max-w-6xl bg-pageBG  text-pageText transition-colors duration-300 min-h-screen select-none">
          <Header />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}
