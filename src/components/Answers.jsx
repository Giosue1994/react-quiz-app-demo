import { useContext, useRef, useState } from "react";
import QUESTIONS from "../questions.js";
import { QuizContext } from "../store/quiz-context.jsx";

export default function Answers({index}) {
  const shufflingAnswers = useRef();
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  const { selectedAnswer } = useContext(QuizContext);

  if (!shufflingAnswers.current) {
    shufflingAnswers.current = [...QUESTIONS[index].answers].sort(
      () => Math.random() - 0.5
    );
  }

  let answerState = "";

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {

      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });

      setTimeout(() => {
        selectedAnswer(answer);
      }, 2000);
    }, 1000);
  }

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
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
              onClick={() => handleSelectAnswer(userAnswer)}
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
