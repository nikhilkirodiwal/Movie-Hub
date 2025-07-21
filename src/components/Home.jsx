import Swipper from "../components/swipper/Swipper";
import Category from "./Category";
import Movies from "./Movies";
import Series from "./Series";

const Home = () => {
  return (
    <div>
      <Swipper />
      <Category />
      <Movies carousel limit={10} />
      <Series carousel limit={10} />
    </div>
  );
};

export default Home;
