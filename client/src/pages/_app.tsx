import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Header from "@/components/organisms/Header";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="mx-auto min-h-screen max-w-6xl bg-slate-400">
        <Header />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
