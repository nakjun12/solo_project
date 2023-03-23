import { Dispatch, SetStateAction, useState } from "react";
import type { Level } from "@/Type/typeList";

type Props = {
  level: Level;
  setlevel: Dispatch<SetStateAction<Level>>;
};

export default function RadioButton({ level, setlevel }: Props) {
  const handleLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setlevel(event.target.value as Level);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="전체"
          checked={level === "전체"}
          onChange={handleLevelChange}
        />
        전체
      </label>
      <label>
        <input
          type="radio"
          value="초급"
          checked={level === "초급"}
          onChange={handleLevelChange}
        />
        초급
      </label>
      <label>
        <input
          type="radio"
          value="중급"
          checked={level === "중급"}
          onChange={handleLevelChange}
        />
        중급
      </label>
      <label>
        <input
          type="radio"
          value="고급"
          checked={level === "고급"}
          onChange={handleLevelChange}
        />
        고급
      </label>
    </div>
  );
}
