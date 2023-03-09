"use client";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
export default function DarkModeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="mx-4">
      {theme === "dark" ? (
        <MdLightMode
          size={"20px"}
          className="text-xl cursor-pointer hover:text-amber-500"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BsFillMoonFill
          size={"20px"}
          className="text-xl cursor-pointer hover:text-amber-500"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}
