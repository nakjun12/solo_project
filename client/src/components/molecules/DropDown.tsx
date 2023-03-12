import type { headerType, dropDownList } from "@/lib/Context";
import DropDownList from "./DropDownList";
import cx from "classnames";
export default function DropDown({ title, dropDown }: headerType) {
  if (title === null) {
    return null;
  }

  console.log(dropDown);
  return (
    <div className="drop-down">
      <div className="mx-auto max-w-6xl">
        <div className="mx-4 lg:mx-6 font-bold relative pb-4">
          {dropDown?.map((data: dropDownList, index: number) => {
            return (
              <div
                key={`${data.title}-${index}`}
                className={cx("absolute", { invisible: data.title !== title })}
              >
                <DropDownList data={data.dropDownList} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

//abosolute로 설정
//블락으로 최상위 관리함
//그아래는 vi
//최하위는 opa
