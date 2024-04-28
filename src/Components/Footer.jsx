import { NavLink } from 'react-router-dom';
import { FaLocationDot, FaYoutube, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="bg-[#111111] pt-[100px] pb-[60px]">
      <div className="max-w-6xl border-b-[1px] border-[#333] px-5 pb-[40px]  grid grid-cols-1 md:grid-cols-7 gap-8 text-white mx-auto">
        <div className="col-span-3">
          <div className="relative mb-8">
            <h2 className="text-[25px]">About Us</h2>
            <span className="h-[2px] w-[60px] bg-light absolute -bottom-1 left-0"></span>
          </div>
          <p className="text-[14px] font-thin leading-6">
            Tracker is your ultimate travel companion, a comprehensive tourist website designed to elevate your exploratory experience.
            Seamlessly blending cutting-edge technology with curated local insights, Tracker offers a personalized approach to travel
            planning.
          </p>
          <ul className="mt-6 space-x-4">
            <a className="bg-[#212122c6] text-white transition-all hover:bg-light p-3 inline-block" href="#">
              <FaFacebookF />
            </a>
            <a className="bg-[#212122c6] text-white transition-all hover:bg-light p-3 inline-block" href="#">
              <FaTwitter />
            </a>
            <a className="bg-[#212122c6] text-white transition-all hover:bg-light p-3 inline-block" href="#">
              <FaInstagram />
            </a>
            <a className="bg-[#212122c6] text-white p-3 transition-all hover:bg-light inline-block" href="#">
              <FaYoutube />
            </a>
          </ul>
        </div>
        <div className="col-span-2">
          <div className="relative mb-8">
            <h2 className="text-[25px]">Quick Links</h2>
            <span className="h-[2px] w-[60px] bg-light absolute -bottom-1 left-0"></span>
          </div>
          <ul className="flex footer-nav font-light flex-col gap-3">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/tourist_spot">All Tourists Spot</NavLink>
            <NavLink to="/add_spot">Add Tourists Spot</NavLink>
            <NavLink to="/my_list">My List</NavLink>
          </ul>
        </div>
        <div className="col-span-2">
          <div className="relative mb-8">
            <h2 className="text-[25px]">Contact Info</h2>
            <span className="h-[2px] w-[60px] bg-light absolute -bottom-1 left-0"></span>
          </div>
          <ul className=" space-y-2">
            <li className="flex items-center gap-3">
              <FaLocationDot /> 647 Linda Street , PA -1933 , USA
            </li>
            <li className="flex items-center gap-3">
              <FaPhone /> <a href="tel:999-343-54">999-343-54</a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope /> <a href="mailto:tracker@mail.com">tracker@mail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="px-5 text-center text-[#555] mt-[40px]">2024 Copyright All Right Reserved Tracker.com</p>
    </div>
  );
};

export default Footer;
