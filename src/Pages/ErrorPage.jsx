import Lottie from 'lottie-react';
import LottieError from '../../public/LottieError.json';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <div className="max-w-[600px] mx-auto">
        <Lottie animationData={LottieError} loop={true} />
        <div className="text-center mt-5">
          <Link>
            <button className="bg-light text-white py-3 px-6 rounded">Go Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
