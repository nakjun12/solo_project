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
import { motion } from "framer-motion";

export default function Header() {
  const menuValue = useSiteContext();
  const { isOpen, title, dropDown }: headerType = menuValue;
  const headerRef = useRef() as RefObject<HTMLDivElement>;

  const headerRect = useRect(headerRef);
  console.log(title);
  return (
    <>
      <div className="relative z-30 bg-pageBG">
        <header className="max-w-6xl headerStyle" ref={headerRef}>
          <div className="flex relative">
            <MenuItem
              title="HOME"
              address="/"
              Icon={IoMdHome}
              selectTitle={title}
            />

            <MenuItem
              title="국내"
              address="/domestic"
              Icon={GiHamburgerMenu}
              selectTitle={title}
            />

            <MenuItem title="해외" address="/pop" selectTitle={title} />
          </div>

          <div className="flex items-center">
            <Search isOpen={isOpen} />
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
