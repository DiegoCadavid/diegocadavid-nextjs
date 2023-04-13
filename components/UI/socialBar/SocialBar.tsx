import SocialBarItem from "./SocialBarItem";

interface Props {}

const SocialBar = ({}: Props) => {
  return (
    <div className="fixed bottom-0 flex flex-col items-center justify-end gap-2 right-9">
      <SocialBarItem />
      <SocialBarItem />
      <SocialBarItem />
      <div className="h-24 w-0.5 bg-black"></div>
    </div>
  );
};

export default SocialBar;
