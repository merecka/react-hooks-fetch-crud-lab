import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import QuestionItem from "./QuestionItem";


function QuestionList({getQuestions, questions, deleteQuestion, changeAnswer}) {

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((questions) => getQuestions(questions));
  }, []);

  function handleDelete(question) {
      deleteQuestion(question);
  }

  function handleAnswerChange(updatedQuestion) {
    changeAnswer(updatedQuestion);
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => (
          <QuestionItem key={question.id} question={question} onDeleteQuestion={handleDelete} onAnswerChange={handleAnswerChange} />
        ))}</ul>
    </section>
  );
}

export default QuestionList;
