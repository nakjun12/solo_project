import Link from "next/link";
import { IconType } from "react-icons/lib";
import { useToggleMenu } from "@/lib/Context";
import type { title } from "@/lib/Context";
export default function MenuItem({
  title,
  address,
  Icon,
}: {
  title: title;
  address: string;
  Icon?: IconType;
}) {
  const toggleMenu = useToggleMenu();

  return (
    <>
      <Link
        href={address}
        className="mx-4 lg:mx-6 hover:text-amber-600"
        onClick={() => toggleMenu(false)}
        onMouseOver={() => toggleMenu(true, title)}
      >
        {Icon && (
          <Icon
            size={"20px"}
            className="text-2xl overflow-visible sm:hidden mx-4 "
          />
        )}
        <p className="hidden font-bold sm:inline my-2 text-base">{title}</p>
      </Link>
    </>
  );
}
