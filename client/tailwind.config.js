/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    colors: {
      inherit: "inherit", //부모 요소 상속
      transparent: "transparent", // 투명
      current: "currentColor", //글자색 그대로사용
      black: "#000000",
      white: "#FFFFFF",
      pageBG: "var(--pageBG)", //테일윈드 추가
      pageText: "var(--pageText)",
      blue: "#1a0dab",
      orange: "#F5541F",
      green: "#0F770D",
    },
    extend: {
      padding: {
        "2px": "2px",
      },
    },
    scale: new Array(161)
      .fill()
      .map((_, i) => i)
      .reduce((acc, val) => {
        acc[val] = `${val}`;
        return acc;
      }, {}),

    spacing: new Array(351)
      .fill()
      .map((_, i) => i)
      .reduce((acc, val) => {
        acc[val] = `${val / 10}rem`;
        return acc;
      }, {}),
  },

  plugins: [],
  darkMode: "class",
};
