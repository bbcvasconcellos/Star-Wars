import { fibonacci, solution, getWinner } from "../../utils/questions";
import styles from "./questions.module.scss";

export const QuestionAnswers = () => {
  return(
    <div className={styles.container}>
      <div className="question-result">
        <b>Question 1 answer:</b> {solution([-1, -3])}
      </div>
      <div className="question-result">
        <b>Question 2 answer:</b> {fibonacci()}
      </div>
      <div className="question-result">
        <b>Question 3 answer:</b>{" "}
        {getWinner([4, 5, "A", 6, 2], [3, 8, 7, "Q", 4])}
      </div>
      <div className="page">        
      </div>
      </div>
  )
}