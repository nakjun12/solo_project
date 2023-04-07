import type { dropDownValue } from '@/Type/typeList.d.ts';
import cx from 'classnames';
import Link from 'next/link';
import React from 'react';
const DropDownList: React.FC<{ data: dropDownValue[]; isUp: boolean }> = ({
  data,
  isUp,
}) => {
  return (
    <ul>
      {data.map((data, index) => {
        return (
          <li
            key={`${data.name}-${index}`}
            className={cx(
              { 'drop-downEvent': isUp },
              { 'drop-noEvent': !isUp }
            )}
          >
            <Link href={data.address}>{data.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DropDownList;
