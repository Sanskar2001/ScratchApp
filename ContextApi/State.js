import React, { createContext, useContext, useReducer } from "react";
export const StateContext = createContext();
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const StateConsumer = StateContext.Consumer;
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

    case "actionDropped": {
      const arr = state.droppedActions;
      arr.push(action.payload);
      return {
        ...state,
        droppedActions: arr,
      };
    }

    case "deleteAction": {
      const filteredArray = action.payload.filter(
        (item) => (item) => item !== action.payload
      );
      console.log("filtered Array=" + filteredArray);
      return {
        ...state,
        droppedActions: filteredArray,
      };
    }

    case "setDroppedActions": {
      return {
        ...state,
        droppedActions: action.payload,
      };
    }

    case "setSpriteAction": {
      console.log("sprite changed");
      return {
        ...state,
        selectedSprite: action.payload,
      };
    }

    case "addSprite": {
      return {
        ...state,
        spriteRefArr: [...state.spriteRefArr, action.payload],
      };
    }

    case "addCard": {
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };
    }

    case "removeSprite": {
    }

    case "removeCard": {
      const arr = state.cards.filter(
        (item, index) => item.id !== action.payload
      );
      console.log("Inside state" + arr);
      return {
        ...state,
        cards: arr,
      };
    }

    case "addAnimatedSprite": {
      return {
        ...state,
        animatedSprites: [...state.animatedSprites, action.payload],
      };
    }

    case "removeAnimatedSprite": {
      console.log(state.animatedSprites);
      return {
        ...state,
        animatedSprites: state.animatedSprites.filter(
          (item, index) => item.id !== action.payload
        ),
      };
    }

    default:
      return state;
  }
};

export const initialState = {
  isSpriteBoardVisible: false,
  droppedActions: [],
  selectedSprite: "action0",
  spriteRefArr: [],
  cards: [],
  animatedSprites: [],
};
