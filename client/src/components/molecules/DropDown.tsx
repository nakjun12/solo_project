import type { headerType, dropDownList } from "@/lib/Context";
import DropDownList from "./DropDownList";
import cx from "classnames";
import { useRef } from "react";
import { useRect } from "@reach/rect";

export default function DropDown({ title, dropDown }: headerType) {
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const dropDownRect = useRect(dropDownRef);
  console.log(dropDownRect);
  console.log(dropDownRef);
  console.log(title);
  if (title === null) {
    return null;
  }
  return (
    <div className="drop-down">
      <div className="mx-auto max-w-6xl">
        <div className="mx-4 lg:mx-6 font-bold relative pb-4">
          {dropDown?.map((data: dropDownList, index: number) => {
            const isTrue = data.title !== title;
            return (
              <div
                key={`${data.title}-${index}`}
                className={cx("absolute", { invisible: !isTrue })}
                ref={isTrue ? (ref) => (dropDownRef.current = ref) : null}
              >
                <DropDownList
                  isUp={data.title === title}
                  data={data.dropDownList}
                />
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
