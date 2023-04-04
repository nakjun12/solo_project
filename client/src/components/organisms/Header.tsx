import MenuItem from "../molecules/MenuItem";
import { IoMdHome } from "react-icons/Io";
import DarkModeSwitch from "../molecules/DarkModeswitch";
import { GiHamburgerMenu } from "react-icons/gi";
import Search from "../molecules/Search";
import { useSiteContext } from "@/lib/context/MenuContext";
import DropDown from "../molecules/DropDown";
import type { headerType } from "@/lib/context/MenuContext";
import { useRef, RefObject } from "react";
import { useRect } from "@reach/rect";
import type { MenuItemType } from "@/Type/typeList.d.ts";

export default function Header() {
  const headerRef = useRef() as RefObject<HTMLDivElement>;
  const headerRect = useRect(headerRef);
  const { isOpen, title, dropDown }: headerType = useSiteContext();

  const menuItems: MenuItemType[] = [
    {
      title: "HOME",
      address: "/",
      Icon: IoMdHome,
    },
    {
      title: "퀴즈",
      address: "/quiz",
      Icon: GiHamburgerMenu,
    },
    {
      title: "화상면접",
      address: "/video",
      Icon: null,
    },
  ];

  return (
    <>
      <div className="relative z-30 bg-pageBG">
        <header className="max-w-6xl headerStyle" ref={headerRef}>
          <div className="flex relative">
            {menuItems &&
              menuItems.map((item: MenuItemType) => (
                <MenuItem
                  key={item.title}
                  title={item.title}
                  address={item.address}
                  Icon={item.Icon}
                  selectTitle={title}
                />
              ))}
          </div>

          <div className="flex items-center">
            <Search title={title} />
            <DarkModeSwitch />
          </div>
        </header>
      </div>

      {isOpen && title !== "HOME" && (
        <>
          <DropDown
            title={title}
            dropDown={dropDown}
            headerheight={headerRect?.height}
            isOpen={isOpen}
          />
        </>
      )}
    </>
  );
}

//relatvie는 각자의 공간을 존중해준다.
//relative fixed인 경우 fixed는 relative 위로 올 수 있다 z-index가 높으면
//z-index가 높아도 fixed가 위에 쌓인다.
//메뉴가 아닌 드랍다운에서 넘어가도록 수정
