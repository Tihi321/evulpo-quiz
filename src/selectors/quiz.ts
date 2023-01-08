import isEmpty from "lodash/isEmpty";
import get from "lodash/get";
import { createSelector } from "reselect";
import { StateKeys } from "../enums/store";
import { initialState } from "../store/initialState";

export const getQuestionsState = (stateSelector: any) =>
  createSelector(stateSelector, (state: typeof initialState) =>
    get(state, StateKeys.Questions, [])
  );

export const getNumberOfQuestions = (stateSelector: any) =>
  createSelector(getQuestionsState(stateSelector), (state) => state.length);

export const getAreQuestionsReady = (stateSelector: any) =>
  createSelector(getQuestionsState(stateSelector), (state) => !isEmpty(state));
