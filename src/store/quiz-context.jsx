import { createContext, useReducer } from "react";

export const QuizContext = createContext({
    items: [],
    selectedAnswer: () => {}
})

function quizReducer(state, action) {
    if (action.type === "SELECT") {

        const userAnswers = [
          ...state.userAnswers,
          action.payload,
        ];

        return {
          userAnswers: userAnswers
        };
    }

    return state;
}

export default function QuizContextProvider({children}) {

    const [userAnswersState, userAnswersDispatch] = useReducer(quizReducer, {
      userAnswers: [],
    });

    function handleSelectedAnswer(selectedAnswer,) {
        userAnswersDispatch({
          type: "SELECT",
          payload: selectedAnswer,
        });
    }

    
    const quizCtx = {
      items: userAnswersState.userAnswers,
      selectedAnswer: handleSelectedAnswer,
    };

    return (
      <QuizContext.Provider value={quizCtx}>{children}</QuizContext.Provider>
    );
}