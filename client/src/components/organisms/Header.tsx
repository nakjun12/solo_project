import MenuItem from "../molecules/MenuItem";
import { IoMdHome } from "react-icons/Io";
import DarkModeSwitch from "../molecules/DarkModeswitch";

export default function Header() {
  return (
    <div className="bg-gray-500 dark:bg-red-500  items-center flex justify-between mx-auto max-w-6xl py-6">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={IoMdHome}></MenuItem>
        <MenuItem
          title="명화"
          address="/masterpiece"
          Icon={IoMdHome}
        ></MenuItem>
      </div>
      <div>
        <DarkModeSwitch></DarkModeSwitch>
      </div>
    </div>
  );
}
