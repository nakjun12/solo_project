import React from "react";
import cx from "classnames";
import type { dropDownValue } from "@/lib/Context";
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
              { "drop-downEvent": isUp },
              { "drop-noEvent": !isUp }
            )}
          >
            {data.name}
            <span>{data.count}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default DropDownList;
