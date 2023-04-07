import { NextApiHandler } from "next";

type Quote = {
  text: string;
  author: string;
};

const QUOTES_API_URL = "https://api.adviceslip.com/advice";

const fetchQuotes = async (): Promise<any> => {
  const quotesRes = await fetch(QUOTES_API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return quotesRes.ok ? quotesRes.json() : "failure";
};

export default fetchQuotes;
