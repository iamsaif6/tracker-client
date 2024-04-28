import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { Toaster } from 'react-hot-toast';
import Footer from './Components/Footer';

const Root = () => {
  return (
    <>
      <Toaster />
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
