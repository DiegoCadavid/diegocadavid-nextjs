import AboutCardStatsItem from "./AboutCardStatsItem";

interface Props {}

const AboutCardStats = ({}: Props) => {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <AboutCardStatsItem  title="Github Repos" value={43} />
      <AboutCardStatsItem  title="Design Prototypes" value={23} />
      <AboutCardStatsItem  title="Game creates" value={3} />
      <AboutCardStatsItem  title="Spotify Playlist's" value={16} />
    </div>
  );
};

export default AboutCardStats;
