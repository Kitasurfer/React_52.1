import "./App.css";
//импорт по умолчанию (название компонента можно заменить на любое другое)
// import MyButton from "./components/Button/Button";
// import Button from "./components/Button/Button";

//lessons
// import Lesson02 from "./lessons/Lesson02/Lesson02";
// import Lesson03 from "./lessons/Lesson03/Lesson03";
//import Lesson04 from "./lessons/Lesson04/Lesson04";
import Homework04 from "./homeworks/Homework04/Homework04";

//homeworks
// import Homework02 from "./homeworks/Homework02/Homework02";
// import Homework03 from "./homeworks/Homework03/Homework03";

function App() {
  return (
    <div className="app">
      {/* <Button />
      <Button />
      <Button /> */}
      {/* ---Topic: Components */}
      {/* <Lesson02/> */}
      {/* <Homework02/> */}
      {/* ---Topic: Props */}
      {/* <Lesson03 /> */}
      {/* <Homework03/> */}
      {/* ---Topic: functions, hooks(useState) */}
     {/*  <Lesson04 /> */}
		 <Homework04 />
    </div>
  );
}

export default App;
