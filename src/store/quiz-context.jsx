import { createContext, useReducer, useCallback } from "react";

export const QuizContext = createContext({
    items: [],
    selectedAnswer: () => {},
    skipAnswer: () => {}
})

function quizReducer(state, action) {
    if (action.type === "SELECT") {
      const userAnswers = [
        ...state.userAnswers,
        action.payload.answer,
      ];

      return {
        userAnswers: userAnswers,
      };
    }

    return state;
}

export default function QuizContextProvider({children}) {
    const [userAnswersState, userAnswersDispatch] = useReducer(quizReducer, {
      userAnswers: [],
    });

    const handleSelectedAnswer = useCallback(
      function handleSelectedAnswer(selectedAnswer) {
        userAnswersDispatch({
          type: "SELECT",
          payload: {
            answer: selectedAnswer,
          },
        });
      },
      []
    );

    const handleSkipAnswer = useCallback(() => handleSelectedAnswer(null), []);
    
    const quizCtx = {
      items: userAnswersState.userAnswers,
      selectedAnswer: handleSelectedAnswer,
      skipAnswer: handleSkipAnswer,
    };

    return (
      <QuizContext.Provider value={quizCtx}>{children}</QuizContext.Provider>
    );
}