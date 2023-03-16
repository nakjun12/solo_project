import Link from "next/link";
import { IconType } from "react-icons/lib";
import { useToggleMenu } from "@/lib/Context";
import type { title } from "@/lib/Context";
import { motion } from "framer-motion";

export default function MenuItem({
  title,
  address,
  Icon,
  selectTitle,
}: {
  title: title;
  address: string;
  Icon?: IconType;
  selectTitle?: string | null;
}) {
  const toggleMenu = useToggleMenu();
  const isUnder = title === selectTitle;
  return (
    <div className="relative">
      <Link
        href={address}
        className="mx-4 lg:mx-6 hover:text-amber-600"
        onClick={() => toggleMenu(false)}
        onMouseOver={() => toggleMenu(true, title)} //클릭했을때 넘어가고 내려감
      >
        {Icon && (
          <Icon
            size={"20px"}
            className="text-2xl overflow-visible sm:hidden mx-4 "
          />
        )}
        <p className="hidden font-bold sm:inline my-2 text-base">{title}</p>
        {isUnder ? (
          <motion.div className="underline" layoutId="underline" />
        ) : null}
      </Link>
    </div>
  );
}
