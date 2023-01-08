import get from "lodash/get";
import toString from "lodash/toString";
import { createSelector } from "reselect";
import { StateKeys } from "../enums/store";
import { initialState } from "../store/initialState";

const getPlayerInfoState = (stateSelector: any) =>
  createSelector(stateSelector, (state: typeof initialState) =>
    get(state, StateKeys.PlayerInfo, {})
  );

export const getPlayerScore = (stateSelector: any) =>
  createSelector(getPlayerInfoState(stateSelector), (state) => toString(get(state, ["score"], 0)));
