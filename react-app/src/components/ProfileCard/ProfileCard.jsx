import './styles.css';

const ProfileCard = ({ avatar, name, occupation, hobbies }) => {
  return (
    <div className="profile-card">
      <img src={avatar} alt={`${name}'s avatar`} className="profile-avatar" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-occupation">{occupation}</p>
      <p className="profile-hobbies">
        <strong>Hobbies:</strong> {hobbies}
      </p>
    </div>
  );
};

export default ProfileCard;
