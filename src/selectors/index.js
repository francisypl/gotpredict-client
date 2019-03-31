function getQuestions(state) {
  return state && state.questions;
}

function getQuestionsData(state) {
  const questions = getQuestions(state);
  return questions && questions.questions;
}

export function getQuestionNumber(state) {
  return getQuestions(state) && state.questions.index + 1;
}

export function getCurQuestionData(state) {
  const allQuestions = getQuestionsData(state);
  const curIndex = getQuestionNumber(state) - 1;
  return allQuestions && allQuestions[curIndex];
}

export function getIsLastQuestion(state) {
  const allQuestions = getQuestionsData(state);
  const curIndex = getQuestionNumber(state);
  return !!allQuestions && allQuestions.length === curIndex;
}

export function getUserData(state) {
  return state.user;
}
