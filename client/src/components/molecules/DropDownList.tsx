import type { dropDownValue } from '@/Type/typeList';
import { useToggleMenu } from '@/lib/context/MenuContext';
import cx from 'classnames';
import { useRouter } from 'next/router';
import React from 'react';
const DropDownList: React.FC<{ data: dropDownValue[]; isUp: boolean }> = ({
  data,
  isUp,
}) => {
  const toggleMenu = useToggleMenu();
  const router = useRouter();
  const menuHandler = (address: string) => {
    router.push(`${address}`);
    toggleMenu(false);
  };
  return (
    <ul className="mt-12 ml-4">
      {data.map((data, index) => {
        return (
          <li
            key={`${data.name}-${index}`}
            className={cx(
              { 'drop-downEvent': isUp },
              { 'drop-noEvent': !isUp },
            )}
          >
            <div className="flex items-center">
              <button
                onClick={() => {
                  menuHandler(data.address);
                }}
                className="font-bold text-lg text-center"
              >
                {data.name}
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default DropDownList;
