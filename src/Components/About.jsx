import { FaStar } from 'react-icons/fa6';
import { IoCheckmarkCircle } from 'react-icons/io5';

const About = () => {
  return (
    <div className="mt-[95px] px-5 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[90px] items-center">
        <div>
          <p className="text-light">ABOUT COMPANY</p>
          <h4 className="md:text-[50px] text-[30px] sm:text-[40px] font-semibold leading-[40px] sm:leading-[60px]">
            We help to find your <br />
            destination
          </h4>
          <p className="mt-5">
            Unlocking your potential by leveraging your experiences and achievements to pave the way for a brighter future.
          </p>
          <div className="my-5">
            <div className=" space-y-2">
              <p className="flex text-[20px] items-center">
                <IoCheckmarkCircle className="inline text-[22px] text-light mr-2" />{' '}
                <span className=" font-semibold"> Opening doors to your future</span>
              </p>
              <p className="flex text-[20px] items-center">
                <IoCheckmarkCircle className="inline text-[22px] text-light mr-2" />{' '}
                <span className=" font-semibold"> Experience the difference</span>
              </p>
              <p className="flex text-[20px] items-center">
                <IoCheckmarkCircle className="inline text-[22px] text-light mr-2" />{' '}
                <span className=" font-semibold"> Take only pictures, leave only footprints.</span>
              </p>
            </div>
            <div></div>
          </div>
        </div>
        <div className="relative ml-[60px]">
          <img className=" rounded-lg" src="https://i.ibb.co/c1NchDJ/leo-visions-knhr826q-IMA-unsplash.jpg" alt="" />
          <div className="text-center top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white absolute md:py-7 py-3 rounded-md px-7 shadow-xl">
            <h3 className="text-light text-[40px] font-bold">4.8</h3>
            <ul className="text-light mt-3 mb-4 justify-center flex gap-2">
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
            </ul>
            <p>Trusted on</p>
            <p className="mt-3 text-[18px] font-semibold">500+ Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
