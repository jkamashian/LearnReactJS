import { useContext, useReducer } from "react";
import Question
 from "./Question";
import { QuizContext } from "../contexts/quiz";

 const initialState = {
    currentQuestionIndex: 0,
    questions: [],
 };

 const reducer = (state, action) => {
    if (action.type == 'NEXT_QUESTION') {
        return {...state, currentQuestionIndex: state.currentQuestionIndex +1}
    }
    return state
 };

const Quiz = () => {
    const quizState = useContext(QuizContext)
    console.log('quizState', quizState)
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log("render", state)
    return (
        <div className="quiz">
            <div>
                <div className="score">Question 1/8</div>
                <Question/>
                <div className="next-button" onClick={() => {dispatch({type: "NEXT_QUESTION"});}}>Next Question {state.currentQuestionIndex}</div>
            </div>
        </div>
    );
}

export default Quiz;