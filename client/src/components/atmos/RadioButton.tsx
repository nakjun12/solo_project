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

  const levels = [
    { label: "전체", value: "전체" },
    { label: "초급", value: "초급" },
    { label: "중급", value: "중급" },
    { label: "고급", value: "고급" },
  ];

  return (
    <div className="flex justify-center my-4 items-center space-x-4">
      {levels.map((option) => (
        <label
          key={option.value}
          className="inline-flex items-center cursor-pointer"
        >
          <input
            type="radio"
            value={option.value}
            checked={level === option.value}
            onChange={handleLevelChange}
          />
          <span className="ml-2">{option.label}</span>
        </label>
      ))}
    </div>
  );
}
