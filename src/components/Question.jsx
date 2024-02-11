import { useContext, useState } from "react";
import QUESTIONS from "../questions.js";
import { QuizContext } from '../store/quiz-context.jsx';
import ProgressBar from "./ProgressBar.jsx";
import Answers from "./Answers.jsx";

export default function Question() {
    const [answer, setAnswer] = useState({
      selectedAnswer: "",
      isCorrect: null,
    });
    const { items, skipAnswer, selectedAnswer } = useContext(QuizContext);
    const activeQuestionIndex = items.length;

    let timer = 10000;

    if (answer.selectedAnswer) {
      timer = 1000;
    }

    if (answer.isCorrect !== null) {
      timer = 2000;
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
          isCorrect: QUESTIONS[activeQuestionIndex].answers[0] === answer,
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
    <div id="question">
      <ProgressBar
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer === "" ? skipAnswer : null}
        mode={answerState}
      />

      <p>{QUESTIONS[activeQuestionIndex].text}</p>

      <Answers
        answers={QUESTIONS[activeQuestionIndex].answers}
        answer={answer}
        answerState={answerState}
        onSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
}
