import MenuItem from "../molecules/MenuItem";
import { IoMdHome } from "react-icons/Io";
import DarkModeSwitch from "../molecules/DarkModeswitch";
import { GiHamburgerMenu } from "react-icons/gi";
import Search from "../molecules/Search";

export default function Header() {
  return (
    <div className="bg-red-600 items-center flex justify-between mx-auto max-w-6xl p-[2px] sm:py-6">
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
  );
}
