import {
  ADD,
  ADD_NUMBER,
  SUBSTRACT,
  RESET,
  ASYNC_INCREMENT,
} from "../actionType";

export const addOne = () => ({
  type: ADD,
});

export const addNumber = (number) => ({
  type: ADD_NUMBER,
  number: number,
});

export const resetCounter = () => ({
  type: RESET,
});

export const asyncIncrement = () => ({
  type: ASYNC_INCREMENT,
});

export const substractOne = () => ({
  type: SUBSTRACT,
});
