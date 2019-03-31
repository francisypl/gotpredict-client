import md5 from "md5";
import Cookies from "js-cookie";

import { cookies } from "../constants";
import * as types from "./types";
import mockQuestionsData from "../mocks/questions";

export function createUserProfile(dispatch, { name, email, house }) {
  const payload = {
    name,
    email,
    house,
    id: md5(email)
  };
  Cookies.set(cookies.USER, JSON.stringify(payload));
  return void dispatch({
    type: types.CREATE_NEW_PROFILE,
    payload
  });
}

export function getQuestionsData(dispatch) {
  return dispatch({
    type: types.GET_QUESTIONS_DATA,
    payload: mockQuestionsData
  });
}

export function answerQuestion(dispatch, { answer, questionNumber }) {
  return dispatch({
    type: types.ANSWER_QUESTION,
    payload: {
      index: questionNumber - 1,
      answer
    }
  });
}
