interface Props {}

const HomeWorkItem = ({}: Props) => {
  return (
    <div className="w-full flex-1 overflow-hidden rounded-2xl border-2 border-black">
      <div className="aspect-video w-full bg-black"></div>

      <div className="mt-2 px-4 pt-2 pb-4">
        <h3 className="text-xl font-bold"> Unplash </h3>
        <p className="mt-">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
          atque dolor velit eveniet! Modi totam fuga aliquid reiciendis eum,
          recusandae esse tempore cupiditate ut amet? Esse incidunt accusamus
          omnis tenetur!
        </p>
        <div className="mt-2 flex w-full gap-2">
          <a className="btn btn-outline w-full flex-1" href="#">
            Repository
          </a>
          <a className="btn btn-outline w-full flex-1" href="#">
            page
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeWorkItem;
