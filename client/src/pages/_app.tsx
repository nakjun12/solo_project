import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Header from "@/components/organisms/Header";
import { SiteContextProvider } from "@/lib/Context";

import "../styles/tailwind.css";

const Site = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <div className=" bg-pageBG  text-pageText transition-colors duration-300 min-h-screen select-none">
        <Header />
        <div className="mx-auto max-w-6xl">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
};

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider enableSystem={false} disableTransitionOnChange>
      <SiteContextProvider>
        <Site Component={Component} pageProps={pageProps} router={router} />
      </SiteContextProvider>
    </ThemeProvider>
  );
}
