import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import toast from 'react-hot-toast';

const notifyError = text => toast.error(text);
const notifySuccess = text => toast.success(text);

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);

  const navLinks = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/tourist_spot">All Tourists Spot</NavLink>
      <NavLink to="/add_spot">Add Tourists Spot</NavLink>
      <NavLink to="/my_list">My List</NavLink>
    </>
  );

  //   Signout
  const handleSignOut = () => {
    LogOut()
      .then(() => {
        notifySuccess('Logout Successfull');
      })
      .catch(error => {
        console.log(error.message);
        notifyError(error.message);
      });
  };

  return (
    <div className="navbar justify-between max-w-6xl relative z-20 mx-auto">
      <div className="">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <Link to="/">
          <a className="btn font-script btn-ghost text-2xl">Tracker</a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      {user ? (
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn tooltip-bottom tooltip  btn-ghost btn-circle avatar" data-tip={user?.displayName}>
            <div className="w-10  rounded-full">
              {' '}
              <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li onClick={handleSignOut}>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      ) : (
        <div className="space-x-3">
          <Link to="/login">
            <a className="btn">Login</a>
          </Link>
          <Link to="register">
            <a className="btn">Register</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
