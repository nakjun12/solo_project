import type { title } from "@/lib/context/MenuContext";
import { IconType } from "react-icons/lib";

export interface Quiz {
  id: number;
  question: string;
  answer: string;
  level: string;
}

export interface MenuItemType {
  title: title;
  address: string;
  Icon: IconType | null;
}

export type Level = "전체" | "고급" | "중급" | "초급";
