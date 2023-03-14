import MenuItem from "../molecules/MenuItem";
import { IoMdHome } from "react-icons/Io";
import DarkModeSwitch from "../molecules/DarkModeswitch";
import { GiHamburgerMenu } from "react-icons/gi";
import Search from "../molecules/Search";
import { useSiteContext } from "@/lib/Context";
import DropDown from "../molecules/DropDown";
import type { headerType } from "@/lib/Context";
import { useRef, RefObject } from "react";
import { useRect } from "@reach/rect";

export default function Header() {
  const menuValue = useSiteContext();
  const { isOpen, title, dropDown }: headerType = menuValue;
  const headerRef = useRef() as RefObject<HTMLDivElement>;

  const headerRect = useRect(headerRef);

  return (
    <>
      <div className="relative z-30 bg-pageBG">
        <header className="max-w-6xl headerStyle" ref={headerRef}>
          <div className="flex">
            <MenuItem title="HOME" address="/" Icon={IoMdHome} />
            <MenuItem title="국내" address="/domestic" Icon={GiHamburgerMenu} />
            <MenuItem title="해외" address="/pop" />
          </div>
          <div className="flex items-center">
            <Search />
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
