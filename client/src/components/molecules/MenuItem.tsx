import Link from "next/link";
import { IconType } from "react-icons/lib";

export default function MenuItem({
  title,
  address,
  Icon,
}: {
  title: string;
  address: string;
  Icon: IconType;
}) {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
        <Icon
          size={"20px"}
          className="text-2xl overflow-visible sm:hidden mx-4 "
        />
        <p className="hidden font-bold sm:inline my-2 text-base">{title}</p>
      </Link>
    </div>
  );
}