import type { title } from '@/lib/context/MenuContext';
import { IconType } from 'react-icons/lib';

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

export type Level = '전체' | '고급' | '중급' | '초급';

export type title = '퀴즈' | '화상면접' | 'HOME' | 'Search' | 'Mobile';

export type dropDownValue = {
  name: string;
  address: string;
};

export type dropDownList = {
  title: title | null;
  dropDownList?: dropDownValue[];
};

export type headerType = {
  isOpen?: boolean;
  title: title | null;
  dropDown?: dropDownList[] | null; //목록
};
