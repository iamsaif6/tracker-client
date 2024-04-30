import { useState } from 'react';
import TouristSpot from '../Components/TouristSpot';
import { FaAngleDown } from 'react-icons/fa';

const TouristSpots = ({ spots }) => {
  const [updateSpot, setUpdateSpot] = useState(spots);

  function compare(a, b) {
    return b.average_cost - a.average_cost;
  }
  function compare2(a, b) {
    return a.average_cost - b.average_cost;
  }

  const handleSortBtn = type => {
    if (type == 'HighCost') {
      const sortedSpots = [...updateSpot].sort(compare);
      setUpdateSpot(sortedSpots);
      console.log(sortedSpots);
    } else if (type == 'LowCost') {
      const sortedSpots = [...updateSpot].sort(compare2);
      setUpdateSpot(sortedSpots);
      console.log(sortedSpots);
    }
  };

  return (
    <div className="max-w-6xl px-5 mx-auto py-[70px]">
      <div className="text-center">
        <h1 className="text-[30px] md:text-[45px] mb-2 font-bold">Tourist Spots</h1>
        <p className="max-w-[700px] text-[15px] md:text-[18px] mx-auto">
          Choose A Tour Package From Our Most Wanted Tour Package List And Travel With Your Beloved One.
        </p>

        <div className="mt-9">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1 px-7">
              Sort
              <FaAngleDown />
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a
                  onClick={() => {
                    handleSortBtn('HighCost');
                  }}
                >
                  By High Cost
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    handleSortBtn('LowCost');
                  }}
                >
                  By Low Cost
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {updateSpot.map(spot => (
            <TouristSpot key={spot._id} spot={spot}></TouristSpot>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TouristSpots;
