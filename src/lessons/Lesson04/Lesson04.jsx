import "./styles.css";
import Button from "../../components/Button/Button";
import Counter from "../../components/Counter/Counter";

function Lesson04() {
  const showMessage = () => {
    alert("Func outer click");
  };

  const showCustomMessage = (name) => {
    alert(`Function outer click - ${name}`);
  };

  return (
    <div className="lesson04-wrapper">
      <Counter />
      <div className="buttons-container">
        {/* Пример 1 - создание функции внутри вызова кнопки (анонимная функция)  */}
        <Button
          name="Button with inner func"
          type="button"
          onClick={() => {
            alert("Func inner");
          }}
        />
        {/* Пример 2 - создание функции вне кнопки и передача названия функции в prop */}
        <Button
          name="Button with outer func"
          type="button"
          onClick={showMessage}
        />
        {/* Пример 3 - создание функции с параметрами вне кнопки */}
        <Button
          name="Button with parameters"
          type="button"
          onClick={() => {
            showCustomMessage("Bob");
          }}
        />
      </div>
    </div>
  );
}

export default Lesson04;
