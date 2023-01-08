import { EAnswerInfo, ETheme, StateKeys } from "../enums/store";

export const initialState = {
  [StateKeys.Theme]: ETheme.Dark,
  [StateKeys.PlayerInfo]: {},
  [StateKeys.Questions]: [],
  [StateKeys.QuestionIndex]: 0,
  [StateKeys.AnswerInfoState]: EAnswerInfo.Hidden,
};
