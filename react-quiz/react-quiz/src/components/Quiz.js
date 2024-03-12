import { useState } from "react";
import Question
 from "./Question";
const Quiz = () => {
    console.log("render")
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const testClick = () => {
        console.log('Test Click');
        setCurrentQuestionIndex(currentQuestionIndex+1);
    }
    return (
        <div className="quiz">
            <div>
                <div className="score">Question 1/8</div>
                <Question/>
                <div className="next-button" onClick={testClick}>Next Question {currentQuestionIndex}</div>
            </div>
        </div>
    );
}

export default Quiz;