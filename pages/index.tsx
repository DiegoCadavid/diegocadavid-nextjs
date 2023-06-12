import Layout from "../components/layout/Layout";
import HomeHero from "../components/pages/home/HomeHero";

interface Props {}

const Index = ({}: Props) => {
  return (
    <Layout>
      <HomeHero />
      <div className="container mt-16 md:mt-28">
        <h2 className="heading-1">Experience</h2>
        <p className="mt-2 max-w-lg">
          +4 años de experiencia en el desarrollo de software desarrollando y
          diseñando aplicaciones web escalables y responsivas a diferentes tipos
          de industrias.
        </p>

        <div className="rounded-lg bg-black p-6 text-white">
          <p className="leading-none">2023 - today</p>
          <h3 className="text-2xl font-bold">PrettyRad Inc.</h3>

          <p className="mt-2">
            Soy parte de unos de los principales desarrollares fullstack de
            Prettyrad Studios. Prettyrad es una agencia de desarrollo web que se
            enfoca en soluciones radicales para grandes problemas el cual se
            conforma de un equipo distribuido por América y Europa.
          </p>

          <div className="mt-6 flex">
            <div className="flex-1">
              <h4 className="font-bold">Mi trabajo</h4>
              <ul className="ml-5 list-disc">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </div>

            <div className="flex-1">
              <h4 className="font-bold">Tecnologias</h4>
              <ul className="ml-5 list-disc">
                <li>React 18.1.0</li>
                <li>NextJS 13.1.2</li>
                <li>TailwindCSS 3.1.2</li>
                <li>Sanity 2.34.0</li>
                <li>Express 4.18.2</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
