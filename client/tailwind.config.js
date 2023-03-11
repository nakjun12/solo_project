/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    colors: {
      //자식다 먹임
      inherit: "inherit", //부모 요소 상속
      transparent: "transparent", // 투명
      current: "currentColor", //글자색 그대로사용
      black: "#000000",
      white: "#FFFFFF",
      pageBG: "var(--pageBG)", //테일윈드 추가
      pageText: "var(--pageText)",
    },
    extend: {
      padding: {
        "2px": "2px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
