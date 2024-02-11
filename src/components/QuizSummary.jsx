import { useContext } from "react";
import summaryLogo from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";
import { QuizContext } from "../store/quiz-context.jsx";

export default function QuizSummary() {
  const { items } = useContext(QuizContext);

  return (
    <div id="summary">
      <img src={summaryLogo} alt="Cup" />
      <h2>Quiz completed</h2>

      <ol>
        {items.map((answer, index) => {
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className="user-answer">{answer}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
