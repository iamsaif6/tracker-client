import { useLoaderData } from 'react-router-dom';
import { BiWorld } from 'react-icons/bi';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdTimer, IoIosPeople } from 'react-icons/io';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { Helmet } from 'react-helmet';

const Details = () => {
  const spot = useLoaderData();
  console.log(spot);

  return (
    <div className="max-w-5xl px-5 my-[50px] mx-auto">
      <Helmet>
        <title>{spot.tourists_spot_name}</title>
      </Helmet>
      <div>
        <h2 className="text-center text-[35px] md:text-[50px] mb-2 font-semibold">{spot.tourists_spot_name}</h2>
        <p className="text-center text-[18px] mb-6 flex items-center justify-center gap-3">
          <span className="flex gap-2 items-center">
            <BiWorld className="text-light" />
            {spot.country_Name}
          </span>
          <span className="flex gap-2 items-center">
            <FaLocationDot className="text-light" />
            {spot.location}
          </span>
        </p>
        <img src={spot.image} className="rounded-lg h-[400px] w-full object-cover" alt="" />
        <div className="mt-8 justify-between flex-wrap  flex items-center gap-2">
          <p className="flex items-center text-[18px] gap-2">
            <IoMdTimer className="text-light" />
            Travel Time : <span className="font-semibold">{spot.travel_time}</span>
          </p>
          <p className="flex items-center text-[18px] gap-2">
            <RiMoneyDollarCircleLine className="text-light" />
            Average Cost : <span className="font-semibold">${spot.average_cost}</span>
          </p>
          <p className="flex items-center text-[18px] gap-2">
            <TiWeatherPartlySunny className="text-light" />
            Seasonality : <span className="font-semibold">{spot.seasonality}</span>
          </p>
          <p className="flex items-center text-[18px] gap-2">
            <IoIosPeople className="text-light" />
            Visitors Per Year : <span className="font-semibold">{spot.totaVisitorsPerYear}</span>
          </p>
        </div>
        <p className="mt-9 leading-8 max-w-[700px] mx-auto text-center border-t pt-7">{spot.description}</p>
        <div className="text-center mt-8">
          <button className="bg-light text-white py-3 px-8 rounded">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
