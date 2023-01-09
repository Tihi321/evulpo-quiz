import get from "lodash/get";
import { createSelector } from "reselect";
import { StateKeys } from "../enums/store";
import { initialState } from "../store/initialState";

const getPlayerInfoState = (stateSelector: any) =>
  createSelector(stateSelector, (state: typeof initialState) =>
    get(state, StateKeys.PlayerInfo, {})
  );

export const getPlayerName = (stateSelector: any) =>
  createSelector(getPlayerInfoState(stateSelector), (state) => get(state, ["name"]));

export const getPlayerId = (stateSelector: any) =>
  createSelector(getPlayerInfoState(stateSelector), (state) => get(state, ["id"]));
