import React from "react";
import cx from "classnames";
import type { dropDownValue } from "@/lib/Context";
const DropDownList: React.FC<{ data: dropDownValue[]; isUp: boolean }> = ({
  data,
  isUp,
}) => {
  return (
    <div>
      {data.map((data, index) => {
        return (
          <div
            key={`${data.name}-${index}`}
            className={cx(
              { "drop-downEvent": isUp },
              { "drop-noEvent": !isUp }
            )}
          >
            {data.name}
            <span>{data.count}</span>
          </div>
        );
      })}
    </div>
  );
};

export default DropDownList;
