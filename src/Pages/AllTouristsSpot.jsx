import { Helmet } from 'react-helmet';
import TouristSpots from '../Components/TouristSpots';
import { useLoaderData } from 'react-router-dom';

const AllTouristsSpot = () => {
  const spots = useLoaderData();
  console.log(spots);

  return (
    <div>
      <Helmet>
        <title>All Tourist Spots | Tracker</title>
      </Helmet>
      <TouristSpots spots={spots}></TouristSpots>
    </div>
  );
};

export default AllTouristsSpot;
