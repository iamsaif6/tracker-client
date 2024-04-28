import Slider from '../Components/Slider';
import { Helmet } from 'react-helmet';
import TouristSpots from '../Components/TouristSpots';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const spots = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Home | Tracker</title>
      </Helmet>
      <Slider></Slider>
      <TouristSpots spots={spots}></TouristSpots>
    </div>
  );
};

export default Home;
