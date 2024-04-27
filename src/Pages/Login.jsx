import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-[100px] md:mt-0 md:min-h-screen">
      <Helmet>
        <title>Login | Tracker</title>
      </Helmet>
      <div className="h-full hidden md:block rounded-r-xl overflow-hidden bg-no-repeat bg-cover  bg-[url('https://i.ibb.co/H7K0tJ7/felfin-felfin-5-MV818tzxeo-unsplash.jpg')]">
        <div className="h-full flex bg-[#e7797599] justify-center pl-[10%] text-white text-left flex-col ">
          <h2 className="md:text-[40px] lg:text-[50px] font-semibold leading-[60px]">
            How about we <br /> traverse the world
          </h2>
          <p>We guide your entire tour & feel you safe</p>
        </div>
      </div>
      <div className="flex px-5 w-full items-center justify-center">
        <div className=" w-full max-w-[400px]">
          <div className="relative text-center mb-[50px]">
            <h2>Login To Your Accout</h2>
            <span className="absolute h-[2px] w-[100px] -bottom-[10px] left-1/2 -translate-x-1/2 bg-light"></span>
          </div>
          <form>
            <input
              className="bg-[#F4F4F5] py-3 placeholder:text-[14px] px-5 text-[16px] border-transparent border-[1px] focus:border-light w-full mb-5  outline-none rounded-md"
              type="email"
              placeholder="Email"
              name="email"
            />
            <br />
            <input
              className="bg-[#F4F4F5] py-3 placeholder:text-[14px] px-5 text-[16px] border-transparent border-[1px] focus:border-light w-full  outline-none rounded-md"
              type="password"
              placeholder="Password"
              name="password"
            />{' '}
            <br />
            <Link to="/" className="text-light text-[12px] my-4 block text-right">
              Forgot Password ?
            </Link>
            <button className="block text-center w-full py-3 rounded-md bg-light text-white" type="submit">
              Login
            </button>
          </form>
          <p className="text-center my-6">or</p>
          <div className="text-center space-x-3">
            <button className="border p-2 rounded">
              <FaGoogle />
            </button>
            <button className="border p-2 rounded">
              <FaGithub />
            </button>
          </div>
          <p className="text-center text-[12px] mt-5">
            Dont have any accout ?{' '}
            <Link to="/register" className="text-light">
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
