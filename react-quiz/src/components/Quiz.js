import { useContext, useEffect } from "react";
import Question
 from "./Question";
import { QuizContext } from "../contexts/quiz";


const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    const apiUrl = "https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986";
    useEffect(
        () =>{
            if (quizState.questions.length>0){
                return;
            }
            console.log("on initialize");
            fetch(apiUrl).then((res) => res.json())
            .then((data) => {
                if ('results' in data){
                    dispatch({type:"LOADED_QUESTIONS", payload: data.results});
                } else {
                    return []
                }
            });
        }
    )
    return (
        <div className="quiz">
            {quizState.showResults && (
                <div className="results">
                    <div className="congratulations"></div>
                    <div className="results-info">
                        <div> You have completed the quiz.</div>
                        <div> You've got {quizState.correctAnswersCount} of {quizState.questions.length}</div>
                    </div>
                    <div className="next-button" onClick={() => dispatch({type: "RESTART"})}>Restart</div>
                </div>
            )}
            {!quizState.showResults && quizState.questions.length>0 && (
                <div>
                    <div className="score">Question {quizState.currentQuestionIndex +1}/{quizState.questions.length}</div>
                    <Question/>
                    <div className="next-button" onClick={() => {dispatch({type: "NEXT_QUESTION"});}}>Next Question</div>
                </div>
            )} 
            {!quizState.showResults && quizState.questions.length === 0 && (
                <div>
                    <div className="results-info">
                        <div>Something went wrong try refreshing.</div>
                    </div>
                </div>
            )} 
        </div>
    );
}

export default Quiz;