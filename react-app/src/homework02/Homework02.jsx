import ProfileCard from "../components/ProfileCard/profileCard";

const profiles = [
  {
    avatar: "https://i.postimg.cc/8kM6jQ0m/DALL-E-2025-01-17-15-40-59-A-funny-cartoon-style-avocado-wearing-sunglasses-and-a-tiny-hat-smilin.webp",
    name: "Авокадо",
    occupation: "Пляжный блогер",
    hobbies: "Чиллить под солнцем, носить стильные очки",
  },
  {
    avatar: "https://i.postimg.cc/GhRsDg0w/DALL-E-2025-01-17-15-40-57-A-cheerful-cartoon-style-pineapple-with-expressive-eyes-a-big-grin-an.webp",
    name: "Ананас",
    occupation: "Музыкальный энтузиаст",
    hobbies: "Слушать музыку, улыбаться, радоваться жизни",
  },
  {
    avatar: "https://i.postimg.cc/L5tY7L1b/DALL-E-2025-01-17-15-40-54-A-comical-cartoon-style-taco-character-with-arms-and-legs-holding-mara.webp",
    name: "Тако",
    occupation: "Танцор мариачи",
    hobbies: "Играть на маракасах, танцевать с друзьями",
  },
];

function Homework02() {
  return (
    <div>
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          avatar={profile.avatar}
          name={profile.name}
          occupation={profile.occupation}
          hobbies={profile.hobbies}
        />
      ))}
    </div>
  );
}

export default Homework02;
