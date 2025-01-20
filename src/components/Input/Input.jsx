import './styles.css';

function Input({ label, name, type = "text", placeholder }) {
  return (
    <div className="input-group">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="custom-input"
      />
    </div>
  );
}

export default Input;