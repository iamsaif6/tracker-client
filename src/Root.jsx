import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { Toaster } from 'react-hot-toast';

const Root = () => {
  return (
    <>
      <Toaster />
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default Root;
