import { AiOutlineSearch } from "react-icons/ai";
import { useToggleMenu } from "@/lib/context.tsx/MenuContext";
import { useState } from "react";

export default function Search({ isOpen }: { isOpen: boolean | undefined }) {
  const [isSearch, SetisSearch] = useState<boolean>(true);
  const toggleMenu = useToggleMenu();

  const searchToggle = () => {
    if (!isSearch) toggleMenu(true, "Search");
    if (isSearch) toggleMenu(false);
    SetisSearch(!isSearch);
  };

  return (
    <div className="mx-4 cursor-pointer" onClick={() => searchToggle()}>
      <AiOutlineSearch size={"20px"} />
    </div>
  );
}
//다른창 열려있을때 열려야함
//다른창 닫아있을대도 열려야함
// 검색창 켜져있으면 닫아야함
