import type { dropDownList, headerType } from '@/Type/typeList';
import DropDownMenu from './DropDownMenu';
interface props extends headerType {}

export default function DropDown({ title, dropDown }: props) {
  if (title === null) {
    return null;
  }

  //다음에 해야할 것 서치 리스트 만들기

  //히든으로 모바일 지우기
  return (
    <nav className="hidden sm:inline inset-x-0 bg-pageBG">
      <div className="font-bold relative">
        {dropDown?.map((data: dropDownList, index: number) => {
          return (
            <DropDownMenu
              key={`${data.title}-${index}`}
              data={data}
              title={title}
            />
          );
        })}
      </div>
    </nav>
  );
}

//abosolute로 설정
//블락으로 최상위 관리함
//그아래는 vi
//최하위는 opacity
