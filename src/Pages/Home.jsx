import Slider from '../Components/Slider';
import { Helmet } from 'react-helmet';
import TouristSpots from '../Components/TouristSpots';
import { useLoaderData } from 'react-router-dom';
import Country from '../Components/Country';

const Home = () => {
  const data = useLoaderData();
  const spots = data.slice(0, 6);

  return (
    <div>
      <Helmet>
        <title>Home | Tracker</title>
      </Helmet>
      <Slider></Slider>
      <TouristSpots spots={spots}></TouristSpots>
      <Country></Country>
    </div>
  );
};

export default Home;
