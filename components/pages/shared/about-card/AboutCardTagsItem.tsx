interface Props {
  name: string;
}

const AboutCardTagsItem = ({name = "tag"}: Props) => {
  return (
    <span className="px-2 py-1 text-blue-500 bg-blue-200 border border-blue-500 rounded-full dark:bg-transparent">
      {name}
    </span>
  );
};

export default AboutCardTagsItem;
