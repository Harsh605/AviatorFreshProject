import { useReducer, useContext, createContext } from "react";

export const BetContext = createContext();
// initail state which will be passed to the whole component tree using the context api and we will use only single hook for whole project...

const initialState = {
  gameStarted: false,
  isBet1: false,
  isBet2: false,
  extraBetAmount1: 10.0,
  extraBetAmount2: 10.0,
  withdrawn1: false,
  withdrawn2: false,
  cashOut1: 1.0,
  cashOut2: 1.0,
  autoCashOut1: false,
  autoCashOut2: false,
  rounds1: 10,
  rounds2: 10,
  cashDecrease1: null,
  cashDecrease2: null,
  cashIncrease1: null,
  cashIncrease2: null,
  planeCrashed: false,
  planeValue: 0,
  canBet: true,
};

// Reducer Function ....
const betReducer = (state, action) => {
  switch (action.type) {
    case "planeCrashed":
      return {
        ...state,
        planeCrashed: action.payload,
      };
    case "incExtra1":
      return {
        ...state,
        extraBetAmount1: !action.payload
          ? state.extraBetAmount1 + 10.0
          : action.payload,
      };
    case "decExtra1":
      return {
        ...state,
        extraBetAmount1: !action.payload
          ? state.extraBetAmount1 - 10.0
          : action.payload,
      };

    case "incExtra2":
      return {
        ...state,
        extraBetAmount2: !action.payload
          ? state.extraBetAmount2 + 10.0
          : action.payload,
      };
    case "decExtra2":
      return {
        ...state,
        extraBetAmount2: !action.payload
          ? state.extraBetAmount2 - 10.0
          : action.payload,
      };
    case "withdrawn1":
      return { ...state, withdrawn1: action.payload };
    case "withdrawn2":
      return { ...state, withdrawn2: action.payload };
    case "isBet1":
      return { ...state, isBet1: action.payload };
    case "isBet2":
      return { ...state, isBet2: action.payload };

    case "autoCashOut1":
      return {
        ...state,
        autoCashOut1: action.payload,
      };
    case "autoCashOut2":
      return {
        ...state,
        autoCashOut2: action.payload,
      };
    case "rounds1":
      return {
        ...state,
        rounds1: action.payload,
      };
    case "rounds2":
      return {
        ...state,
        rounds2: action.payload,
      };
    case "cashDecrease1":
      return {
        ...state,
        cashDecrease1: action.payload,
      };
    case "cashDecrease2":
      return {
        ...state,
        cashDecrease2: action.payload,
      };
    case "cashIncrease1":
      return {
        ...state,
        cashIncrease1: action.payload,
      };
    case "cashIncrease2":
      return {
        ...state,
        cashIncrease2: action.payload,
      };
    case "cashOut1":
      return {
        ...state,
        cashOut1: action.paylaod,
      };
    case "cashOut2":
      return {
        ...state,
        cashOut2: action.paylaod,
      };
    case "gameStarted":
      return {
        ...state,
        gameStarted: action.payload,
      };
    case "planeValue":
      return {
        ...state,
        planeValue: action.payload,
      };
    case "canBet":
      return {
        ...state,
        canBet: action.payload,
      };
    default:
      console.error(
        "Unknown action. Please check your action type in the dispatch function."
      );
      return state; // Return the current state in case of an unknown action
  }
};

const BetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(betReducer, initialState);

  return (
    <BetContext.Provider value={{ state, dispatch }}>
      {children}
    </BetContext.Provider>
  );
};

const useBetContext = () => {
  const context = useContext(BetContext);
  if (!context) {
    throw new Error("useBetContext must be used within an BetProvider");
  }
  return context;
};

export { BetProvider, useBetContext };
