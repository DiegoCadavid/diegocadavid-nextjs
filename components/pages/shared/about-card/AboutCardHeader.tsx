interface Props {}

const AboutCardHeader = ({}: Props) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-background-300 dark:bg-background-dark-300">
      <img
        src="https://pictures-omega.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdd4p0ksdu%2Fimage%2Fupload%2Fv1688957902%2Fboadqmqfzmgruxo4ynij.png&w=1080&q=75"
        alt=""
        className="w-24 h-24 rounded-lg"
      />
      <div>
        <h1 className="text-xl font-bold">DiegoCadavid</h1>
        <p>✨ NextJS Frontend</p>
        <p>🤖 C#/Nodejs Backend</p>
        <p>♿ 4 years coding!</p>
      </div>
    </div>
  );
};

export default AboutCardHeader;
