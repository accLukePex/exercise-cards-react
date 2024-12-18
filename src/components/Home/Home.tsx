import Jumbotron from "../../ui/Jumbotron/Jumbotron";
import MainComponent from "../Sections/Main/MainComponent";

const Home: React.FC<{}> = () => {
  return (
    <>
      <Jumbotron
        imageUrl="/assets/jumbotron-home.jpg"
        text="Find Your Perfect Feline Friend: Adorable Kittens Awaiting Their Forever Home!"
      />
      <MainComponent />
    </>
  );
};

export default Home;
