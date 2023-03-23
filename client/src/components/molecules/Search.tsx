import { AiOutlineSearch } from "react-icons/ai";
import { useToggleMenu } from "@/lib/context/MenuContext";
import { useState } from "react";
import type { title } from "@/lib/context/MenuContext";

export default function Search({ title }: { title: title | null }) {
  const toggleMenu = useToggleMenu();
  const searchToggle = () => {
    if (title !== "Search") {
      toggleMenu(true, "Search");
    } else if (title === "Search") {
      toggleMenu(false);
    }

    //유동적으로
    // TT 닫혀야함, FF때 열려야함 FT 열려야함 문제는 TT일때 열려야있는 상황과 닫혀있는 상황임 TF인 상황에도 열려야함
  }; // 토글이 다른걸로 바꼈을때 대처를 해야함

  return (
    <div className="mx-4 cursor-pointer" onClick={() => searchToggle()}>
      <AiOutlineSearch size={"20px"} />
    </div>
  );
}
//다른창 열려있을때 열려야함
//다른창 닫아있을대도 열려야함
// 검색창 켜져있으면 닫아야함
//문제 검색기능
