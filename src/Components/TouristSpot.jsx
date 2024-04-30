import { FaGlobe } from 'react-icons/fa';
import { IoIosTimer } from 'react-icons/io';
import { Link } from 'react-router-dom';

const TouristSpot = ({ spot }) => {
  return (
    <div className="border group rounded overflow-hidden hover:shadow-lg transition-all">
      <div className="h-[250px] w-full  rounded-t overflow-hidden">
        <img
          className="h-full w-full group-hover:scale-[130%] transition duration-300 object-cover overflow-hidden"
          src={spot.image}
          alt=""
        />
      </div>
      <div className="px-6 py-7">
        <h3 className="text-left text-[18px] mb-3">{spot.tourists_spot_name}</h3>
        <p className="flex items-center gap-2 text-[13px] text-[#555]">
          <FaGlobe />
          <span>
            {spot.location} , {spot.country_Name}
          </span>
        </p>
        <hr className="mt-4" />
        <p className="flex my-4 items-center gap-2 text-[15px]">
          <IoIosTimer />
          <span>{spot.travel_time}</span>
        </p>
        <div className="flex mt-4 items-center justify-between">
          <p className="font-bold text-light text-[18px]">${spot.average_cost}</p>
          <Link to={`/details/${spot._id}`}>
            <button className="bg-light text-[14px] text-white py-2 px-5">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TouristSpot;
