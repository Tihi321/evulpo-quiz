import get from "lodash/get";
import { createSelector } from "reselect";
import { StateKeys } from "../enums/store";
import { initialState } from "../store/initialState";

export const getThemeWith = (stateSelector: any) =>
  createSelector(stateSelector, (state: typeof initialState) => get(state, StateKeys.Theme));
