import type { title } from '@/lib/context/MenuContext';
import { useToggleMenu } from '@/lib/context/MenuContext';
import { motion } from 'framer-motion';
import Router from 'next/router';
import { IconType } from 'react-icons/lib';

export default function MenuItem({
  title,
  address,
  Icon,
  selectTitle,
  isOpen,
}: {
  title: title;
  address: string;
  Icon: IconType | null;
  selectTitle?: string | null;
  isOpen?: boolean;
}) {
  const toggleMenu = useToggleMenu();
  const isUnder = title === selectTitle;

  const toggleHandler = () => {
    console.log(title, isOpen, selectTitle, isUnder);

    if (title === 'HOME') {
      Router.push('/');
      toggleMenu(false, title);
    } else if (isUnder) {
      toggleMenu(!isOpen, title);
    } else {
      toggleMenu(true, title);
    }
  };

  return (
    <div className="relative mx-4 lg:mx-6 cursor-pointer">
      {Icon && (
        <Icon
          size={'20px'}
          className="text-2xl overflow-visible sm:hidden mx-4 "
        /> //나중에 모바일 추가
      )}
      <div
        className="hidden font-bold sm:inline my-2 text-base"
        onClick={() => toggleHandler()}
      >
        {title}
        {isUnder ? (
          <motion.div className="sm:underline" layoutId="underline" />
        ) : null}
      </div>
    </div>
  );
}
