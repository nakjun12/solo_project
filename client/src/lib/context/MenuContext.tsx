import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

export type title = "국내" | "해외" | "HOME" | "Search";

export type dropDownValue = {
  count: number;
  name: string;
};

export type dropDownList = {
  title: title | null;
  dropDownList?: dropDownValue[];
};

export type headerType = {
  isOpen?: boolean;
  title: title | null;
  dropDown: dropDownList[] | null; //목록
};

type initialContext = {
  context: headerType;
  setContext: Dispatch<SetStateAction<headerType>>;
  toggleState: boolean;
  toggle: () => void;
};
// 필요한 값이있다면 context 추가할것

const dropDownDummy: dropDownList[] = [
  {
    title: "국내",
    dropDownList: [
      { count: 4, name: "트로트" },
      { count: 3, name: "힙합" },
    ],
  },
  { title: "해외", dropDownList: [{ count: 3, name: "Pop송" }] },
  { title: "Search" },
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
  useSiteContext,
  useToggleMenu,
  useToggleStart,
  startContext,
};

//헤더 관련과 메뉴가있음
