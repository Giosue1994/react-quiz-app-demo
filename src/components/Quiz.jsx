import { useState } from 'react';
import QUESTIONS from '../questions.js';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    function handleSelectedAnswer(selectedAnswer) {
      setUserAnswers((prevAnswers) => {
        return [...prevAnswers, selectedAnswer];
      });
    }

    console.log(userAnswers);

    return (
      <div id="quiz">
        <div id="question">
          {/* <progress /> */}
          <p>{QUESTIONS[activeQuestionIndex].text}</p>
        </div>
        <ul id="answers">
          {QUESTIONS[activeQuestionIndex].answers.map((answer) => {
            return (
              <li key={answer} className="answer">
                <button onClick={() => handleSelectedAnswer(answer)}>{answer}</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
}