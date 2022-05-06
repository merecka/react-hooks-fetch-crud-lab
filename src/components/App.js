import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  function handleQuestionsFetch(questions) {
    setQuestions(questions);
  }

  function handleNewQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestions={handleNewQuestion}/> : <QuestionList getQuestions={handleQuestionsFetch} questions={questions}/>}
    </main>
  );
}

export default App;
