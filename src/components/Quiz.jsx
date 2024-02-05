import { useState } from 'react';
import QUESTIONS from '../questions.js';
import Answer from './Answer.jsx';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    return (
      <section id="quiz">
        <div className="question">
          {/* <progress /> */}
          <p>{QUESTIONS[activeQuestionIndex].text}</p>
        </div>
        <ul id="answers">
          {QUESTIONS[activeQuestionIndex].answers.map((answer) => {
            const answerId = Math.random();

            return <Answer key={answerId} answerText={answer} />;
          })}
        </ul>
      </section>
    );
}