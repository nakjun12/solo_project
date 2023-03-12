import MenuItem from "../molecules/MenuItem";
import { IoMdHome } from "react-icons/Io";
import DarkModeSwitch from "../molecules/DarkModeswitch";
import { GiHamburgerMenu } from "react-icons/gi";
import Search from "../molecules/Search";
import { useSiteContext } from "@/lib/Context";
import DropDown from "../molecules/DropDown";

export default function Header() {
  const menuValue = useSiteContext();
  const { isOpen, title } = menuValue;

  return (
    <>
      <div className="relative z-20 bg-pageBG">
        <div className="headerStyle">
          <div className="flex">
            <MenuItem title="HOME" address="/" Icon={IoMdHome} />
            <MenuItem title="국내" address="/domestic" Icon={GiHamburgerMenu} />
            <MenuItem title="해외" address="/pop" />
          </div>
          <div className="flex items-center">
            <Search />
            <DarkModeSwitch />
          </div>
        </div>
      </div>
      {isOpen && title !== "HOME" && (
        <>
          <DropDown title={title} />
          <div className="blur-div" />
        </>
      )}
    </>
  );
}
