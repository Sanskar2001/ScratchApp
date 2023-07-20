import React, { createContext, useContext, useReducer } from "react";
export const StateContext = createContext();
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);

export const reducer = (state, action) => {
  switch (action.type) {
    case "addIconClicked": {
      return {
        ...state,
        isSpriteBoardVisible: true,
      };
    }

    //   isSpriteBoardVisible

    case "deleteIconClicked": {
      return { ...state, isSpriteBoardVisible: false };
    }

    default:
      return state;
  }
};

export const initialState = {
  isSpriteBoardVisible: false,
};
