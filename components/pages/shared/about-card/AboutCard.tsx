import AboutCardHeader from "./AboutCardHeader";
import AboutCardStats from "./AboutCardStats";
import AboutCardTags from "./AboutCardTags";

interface Props {}

const AboutCard = ({}: Props) => {
  return (
    <div className="overflow-hidden bg-white border shadow-md rounded-2xl border-stroke-500 dark:bg-background-dark-400 dark:border-stroke-dark-500">
      <AboutCardHeader />

      <div className="p-4 ">
        <h2 className="mb-2 font-bold">About me</h2>
        <p>
          I am student of Colombia, Fullstack Developer, I really
          love create cool sites and clone big sites like Pinterest, Twitter,
          Spotify and more!{" "}
        </p>
        <p className="mt-2">
          I'm have 16 years old now, i like the anime/games (waited for Blue
          Protocol Global)
        </p>

        <AboutCardStats />

        <h2 className="mt-4 font-semibold">Languages and Frameworks</h2>
       <AboutCardTags />
      </div>
    </div>
  );
};

export default AboutCard;
