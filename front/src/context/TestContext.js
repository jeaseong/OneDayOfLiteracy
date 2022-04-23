import React, { createContext, useReducer } from "react";

const TestContext = createContext(null);

const ACTION_TYPES = {
  setTest: "setTest",
  setAnswer: "setAnswer",
};

const TestReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.setTest:
      return action.payload;
    default:
      return state;
  }
};

const AnswerReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.setAnswer:
      return [...state, action.payload];
    default:
      return state;
  }
};

const TestProvider = ({ children }) => {
  const initTest = [];
  const initAnswer = [];
  const [test, testDispatch] = useReducer(TestReducer, initTest);
  const [answer, answerDispatch] = useReducer(AnswerReducer, initAnswer);

  const store = {
    test,
    answer,
    testDispatch,
    answerDispatch,
  };
  return <TestContext.Provider value={store}>{children}</TestContext.Provider>;
};

export { TestProvider, TestContext };
