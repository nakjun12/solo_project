import type { dropDownList, headerType } from '@/Type/typeList.d.ts';
import { useToggleMenu } from '@/lib/context/MenuContext';
import DropDownMenu from './DropDownMenu';
interface props extends headerType {
  headerheight: number | undefined;
}

export default function DropDown({
  title,
  dropDown,
  headerheight,
  isOpen,
}: props) {
  const toggleMenu = useToggleMenu();
  if (title === null || headerheight === undefined) {
    return null;
  }

  //다음에 해야할 것 서치 리스트 만들기

  //히든으로 모바일 지우기
  return (
    <nav className="hidden sm:inline inset-x-0 bg-pageBG">
      <div className="font-bold relative pb-4">
        {dropDown?.map((data: dropDownList, index: number) => {
          return (
            <DropDownMenu
              key={`${data.title}-${index}`}
              data={data}
              headerheight={headerheight}
              title={title}
            />
          );
        })}
      </div>

      {/* <div
        className={`absolute top-full inset-x-0 z-20 h-1 bg-pageBG bg-color scale-y-150`}
      ></div> */}
    </nav>
  );
}

//abosolute로 설정
//블락으로 최상위 관리함
//그아래는 vi
//최하위는 opacity
