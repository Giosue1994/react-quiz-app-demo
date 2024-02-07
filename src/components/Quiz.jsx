import { useContext } from 'react';
import QUESTIONS from '../questions.js';
import QuizSummary from "./QuizSummary.jsx";
import { QuizContext } from '../store/quiz-context.jsx';

export default function Quiz() {
  const { items, selectedAnswer } = useContext(QuizContext);
  console.log(items);

  const activeQuestionIndex = items.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  if (quizIsComplete) {
    return <QuizSummary />;
  }

  const shufflingAnswers = [...QUESTIONS[activeQuestionIndex].answers].sort(
    () => Math.random() - 0.5
  );

  return (
    <div id="quiz">
      <div id="question">
        {/* <progress /> */}
        <p>{QUESTIONS[activeQuestionIndex].text}</p>
      </div>
      <ul id="answers">
        {shufflingAnswers.map((answer) => {
          return (
            <li key={answer} className="answer">
              <button onClick={() => selectedAnswer(answer)}>
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}