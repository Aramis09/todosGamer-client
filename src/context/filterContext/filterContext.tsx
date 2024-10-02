import {
  createContext,
  useContext,
  useState,
  SetStateAction,
  Dispatch,
} from "react";

interface State {
  setStatePlaceSelected: Dispatch<SetStateAction<string | undefined>>;
  statePlaceSelected: string | undefined;
}
const initState = {
  setStatePlaceSelected: () => {},
  statePlaceSelected: undefined,
};
const filterContext = createContext<State>(initState);

export const useFilterContext = () => useContext(filterContext);

export const ProvicerFilterContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [statePlaceSelected, setStatePlaceSelected] = useState<string>();

  return (
    <filterContext.Provider
      value={{
        setStatePlaceSelected,
        statePlaceSelected,
      }}
    >
      {children}
    </filterContext.Provider>
  );
};
