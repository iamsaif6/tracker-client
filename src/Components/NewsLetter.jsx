const NewsLetter = () => {
  return (
    <div className="text-center max-w-6xl mx-auto my-[70px] px-5">
      <p className="text-light">GET OUR NEWSLETTER</p>
      <h1 className="text-dark font-bold text-[29px] sm:text-[35px] md:text-[60px]">Get News & Update to Your Inbox</h1>
      <div className="max-w-[800px] mx-auto my-5 relative">
        <input
          className="w-full border focus:border-light focus:outline-none py-4 md:py-6 px-6"
          type="email"
          placeholder="Enter Your Email Address"
        />
        <button className="bg-light w-full mt-3 sm:mt-0 sm:w-auto sm:absolute right-1 top-1/2 sm:-translate-y-1/2 text-white py-4 md:py-5 px-[60px]">
          Subscribe
        </button>
      </div>
      <p className="font-semibold text-[#444] mt-9">Will be used accordance with our Privacy Policy</p>
    </div>
  );
};

export default NewsLetter;
