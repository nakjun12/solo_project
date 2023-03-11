import MenuItem from "../molecules/MenuItem";
import { IoMdHome } from "react-icons/Io";
import DarkModeSwitch from "../molecules/DarkModeswitch";
import { GiHamburgerMenu } from "react-icons/gi";
import Search from "../molecules/Search";
import { useSiteContext } from "@/lib/Context";
import { title } from "process";
export default function Header() {
  const menuValue = useSiteContext();
  const { isOpen, title } = menuValue;

  return (
    <>
      <div className="">
        <div className="headerStyle">
          <div className="flex z-20">
            <MenuItem title="HOME" address="/" Icon={IoMdHome} />
            <MenuItem title="국내" address="/domestic" Icon={GiHamburgerMenu} />
            <MenuItem title="해외" address="/pop" />
          </div>
          <div className="flex items-center">
            <Search />
            <DarkModeSwitch />
          </div>
        </div>
        {isOpen && title !== "HOME" && <div>안녕</div>}
      </div>
      {/* <div className="blur-div" /> */}
    </>
  );
}
