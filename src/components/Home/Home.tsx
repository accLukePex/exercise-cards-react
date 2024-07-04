import MainComponent from "../Main/MainComponent";
import Jumbotron from "../Jumbotron/Jumbotron";

interface HomeProps {
  initialCats: { id: string; url: string }[];
}

const Home: React.FC<HomeProps> = ({ initialCats }) => {
  return (
    <>
      <Jumbotron />
      <MainComponent cats={initialCats} />
    </>
  );
};

export default Home;
