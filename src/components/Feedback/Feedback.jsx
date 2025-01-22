import { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";

const Feedback = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => setLikes(likes + 1);
  const handleDislike = () => setDislikes(dislikes + 1);
  const resetResults = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="feedback-container">
      <div className="feedback-item">
        <span className="feedback-count">👍 {likes}</span>
        <Button name="Like" onClick={handleLike} />
      </div>
      
      <div className="feedback-item">
        <Button name="Dislike" onClick={handleDislike} />
        <span className="feedback-count">👎 {dislikes}</span>
      </div>
      
      <div className="feedback-item">
        <Button name="Reset Results" onClick={resetResults} />
      </div>
    </div>
  );
};

export default Feedback;
