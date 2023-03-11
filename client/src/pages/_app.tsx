import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Header from "@/components/organisms/Header";
import { SiteContextProvider } from "@/lib/Context";
import cx from "classnames";

const Site = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default function App({ Component, pageProps, router }: AppProps) {
  console.log(pageProps);
  return (
    <ThemeProvider enableSystem={false} disableTransitionOnChange>
      <div className={cx("bg-pageBG")}>
        <div className="mx-auto max-w-6xl bg-pageBG  text-pageText transition-colors duration-300 min-h-screen select-none">
          <SiteContextProvider>
            <Site Component={Component} pageProps={pageProps} router={router} />
          </SiteContextProvider>
        </div>
      </div>
    </ThemeProvider>
  );
}
