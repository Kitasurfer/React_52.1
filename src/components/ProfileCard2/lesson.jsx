import ProfileCard2 from './ProfileCard2';
import { profiles } from './data2';
import './styles.css';

const Lesson = () => {
  return (
    <div className="lesson">
      <h1>Профили</h1>
      <div className="profiles-grid">
        {profiles.map(({ avatar, name, occupation, hobbies }) => (
          <ProfileCard2
            key={name}
            avatar={avatar}
            name={name}
            occupation={occupation}
            hobbies={hobbies}
          />
        ))}
      </div>
    </div>
  );
};

export default Lesson;
