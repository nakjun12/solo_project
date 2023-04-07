import type { dropDownList, headerType, title } from '@/Type/typeList.d.ts';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type initialContext = {
  context: headerType;
  setContext: Dispatch<SetStateAction<headerType>>;
  toggleState: boolean;
  toggle: () => void;
};
// 필요한 값이있다면 context 추가할것

const dropDownDummy: dropDownList[] = [
  {
    title: '퀴즈',
    dropDownList: [{ name: '프론트엔드', address: '/quiz' }],
  },
  {
    title: '화상면접',
    dropDownList: [{ name: '기술질문', address: '/video' }],
  },
  { title: 'Search' },
];

const initialContext: initialContext = {
  //초기값
  context: {
    isOpen: true,
    title: null,
    dropDown: null,
  },
  setContext: () => null,
  toggleState: false, //추가
  toggle: () => {},
};

//초기값넣어줌
const SiteContext = createContext(initialContext);
//내려받을 준비함
const SiteContextProvider = ({ children }: { children?: JSX.Element }) => {
  const [context, setContext] = useState<headerType>({
    isOpen: false,
    title: null,
    dropDown: dropDownDummy,
  });
  const [toggleState, setToggleState] = useState<boolean>(false);
  const toggle = () => {
    setToggleState(!toggleState);
  };

  return (
    <SiteContext.Provider
      value={{
        context,
        setContext,
        toggleState,
        toggle,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

function startContext() {
  const { toggleState, toggle } = useContext(SiteContext);
  return [toggleState, toggle];
} //현재상황 보여줌

//수정해주는 토글
function useToggleMenu() {
  const {
    context: { isOpen, title }, //값을사용할지 고민
    setContext,
  } = useContext(SiteContext);

  async function toggleMenu(state: boolean, title: title | null = null) {
    setContext((prevState: headerType) => {
      return {
        ...prevState,
        isOpen: state,
        title: title,
      };
    });
  }
  return toggleMenu;
}

function useSiteContext() {
  const { context } = useContext(SiteContext);
  return context;
}

const useToggleStart = () => {
  const { toggle } = useContext(SiteContext);

  return toggle;
};

export {
  SiteContextProvider,
  startContext,
  useSiteContext,
  useToggleMenu,
  useToggleStart
};

//헤더 관련과 메뉴가있음
