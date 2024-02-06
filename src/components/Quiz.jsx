import { useState } from 'react';
import QUESTIONS from '../questions.js';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    const shufflingAnswers =
      [...QUESTIONS[activeQuestionIndex].answers].sort(() => Math.random() - 0.5)

    function handleSelectedAnswer(selectedAnswer) {
      setUserAnswers((prevAnswers) => {
        return [...prevAnswers, selectedAnswer];
      });
    }

    console.log(shufflingAnswers);

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
                <button onClick={() => handleSelectedAnswer(answer)}>
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
}