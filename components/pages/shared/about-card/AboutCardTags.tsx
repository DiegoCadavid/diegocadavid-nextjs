import AboutCardTagsItem from "./AboutCardTagsItem";

interface Props {}

const AboutCardTags = ({}: Props) => {
  return (
    <div className="flex flex-wrap gap-2 mt-2 text-sm">
      <AboutCardTagsItem name="Javascript"/>
      <AboutCardTagsItem name="Typescript"/>
      <AboutCardTagsItem name="C#"/>
      <AboutCardTagsItem name="React"/>
      <AboutCardTagsItem name="Nextjs"/>
      <AboutCardTagsItem name="TailwindCSS"/>
    </div>
  );
};

export default AboutCardTags;
