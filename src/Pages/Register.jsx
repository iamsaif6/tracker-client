import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useContext, useState } from 'react';
import { AuthContext } from '../Components/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const notifyError = text => toast.error(text);
const notifySuccess = text => toast.success(text);

const Register = () => {
  const [show, setShow] = useState(true);
  const { singUp, updateUserProfile } = useContext(AuthContext);

  // Register
  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photUrl = form.photoURL.value;

    // Password validation
    if (password.length < 6) {
      notifyError('Password Should 6 Character At Least');
    } else if (password.search(/[a-z]/) < 0) {
      notifyError('Password Should Contain One Lowercase');
    } else if (password.search(/[A-Z]/) < 0) {
      notifyError('Password Should Contain One Uppercase');
    } else {
      // SignIn User
      singUp(email, password)
        .then(res => {
          console.log(res);
          notifySuccess('User Created Successfully');

          //Update profile after sign up
          updateUserProfile(name, photUrl)
            .then(() => console.log('profile updated'))
            .catch(error => console.log(error.message));
        })
        .catch(error => {
          console.log(error);
          notifyError(error.message);
        });
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-[100px] md:mt-0 md:min-h-screen">
      <Helmet>
        <title>Register | Tracker</title>
      </Helmet>
      <div className="h-full hidden md:block rounded-r-xl bg-no-repeat bg-cover overflow-hidden  bg-[url('https://i.ibb.co/pJ5TkLp/nathan-cima-v-G5akut-Nq-CM-unsplash.jpg')]">
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
            <h2>Register Your Accout</h2>
            <span className="absolute h-[2px] w-[100px] -bottom-[10px] left-1/2 -translate-x-1/2 bg-light"></span>
          </div>
          <form onSubmit={handleRegister}>
            <input
              className="bg-[#F4F4F5] py-3 placeholder:text-[14px] px-5 text-[16px] border-transparent border-[1px] focus:border-light w-full mb-5  outline-none rounded-md"
              type="text"
              placeholder="Name"
              name="name"
              required
            />
            <br />
            <input
              className="bg-[#F4F4F5] py-3 placeholder:text-[14px] px-5 text-[16px] border-transparent border-[1px] focus:border-light w-full mb-5  outline-none rounded-md"
              type="email"
              placeholder="Email"
              name="email"
              required
            />
            <br />
            <input
              className="bg-[#F4F4F5] py-3 placeholder:text-[14px] px-5 text-[16px] border-transparent border-[1px] focus:border-light w-full  outline-none mb-5 rounded-md"
              type="url"
              placeholder="Photo URL"
              name="photoURL"
              required
            />
            <br />
            <label className="relative">
              <input
                className="bg-[#F4F4F5] py-3 placeholder:text-[14px] px-5 text-[16px] border-transparent border-[1px] focus:border-light w-full  outline-none rounded-md"
                type={show ? 'password' : 'text'}
                placeholder="Password"
                name="password"
              />
              <span
                onClick={() => {
                  setShow(!show);
                }}
                className="absolute cursor-pointer top-1/2 right-3 -translate-y-1/2"
              >
                {show ? <FaEyeSlash /> : <FaEye />}
              </span>
            </label>
            <br />
            <button className="block text-center mt-5 w-full py-3 rounded-md bg-light text-white" type="submit">
              Register
            </button>
          </form>
          <p className="text-center text-[12px] mt-5">
            Already have an accout ?{' '}
            <Link to="/login" className="text-light">
              Login Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
