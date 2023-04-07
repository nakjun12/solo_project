import type { dropDownList, headerType } from '@/Type/typeList.d.ts';
import { swipeAnim } from '@/lib/Animate';
import { useToggleMenu } from '@/lib/context/MenuContext';
import { useRect } from '@reach/rect';
import cx from 'classnames';
import { m } from 'framer-motion';
import { Fragment, useEffect, useRef, useState } from 'react';
import DropDownList from './DropDownList';
import SearchForm from './SearchForm';
interface props extends headerType {
  headerheight: number | undefined;

  data: dropDownList;
}

export default function DropDownMenu({ data, title, headerheight }: props) {
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const dropDownRect = useRect(dropDownRef);
  const [height, setheight] = useState<number>(10);
  const isTrue = data.title === title;
  useEffect(() => {
    if (dropDownRect?.height && headerheight && isTrue) {
      setheight(Math.round(dropDownRect?.height + headerheight));
    }
  }, [dropDownRect]); //null에서 바뀌고나서만 작동
  //isTrue 추가해서 초기에도 변동되게함

  useEffect(() => {
    if (!isTrue) {
      setheight(Math.round(headerheight || 45));
      // console.log("headr", headerheight);
    }
    if (isTrue) {
      if (dropDownRect?.height && headerheight) {
        setheight(Math.round(dropDownRect?.height + headerheight));
        // console.log("headr2", dropDownRect?.height + headerheight);
      }
    }
  }, [isTrue]);

  const toggleMenu = useToggleMenu();
  return (
    <Fragment>
      <div
        className={`absolute top-full inset-x-0 z-20 h-3 backdrop bg-pageBG ${
          isTrue ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transform: `scaleY(${height})` }}
      />

      <div className="relative z-30 max-w-6xl mx-auto">
        <div
          className={cx('absolute z-30', { invisible: !isTrue })}
          ref={ref => (dropDownRef.current = ref)}
        >
          <m.div
            initial="hide"
            animate={isTrue ? 'show' : 'hide'}
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

      <div
        className="fixed inset-0 z-10 blur-div"
        onClick={() => toggleMenu(false)}
      ></div>
    </Fragment>
  );
}
