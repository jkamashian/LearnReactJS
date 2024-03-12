import { createContext } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
    return <QuizContext.Provider value="fooooo" >{children}</QuizContext.Provider>;
};