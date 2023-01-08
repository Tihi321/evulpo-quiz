import get from "lodash/get";
import { createSelector } from "reselect";
import { StateKeys } from "../enums/store";
import { initialState } from "../store/initialState";

const getGameState = (stateSelector: any) =>
  createSelector(stateSelector, (state: typeof initialState) => get(state, StateKeys.Game, {}));

export const getQuestionIndex = (stateSelector: any) =>
  createSelector(getGameState(stateSelector), (state) => get(state, ["questionIndex"]));

export const getQuestionNumber = (stateSelector: any) =>
  createSelector(getQuestionIndex(stateSelector), (index) => index + 1);
