import { useReducer, useContext, createContext } from "react";

export const SettingContext = createContext();
// initail state which will be passed to the whole component tree using the context api and we will use only single hook for whole project...

const initialState = {
  sound: true,
};

// Reducer Function ....
const settingReducer = (state, action) => {
  // console.log(state, action);
  switch (action.type) {
    case "sound":
      return { ...state, sound: !state.sound };
    default:
      console.error(
        "Unknown action. Please check your action type in the dispatch function."
      );
      return state; // Return the current state in case of an unknown action
  }
};

const SettingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(settingReducer, initialState);

  return (
    <SettingContext.Provider value={{ state, dispatch }}>
      {children}
    </SettingContext.Provider>
  );
};

const useSettingContext = () => {
  const context = useContext(SettingContext);
  if (!context) {
    throw new Error("useSettingContext must be used within an SettingProvider");
  }
  return context;
};

export { SettingProvider, useSettingContext };
