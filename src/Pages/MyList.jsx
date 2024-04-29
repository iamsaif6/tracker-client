import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../Components/AuthProvider';
import TouristSpot from '../Components/TouristSpot';

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [spots, setSpot] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/mylist/${user.email}`)
      .then(res => res.json())
      .then(data => {
        setSpot(data);
      });
  }, [user.email]);

  return (
    <div className="max-w-6xl mx-auto">
      <Helmet>
        <title>My List | Tracker</title>
      </Helmet>
      <div>
        <h2 className="text-[30px] font-semibold text-center my-9">My Tour Spot List</h2>
        <div className="grid grid-cols-3 gap-7 mb-[50px] mt-[30px]">
          {spots.map(spot => (
            <TouristSpot key={spot._id} spot={spot}></TouristSpot>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyList;
