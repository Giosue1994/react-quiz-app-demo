import { useContext } from "react";
import QUESTIONS from '../questions.js';
import QuizSummary from "./QuizSummary.jsx";
import { QuizContext } from '../store/quiz-context.jsx';
import Question from "./Question.jsx";

export default function Quiz() {
  const { items } = useContext(QuizContext);

  const activeQuestionIndex = items.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  if (quizIsComplete) {
    return <QuizSummary />;
  }


  return (
    <div id="quiz">
      <Question key={activeQuestionIndex} />
    </div>
  );
}