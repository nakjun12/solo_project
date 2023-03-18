import type { headerType, dropDownList } from "@/lib/Context";
import DropDownList from "./DropDownList";
import cx from "classnames";
import { useRef, useState, useEffect, Fragment } from "react";
import { useRect } from "@reach/rect";
import { m } from "framer-motion";
import { swipeAnim } from "@/lib/Animate";
import SearchForm from "./SearchForm";

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

  //다음에 해야할 것 서치 리스트 만들기
  return (
    <nav className="inset-x-0 bg-pageBG">
      <div className="font-bold relative pb-4">
        {dropDown?.map((data: dropDownList, index: number) => {
          const isTrue = data.title === title;
          const dropDownRef = useRef<HTMLDivElement | null>(null);
          const dropDownRect = useRect(dropDownRef);
          const [height, setheight] = useState<number>(10);

          useEffect(() => {
            if (dropDownRect?.height && headerheight && isTrue) {
              setheight(Math.round(dropDownRect?.height + headerheight));
            }
          }, [dropDownRect]); //null에서 바뀌고나서만 작동
          //isTrue 추가해서 초기에도 변동되게함

          useEffect(() => {
            if (!isTrue) {
              setheight(Math.round(headerheight));
              // console.log("headr", headerheight);
            }
            if (isTrue) {
              if (dropDownRect?.height && headerheight) {
                setheight(Math.round(dropDownRect?.height + headerheight));
                // console.log("headr2", dropDownRect?.height + headerheight);
              }
            }
          }, [isTrue]); //트루값이 변할때마다 작동

          return (
            <Fragment key={`${data.title}-${index}`}>
              <div
                className={`absolute top-full inset-x-0 z-20 h-3 backdrop bg-pageBG ${
                  isTrue ? "opacity-100" : "opacity-0"
                }`}
                style={{ transform: `scaleY(${height})` }}
              />

              <div className="relative z-30 max-w-6xl mx-auto">
                <div
                  className={cx("absolute z-30", { invisible: !isTrue })}
                  ref={(ref) => (dropDownRef.current = ref)}
                >
                  <m.div
                    initial="hide"
                    animate={isTrue ? "show" : "hide"}
                    variants={swipeAnim}
                  >
                    {data.dropDownList ? (
                      <DropDownList
                        isUp={data.title === title}
                        data={data.dropDownList}
                      />
                    ) : (
                      <SearchForm />
                    )}
                  </m.div>
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
