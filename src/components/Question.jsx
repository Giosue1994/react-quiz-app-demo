import { useContext } from "react";
import QUESTIONS from "../questions.js";
import { QuizContext } from '../store/quiz-context.jsx';
import ProgressBar from "./ProgressBar.jsx";
import Answers from "./Answers.jsx";

export default function Question() {
    const { items, skipAnswer } = useContext(QuizContext);

    const activeQuestionIndex = items.length;

  return (
    <div id="question">
      {/* impostare una chiave per il componente ProgressBar per fare in modo che venga ricaricato */}
      <ProgressBar timeout={10000} onTimeout={skipAnswer} />

      <p>{QUESTIONS[activeQuestionIndex].text}</p>

      <Answers index={activeQuestionIndex} />
    </div>
  );
}
