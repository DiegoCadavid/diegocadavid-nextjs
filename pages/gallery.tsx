import Layout from "../components/layouts/Layout";
import divideArray from "../helpers/divideArray";

interface Props {}

const gallery = ({}: Props) => {
  const images = [
    "https://i.pinimg.com/236x/f2/b8/7f/f2b87f0a2d2fe311b1fe488eb9462e6f.jpg",
    "https://i.pinimg.com/236x/8c/4f/5e/8c4f5eef6620b62b566f0f3749862ff4.jpg",
    "https://i.pinimg.com/236x/b1/2e/4d/b12e4db8922917debccb115716f3f2ff.jpg",
    "https://i.pinimg.com/236x/4c/76/9e/4c769ebfbe7e585ee35bcb5c465350ff.jpg",
    "https://i.pinimg.com/236x/e4/eb/44/e4eb44e6e807bcf7e6263f745ce00fca.jpg",
    "https://i.pinimg.com/474x/63/3a/f1/633af13404592d17d26cfdfd26b6db89.jpg",
  ];

  const imageColumns = divideArray(images, 4);

  return (
    <Layout>
      <div className="flex gap-6">
        {imageColumns.map((column) => {
          return <div className="flex flex-col flex-1 gap-6">{
            column.map((image) =>{
              return <img src={image} alt="" className="w-full rounded-2xl" />
            })
          }</div>;
        })}
      </div>
    </Layout>
  );
};

export default gallery;
