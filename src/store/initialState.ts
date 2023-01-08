import { ETheme, StateKeys } from "../enums/store";

export const initialState = {
  [StateKeys.Theme]: ETheme.Dark,
  [StateKeys.PlayerInfo]: {},
  [StateKeys.Questions]: [],
  [StateKeys.Game]: {
    questionIndex: 0,
  },
};
