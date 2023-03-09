import MenuItem from "../molecules/MenuItem";
import { IoMdHome } from "react-icons/Io";
import DarkModeSwitch from "../molecules/DarkModeswitch";
import { GiHamburgerMenu } from "react-icons/gi";
import Search from "../molecules/Search";

export default function Header() {
  return (
    <div className="bg-gray-500 dark:bg-red-500  items-center flex justify-between mx-auto max-w-6xl p-[2px] sm:py-6">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={IoMdHome} />
        <MenuItem title="명화" address="/masterpiece" Icon={GiHamburgerMenu} />
      </div>
      <div className="flex items-center">
        <Search />
        <DarkModeSwitch />
      </div>
    </div>
  );
}