import React from "react";

import type { dropDownValue } from "@/lib/Context";
const DropDownList: React.FC<{ data: dropDownValue[] }> = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((data, index) => {
        return (
          <div key={`${data.name}-${index}`}>
            {data.name}
            <span>{data.count}</span>
          </div>
        );
      })}
    </div>
  );
};

export default DropDownList;
