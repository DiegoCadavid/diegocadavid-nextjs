interface Props {
  title: string;
  value: number;
}

const AboutCardStatsItem = ({ title, value }: Props) => {
  return (
    <p className="flex justify-between capitalize">
      {title} <span className="font-semibold">{value}</span>
    </p>
  );
};

export default AboutCardStatsItem;
