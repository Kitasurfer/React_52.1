// Импорт стилей компонента Button
import "./styles.css";

// Импорт по умолчанию (название компонента можно придумать самостоятельно)
function Button() {
  const isGetButton = false;
  const buttonType = "submit";

  return (
    <button className="main-button" type={buttonType}>
      {isGetButton ? "GET" : "SEND"}
    </button>
  );
}

// Экспортируем компонент Button по умолчанию
export default Button;
