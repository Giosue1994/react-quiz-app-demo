import { useRef } from "react";

export default function Answers({ answers, onSelectAnswer, answer, answerState }) {
  const shufflingAnswers = useRef();

  if (!shufflingAnswers.current) {
    shufflingAnswers.current = [...answers].sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shufflingAnswers.current.map((userAnswer) => {
        const isSelected = answer.selectedAnswer === userAnswer;
        let cssClasses = "";

        if (answerState === "answered" && isSelected) {
          cssClasses = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClasses = answerState;
        }

        return (
          <li key={userAnswer} className="answer">
            <button
              className={cssClasses}
              onClick={() => onSelectAnswer(userAnswer)}
              disabled={answerState !== ""}
            >
              {userAnswer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
