import './styles.css';

function Button({ name = "Send email", type = "button" }) {
  return (
    <button className="custom-button" type={type}>
      {name}
    </button>
  );
}

export default Button;