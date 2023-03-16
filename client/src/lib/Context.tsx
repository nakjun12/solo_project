import { type } from "os";
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
  dropDown: dropDownList[] | null;
};

type initialContext = {
  context: headerType;
  setContext: Dispatch<SetStateAction<headerType>>;
};
// 필요한 값이있다면 context 추가할것

const initialContext: initialContext = {
  context: {
    isOpen: true,
    title: null,
    dropDown: null,
  },
  setContext: () => null,
};

//초기값넣어줌
const SiteContext = createContext(initialContext);
//내려받을 준비함
const SiteContextProvider = ({ children }: { children?: JSX.Element }) => {
  const [context, setContext] = useState<headerType>({
    isOpen: false,
    title: null,
    dropDown: [
      {
        title: "국내",
        dropDownList: [
          { count: 4, name: "트로트" },
          { count: 3, name: "힙합" },
        ],
      },
      { title: "해외", dropDownList: [{ count: 3, name: "Pop송" }] },
      { title: "Search" },
    ],
  });

  return (
    <SiteContext.Provider
      value={{
        context,
        setContext,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

function useSiteContext() {
  const { context } = useContext(SiteContext);
  return context;
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

export { SiteContextProvider, useSiteContext, useToggleMenu };
