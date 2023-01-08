import isEqual from "lodash/isEqual";
import get from "lodash/get";
import { createSelector } from "reselect";
import { EAnswerInfo, StateKeys } from "../enums/store";
import { initialState } from "../store/initialState";

import { getNumberOfQuestions } from "./quiz";

export const getQuestionIndex = (stateSelector: any) =>
  createSelector(stateSelector, (state: typeof initialState) =>
    get(state, StateKeys.QuestionIndex, 0)
  );

export const getQuestionNumber = (stateSelector: any) =>
  createSelector(getQuestionIndex(stateSelector), (index) => index + 1);

export const getIsLastQuestion = (stateSelector: any) =>
  createSelector(
    getQuestionNumber(stateSelector),
    getNumberOfQuestions(stateSelector),
    (index, numberOfQuestions) => isEqual(index, numberOfQuestions)
  );

export const getPlayerScore = (stateSelector: any) =>
  createSelector(stateSelector, (state: typeof initialState) =>
    get(state, StateKeys.PlayerScore, 0)
  );

export const getAnswerInfoState = (stateSelector: any) =>
  createSelector(stateSelector, (state: typeof initialState) =>
    get(state, StateKeys.AnswerInfoState, EAnswerInfo.Hidden)
  );
