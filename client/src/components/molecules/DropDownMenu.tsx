import type { dropDownList, headerType } from '@/Type/typeList';
import { swipeAnim } from '@/lib/Animate';
import cx from 'classnames';
import { m } from 'framer-motion';
import { Fragment, useEffect, useState } from 'react';
import DropDownList from './DropDownList';
import SearchForm from './SearchForm';
interface props extends headerType {
  data: dropDownList;
}

export default function DropDownMenu({ data, title }: props) {
  const [height, setheight] = useState<number>(10);
  const isTrue = data.title === title;
  console.log(isTrue, title, data.title);

  useEffect(() => {
    if (isTrue) setheight(60);
    else {
      setheight(10);
    }
  }, [isTrue]);
  //null에서 바뀌고나서만 작동
  //isTrue 추가해서 초기에도 변동되게함

  return (
    <Fragment>
      <div
        className={`absolute top-full inset-x-0 z-20 h-3 backdrop bg-pageBG ${
          isTrue ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transform: `scaleY(${height})` }}
      />

      <div className="relative z-30 max-w-6xl mx-auto">
        <div className={cx('absolute z-30', { invisible: !isTrue })}>
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
    </Fragment>
  );
}
