import Slider from '../Components/Slider';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Tracker</title>
      </Helmet>
      <Slider></Slider>
    </div>
  );
};

export default Home;
