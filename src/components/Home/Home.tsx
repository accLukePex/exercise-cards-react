import MainComponent from "../Main/MainComponent";
import Jumbotron from "../Jumbotron/Jumbotron";

interface HomeProps {
  initialCats: { id: string; url: string }[];
}

const Home: React.FC<HomeProps> = ({ initialCats }) => {
  return (
    <>
      <Jumbotron
        imageUrl="/assets/jumbotron-home.jpg"
        text="Find Your Perfect Feline Friend: Adorable Kittens Awaiting Their Forever Home!"
      />
      <MainComponent cats={initialCats} />
    </>
  );
};

export default Home;
