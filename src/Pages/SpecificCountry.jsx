import { FaGlobe, FaLocationDot } from 'react-icons/fa6';
import { IoIosTimer } from 'react-icons/io';
import { Link, useLoaderData } from 'react-router-dom';

const SpecificCountry = () => {
  const countries = useLoaderData();

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-center text-[30px] mt-[50px] mb-[70px]">All Listed Spots From {countries[0].country_Name}</h2>
      <div className="grid grid-cols-3 gap-7 mb-[70px]">
        {countries.map(country => {
          return (
            <div key={country._id} className="border group rounded overflow-hidden hover:shadow-lg transition-all">
              <div className="h-[250px]  rounded-t overflow-hidden">
                <img
                  className="h-full group-hover:scale-[130%] transition duration-300 object-cover overflow-hidden"
                  src={country.image}
                  alt=""
                />
              </div>
              <div className="px-6 py-7">
                <h3 className="text-left text-[18px] mb-3">{country.tourists_spot_name}</h3>
                <div className="flex items-center justify-between">
                  <p className="flex  items-center gap-2 text-[13px] text-[#555]">
                    <FaLocationDot />
                    <span> {country.location}</span>
                  </p>
                  <p className="flex items-center gap-2 text-[13px] text-[#555]">
                    <FaGlobe />
                    <span>{country.country_Name}</span>
                  </p>
                </div>
                <p className="my-3 text-[16px]">Preferred at {country.seasonality}</p>
                <hr className="my-4" />
                <p className=" line-clamp-3">{country.description}</p>
                <hr className="mt-4" />
                <p className="flex my-4 items-center gap-2 text-[15px]">
                  <IoIosTimer />
                  <span>{country.travel_time}</span>
                </p>
                <div className="flex mt-4 items-center justify-between">
                  <p className="font-bold text-light text-[18px]">${country.average_cost}</p>
                  <Link to={`/details/${country._id}`}>
                    <button className="bg-light text-[14px] text-white py-2 px-5">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpecificCountry;
