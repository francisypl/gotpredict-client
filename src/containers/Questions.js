import React, { useEffect } from "react";
import Cookie from "js-cookie";
import { Redirect } from "react-router-dom";
import { useImmerReducer as useReducer } from "use-immer";

import appReducer, { initialState } from "../reducers/app";
import { cookies, routes } from "../constants";
import {
  getQuestionNumber,
  getCurQuestionData,
  getIsLastQuestion,
  getUserData
} from "../selectors";
import * as actions from "../actions";
import { Header, Choices } from "../components";

function Questions() {
  const [appState, appDispatch] = useReducer(appReducer, initialState);
  const questionNumber = getQuestionNumber(appState);
  const curQuestion = getCurQuestionData(appState);
  const isLastQuestion = getIsLastQuestion(appState);
  const userData = getUserData(appState);
  const isLoaded = questionNumber && curQuestion;

  const submitSingleQuestion = answer => {
    return void actions.answerQuestion(appDispatch, {
      answer,
      questionNumber
    });
  };

  useEffect(() => {
    if (!isLoaded) {
      actions.getQuestionsData(appDispatch);
    }
  }, []);

  const userCookie = Cookie.get(cookies.USER);

  if (!userCookie) {
    return <Redirect to={routes.HOME} />;
  }
  if (!isLoaded) {
    return null; // TODO: loading
  }

  const choices = curQuestion.choices.reduce(
    (final, choice) => {
      final.ids.push(choice.id);
      final.labels.push(choice.label);
      return final;
    },
    { ids: [], labels: [] }
  );

  return (
    <div className="questions-container">
      <Header>{curQuestion.title}</Header>
      <Choices choices={choices.ids} onClick={submitSingleQuestion}>
        {choices.labels.map((label, index) => (
          <span key={`choice-${index}`}>{label}</span>
        ))}
      </Choices>
    </div>
  );
}

export default Questions;
