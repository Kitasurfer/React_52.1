import Button from "../components/Button/Button";
import "./styles.css";
//1 шаг - импорт хука useState из react
import { useState } from "react";

function Counter() {
  // Шаг 2 - вызываем хук useState и передаём в вызов (в круглые скобки) начальное состояние (initialState)
  //при вызове хук useState возвращает массив из двух элементов
  // 1-й элемент - значение состояния (актуальное)
  // 2-й элемент - функция, которая может изменять значение состояния
  // const counterStateAr = useState(2);
  // const [counter, setCounter] = counterStateAr;
  // console.log(counterStateAr);

  //Для упрощения делаем деструктуризацию
  const [counter, setCounter] = useState(0);

  //Шаг 3 - создаём функции, которые будут менять состояние
  const onPlusClick = () => {
    //1 вариант использования функции по изменению состояния - передача нового значения в вызов функции
    // setCounter(45);
    //2 вариант - передача в вызов setCounter функции callback, если новое значение состояния,
    //должно быть вычислено на основе предыдущего значения
    //из функции необходимо вернуть новое значение состояния
    setCounter((prevState) => prevState + 1);
  };

  const onMinusClick = () => {
    setCounter((prevValue) => prevValue - 1);
  };

  return (
    <div className="counter-wrapper">
      <div className="button-wrapper">
        <Button name="-" type="button" onClick={onMinusClick}/>
      </div>
      <div className="result-container">{counter}</div>
      <div className="button-wrapper">
        <Button name="+" type="button" onClick={onPlusClick} />
      </div>
    </div>
  );
}

export default Counter;
