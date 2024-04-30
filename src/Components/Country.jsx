import { useEffect, useState } from 'react';
import { FaGlobe } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Country = () => {
  const [countries, setCountry] = useState([]);

  useEffect(() => {
    fetch('https://tracker-murex-phi.vercel.app/country')
      .then(res => res.json())
      .then(data => {
        setCountry(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="max-w-6xl px-5 mx-auto">
      <div className="text-center mb-9">
        <h1 className="md:text-[45px] text-[30px] mb-[60px] mt-[30px] font-bold">Browse By Country</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 mb-[60px]">
        {countries.map(country => {
          return (
            <Link to={`/country/${country.country_Name}`} key={country._id}>
              <div className="border group rounded overflow-hidden hover:shadow-lg transition-all">
                <div className="h-[250px]  rounded-t overflow-hidden">
                  <img
                    className="h-full group-hover:scale-[130%] w-full transition duration-300 object-cover overflow-hidden"
                    src={country.image}
                    alt=""
                  />
                </div>
                <div className="px-6 py-7">
                  <p className="flex items-center gap-2 text-[13px] text-[#555]">
                    <FaGlobe />
                    <span>{country.country_Name}</span>
                  </p>
                  <hr className="mt-4" />
                  <div className="py-5 ">
                    <p className="mb-5 line-clamp-4">{country.description}</p>
                    <button className="bg-light block text-[14px] text-white w-full py-2 px-5">View More</button>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Country;
