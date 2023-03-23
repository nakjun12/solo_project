import Link from "next/link";
import { IconType } from "react-icons/lib";
import { useToggleMenu } from "@/lib/context/MenuContext";
import type { title } from "@/lib/context/MenuContext";
import { motion } from "framer-motion";

export default function MenuItem({
  title,
  address,
  Icon,
  selectTitle,
}: {
  title: title;
  address: string;
  Icon: IconType | null;
  selectTitle?: string | null;
}) {
  const toggleMenu = useToggleMenu();
  const isUnder = title === selectTitle;
  return (
    <div className="relative">
      <Link
        href={address}
        className="mx-4 lg:mx-6 hover:text-amber-600"
        // onClick={() => toggleMenu(false)}
        // onMouseOver={() => toggleMenu(true, title)} //클릭했을때 넘어가고 내려감
      >
        {Icon && (
          <Icon
            size={"20px"}
            className="text-2xl overflow-visible sm:hidden mx-4 "
          /> //나중에 모바일 추가
        )}
        <div
          className="hidden font-bold sm:inline my-2 text-base"
          onClick={() => toggleMenu(false)}
          onMouseMove={() => toggleMenu(true, title)}
        >
          {title}
          {isUnder ? (
            <motion.div className="sm:underline" layoutId="underline" />
          ) : null}
        </div>
      </Link>
    </div>
  );
}
