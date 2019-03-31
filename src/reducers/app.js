import * as types from "../actions/types";

export const initialState = {};

export default function appReducer(draft, action) {
  switch (action.type) {
    case types.RESET:
      return initialState;
    case types.CREATE_NEW_PROFILE:
      draft.user = action.payload;
      return draft;
    case types.GET_QUESTIONS_DATA:
      draft.questions = {
        ...action.payload,
        index: 0
      };
      return draft;
    case types.ANSWER_QUESTION:
      if (!draft.answers) {
        draft.answers = draft.questions.questions.map(() => null);
      }
      draft.answers[action.payload.index] = action.payload.answer;
      draft.questions.index += 1;
      return draft;
  }
}
