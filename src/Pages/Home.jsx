import Slider from '../Components/Slider';
import { Helmet } from 'react-helmet';
import TouristSpots from '../Components/TouristSpots';
import { useLoaderData } from 'react-router-dom';
import Country from '../Components/Country';
import NewsLetter from '../Components/NewsLetter';
import About from '../Components/About';

const Home = () => {
  const data = useLoaderData();
  const spots = data.slice(0, 6);

  return (
    <div>
      <Helmet>
        <title>Home | Tracker</title>
      </Helmet>
      <Slider></Slider>
      <About></About>
      <TouristSpots spots={spots}></TouristSpots>
      <Country></Country>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
