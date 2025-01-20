import "./styles.css";

const ProfileCard2 = ({ avatar, name, occupation, hobbies }) => {
  return (
    <div className="profile-card">
      <div className="profile-avatar-container">
        <img src={avatar} alt={`${name}'s avatar`} className="profile-avatar" />
      </div>
      <h2 className="profile-name">{name}</h2>
      <p className="profile-occupation">{occupation}</p>
      <div className="profile-hobbies">
        <strong>Увлечения:</strong> {hobbies}
      </div>
      <button className="send-button">Отправить</button>
    </div>
  );
};

export default ProfileCard2;
