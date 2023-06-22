import HomeTecItem from "./HomeTecItem";

interface Props {}

const HomeTecContainer = ({}: Props) => {
  return (
    <div className="grid w-full max-w-5xl gap-6 mt-6 grid-cols-tecnologies-mobile md:grid-cols-tecnologies">
      {[...new Array(12).fill("xd")].map(() => <HomeTecItem />)}
    </div>
  );
};

export default HomeTecContainer;
