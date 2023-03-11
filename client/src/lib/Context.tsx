import { type } from "os";
import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type headerType = {
  isOpen: boolean;
  title: string | null;
};

type initialContext = {
  context: headerType;
  setContext: Dispatch<SetStateAction<headerType>>;
};

const initialContext: initialContext = {
  context: {
    isOpen: true,
    title: null,
  },
  setContext: () => null,
};

//초기값넣어줌
const SiteContext = createContext(initialContext);
//내려받을 준비함
const SiteContextProvider = ({ children }: { children?: JSX.Element }) => {
  const [context, setContext] = useState<headerType>({
    isOpen: true,
    title: null,
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

  async function toggleMenu(state: boolean, title: string | null = null) {
    setContext((prevState: headerType) => {
      return {
        isOpen: state,
        title: title,
      };
    });
  }
  return toggleMenu;
}

export { SiteContextProvider, useSiteContext, useToggleMenu };
