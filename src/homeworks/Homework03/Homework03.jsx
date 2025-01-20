
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import './styles.css';

function Homework03() {
  return (
    <div className="form-container">
      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
      />
      <Button type="submit" />
    </div>
  );
}

export default Homework03;