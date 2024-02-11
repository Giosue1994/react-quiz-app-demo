import { useContext } from "react";
import summaryLogo from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";
import { QuizContext } from "../store/quiz-context.jsx";

export default function QuizSummary() {
  const { items } = useContext(QuizContext);

  const skippedAnswers = items.filter((answer) => answer === null);
  const correctAnswers = items.filter((answer, index) => answer === QUESTIONS[index].answers[0]);
  
  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / items.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / items.length) * 100
  );
  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  console.log(skippedAnswers);
  console.log(correctAnswers);
  console.log(wrongAnswersShare);

  return (
    <div id="summary">
      <img src={summaryLogo} alt="Cup" />
      <h2>Quiz completed</h2>

      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>

      <ol>
        {items.map((answer, index) => {
          let cssClasses = "user-answer";

          if (answer === null) {
            cssClasses += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClasses += " correct";
          } else {
            cssClasses += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClasses}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
