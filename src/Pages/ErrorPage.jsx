import Lottie, { useLottie } from 'lottie-react';
import LottieError from '../../public/LottieError.json';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-[650px] mx-auto">
        <Lottie animationData={LottieError} loop={true} />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
