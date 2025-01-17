import './styles.css';
import Button from '../button/Button';
// именованный импорт (название компонента можно придумать самостоятельно)
// имя экспортируемых данных берется в фигурные скобки
import { lessonData } from './data';





function LessonCard() {
	console.log(lessonData);
	// до return логика обработки данных из lessonData
	const { lesson_number, topic, teacher_name } = lessonData;
	// деструктуризация объекта lessonData
	// в переменные lesson_number, topic, teacher_name
	// возвращаемый результат функции
  return (
    <div className="lesson-card-wrapper">

			<img src={lessonData.lesson_img} alt="lesson" />
		
			<h3>Lesson {lesson_number}</h3>
      <div>Topic: {lessonData.topic} </div>
      <div>Teacher: {lessonData.teacher_name}</div>
      <Button />
    </div>
  );
}
export default LessonCard;
