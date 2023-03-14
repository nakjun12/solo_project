import type { headerType, dropDownList } from "@/lib/Context";
import DropDownList from "./DropDownList";
import cx from "classnames";
import { useRef, useState, useEffect, Fragment } from "react";
import { useRect } from "@reach/rect";

interface props extends headerType {
  headerheight: number | undefined;
}

export default function DropDown({
  title,
  dropDown,
  headerheight,
  isOpen,
}: props) {
  if (title === null || headerheight === undefined) {
    return null;
  }

  return (
    <nav className="inset-x-0 bg-pageBG">
      <div className="font-bold relative pb-4">
        {dropDown?.map((data: dropDownList, index: number) => {
          const isTrue = data.title === title;
          const dropDownRef = useRef<HTMLDivElement | null>(null);
          const dropDownRect = useRect(dropDownRef);
          const [height, setheight] = useState<number>(40);

          useEffect(() => {
            if (dropDownRect?.height && headerheight) {
              setheight(Math.round(dropDownRect?.height + headerheight));
            }
            console.log("하이");
          }, [dropDownRect]); //null에서 바뀌고나서만 작동

          useEffect(() => {
            if (!isTrue) {
              setheight(Math.round(headerheight));
            }
            if (isTrue) {
              if (dropDownRect?.height && headerheight) {
                setheight(Math.round(dropDownRect?.height + headerheight));
              }
            }
            console.log("방가");
          }, [isTrue]); //트루값이 변할때마다 작동

          console.log(height);
          console.log(isOpen);
          return (
            <Fragment key={`${data.title}-${index}`}>
              <div
                className={`absolute inset-x-0 z-20 h-3 bg-pageBG ${
                  isTrue ? "opacity-100" : "opacity-0"
                }`}
                style={{ transform: `scaleY(${height})` }}
              />

              <div className="relative z-30 max-w-6xl mx-auto">
                <div
                  className={cx("absolute z-30", { invisible: !isTrue })}
                  ref={(ref) => (dropDownRef.current = ref)}
                >
                  <DropDownList
                    isUp={data.title === title}
                    data={data.dropDownList}
                  />
                </div>
              </div>
              <div className="fixed inset-0 z-10 blur-div"></div>
            </Fragment>
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
//최하위는 opa
