import { useState, useContext, createContext } from "react";

const useStore = () => {
  const [shortcuts, setShortcuts] = useState({});

  return {
    shortcuts,
    setShortcuts: (key, value) => {
      setShortcuts((prevState) => ({
        ...prevState,
        [key]: value,
      }));
    },
  };
};

const StoreContext = createContext({});

export const StoreContextProvider = ({ children }) => (
  <StoreContext.Provider value={useStore()}>{children}</StoreContext.Provider>
);

export const useShortcuts = () => useContext(StoreContext).shortcuts;
export const useSetShortcuts = () => useContext(StoreContext).setShortcuts;
