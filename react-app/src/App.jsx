import "./App.css";
import Lesson02 from "./lessons/lesson02/lesson02";
//импорт по умолчанию (название компонента можно заменить на любое другое)

 import Button from "./components/button/Button";

function App() {
  return (
    <div className="app">
      {/* <Button />
      <Button />
      <Button /> */}
      <Lesson02/>
    </div>
  );
}
export default App;