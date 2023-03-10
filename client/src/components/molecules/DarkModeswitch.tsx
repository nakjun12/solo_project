import React from "react";
import { useTheme } from "next-themes";
import { useHasMounted } from "@/lib/Helpers";

const themes = [
  { title: "Light Mode", name: "light", color: { hex: "#f4f4f0" } },
  { title: "Dark Mode", name: "dark", color: { hex: "#000000" } },
  { title: "Metal Mode", name: "metal", color: { hex: "#FB1B15" } },
];

const DarkModeSwitch = () => {
  const hasMounted = useHasMounted();
  const { theme, setTheme } = useTheme();

  // Make sure it's client-only
  if (!hasMounted || !theme) return null;

  // store our current and next theme objects (will be first theme, if undefined)
  const currentIndex = Math.max(
    0,
    themes.findIndex((t) => t.name === theme)
  );

  const nextTheme = themes[(currentIndex + 1) % themes.length];
  const currentTheme = themes[currentIndex];

  return (
    <div className="theme-switch">
      <button
        className="theme-switch--toggle"
        onClick={() => setTheme(nextTheme.name)}
        aria-label={`Change theme to ${nextTheme.title}`}
      >
        <div className="theme-switch--label">{currentTheme.title}</div>
      </button>
    </div>
  );
};

export default DarkModeSwitch;

// export default function DarkModeSwitch() {
//   // const [dark, setDark] = useState("dark"); // 다크모드 있는곳 텍스트 !

//   // const toggleDarkMode = () => {
//   //   if (localStorage.getItem("theme") === "dark") {
//   //     // 다크모드 -> 기본모드
//   //     localStorage.removeItem("theme"); // 다크모드 삭제
//   //     document.documentElement.classList.remove("dark"); // html class에서 dark클래스 삭제 !
//   //     setDark("light");
//   //   } else {
//   //     // 기본모드 -> 다크모드
//   //     document.documentElement.classList.add("dark"); // html의 class에 dark 클래스 추가 !
//   //     localStorage.setItem("theme", "dark"); // localstorage에 dark를 추가해서 ! useEffect에서 처음에 검사해서 다크모드인지 판단해주려고 !
//   //     setDark("dark");
//   //   }
//   // };

//   // useEffect(() => {
//   //   // 처음에 다크모드인지 판단해서 뿌려주기 !! ( 나중에는 상태관리를 해도 괜찮습니다 ! )
//   //   if (localStorage.getItem("theme") === "dark") {
//   //     document.documentElement.classList.add("dark");
//   //   }
//   // }, []);
//   return (
//     <>
//       {dark === "dark" ? (
//         <MdLightMode
//           className="text-xl cursor-pointer hover:text-amber-500"
//           onClick={() => toggleDarkMode()}
//         />
//       ) : (
//         <BsFillMoonFill
//           className="text-xl cursor-pointer hover:text-amber-500"
//           onClick={() => toggleDarkMode()}
//         />
//       )}
//     </>
//   );
// }
