import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import QuestionItem from "./QuestionItem";


function QuestionList({getQuestions, questions}) {

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((questions) => getQuestions(questions));
  }, []);

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => (
          <QuestionItem key={question.id} question={question} />
        ))}</ul>
    </section>
  );
}

export default QuestionList;
