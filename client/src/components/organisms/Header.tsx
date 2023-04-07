import type { MenuItemType, headerType } from '@/Type/typeList.d.ts';
import { useSiteContext, useToggleMenu } from '@/lib/context/MenuContext';
import { useRect } from '@reach/rect';
import { RefObject, useRef } from 'react';
import { IoMdHome } from 'react-icons/Io';
import { GiHamburgerMenu } from 'react-icons/gi';
import useWindowWidth from '../atmos/useWindowWidth';
import DarkModeSwitch from '../molecules/DarkModeswitch';
import DropDown from '../molecules/DropDown';
import MenuItem from '../molecules/MenuItem';
import MobileDropDown from '../molecules/MobileDropDown';
import Search from '../molecules/Search';
export default function Header() {
  const headerRef = useRef() as RefObject<HTMLDivElement>;
  const headerRect = useRect(headerRef);
  const toggleMenu = useToggleMenu();
  const { isOpen, title, dropDown }: headerType = useSiteContext();
  const windowWidth = useWindowWidth();

  const menuItems: MenuItemType[] = [
    {
      title: 'HOME',
      address: '/',
      Icon: IoMdHome,
    },
    {
      title: '퀴즈',
      address: '/quiz',
      Icon: GiHamburgerMenu,
    },
    {
      title: '화상면접',
      address: '/video',
      Icon: null,
    },
  ];

  return (
    <>
      <div className="relative z-30 bg-pageBG">
        <header className="max-w-6xl headerStyle" ref={headerRef}>
          <div className="flex relative">
            {menuItems &&
              menuItems.map((item: MenuItemType) => (
                <MenuItem
                  key={item.title}
                  title={item.title}
                  address={item.address}
                  Icon={item.Icon}
                  selectTitle={title}
                  isOpen={isOpen}
                />
              ))}
          </div>

          <div className="flex items-center">
            <Search title={title} />
            <DarkModeSwitch />
          </div>
        </header>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 z-10 blur-div"
          onClick={() => toggleMenu(false)}
        ></div>
      )}

      {isOpen &&
        windowWidth >= 640 &&
        title !== 'HOME' && ( // 이방식을 안쓰는 이유는 부드럽게 넘기지 못해서 이다.
          <>
            <DropDown
              title={title}
              dropDown={dropDown}
              headerheight={headerRect?.height}
              isOpen={isOpen}
            />
          </>
        )}
      {windowWidth < 640 && (
        <>
          <MobileDropDown dropDown={dropDown} isOpen={isOpen} />
        </>
      )}
    </>
  );
}

//relatvie는 각자의 공간을 존중해준다.
//relative fixed인 경우 fixed는 relative 위로 올 수 있다 z-index가 높으면
//z-index가 높아도 fixed가 위에 쌓인다.
//메뉴가 아닌 드랍다운에서 넘어가도록 수정
