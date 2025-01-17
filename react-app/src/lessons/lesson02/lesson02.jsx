import "./styles.css";
import Button from "../../components/button/Button";
import LessonCard from "../../components/lessonCard/LessonCard";

function Lesson02() {
  return (
    <div className="lesson02-wrapper">
			<LessonCard />
			<ProfileCard />
      <Button />
      <Button />
      <Button />
    </div>
  );
}

export default Lesson02;
