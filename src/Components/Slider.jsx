// import Swiper core and required modules
import { Pagination, A11y, Autoplay } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Slider = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Pagination, Autoplay, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="w-full h-[600px] bg-no-repeat bg-cover bg-left-top bg-[url('https://i.ibb.co/H7K0tJ7/felfin-felfin-5-MV818tzxeo-unsplash.jpg')]">
            <div className="w-full h-full bg-[#0000005c] flex items-center justify-center flex-col">
              <h1 className="text-white text-center font-script text-[90px]">Bali , Indonesia</h1>
              <p className="max-w-[700px] leading-[27px] px-5 mx-auto text-center text-white font-light">
                Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the
                province includes the island of Bali and a few smaller offshore islands,
              </p>
              <button className="bg-light outline-none text-white mt-8  py-4 px-8 rounded-lg text-[15px]">BROWSE DESTINATION</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[600px] bg-no-repeat bg-cover bg-left-top bg-[url('https://i.ibb.co/pJ5TkLp/nathan-cima-v-G5akut-Nq-CM-unsplash.jpg')]">
            <div className="w-full h-full bg-[#0000005c] flex items-center justify-center flex-col">
              <h1 className="text-white text-center font-script text-[90px]">Temple in Hoi An, Vietnam </h1>
              <p className="max-w-[700px] leading-[27px] px-5 mx-auto text-center text-white font-light">
                Hoi An, Vietnam, is famous for its well-preserved Ancient Town, a UNESCO World Heritage site, which includes several temples
                that are significant cultural and historical landmarks. One notable temple in Hoi An is the Quan Cong Temple.
              </p>
              <button className="bg-light outline-none text-white mt-8  py-4 px-8 rounded-lg text-[15px]">BROWSE DESTINATION</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[600px] bg-no-repeat bg-cover bg-left-top bg-[url('https://i.ibb.co/t2kHXZx/m-o-e-Joxep-WVTr-NE-unsplash.jpg')]">
            <div className="w-full h-full bg-[#0000005c] flex items-center justify-center flex-col">
              <h1 className="text-white text-center font-script text-[90px]">Phi Phi Islands, Krabi, Thailand </h1>
              <p className="max-w-[700px] leading-[27px] px-5 mx-auto text-center text-white font-light">
                The Phi Phi Islands, located in the Krabi Province of Thailand, are a renowned tropical paradise that draws visitors from
                around the world. Comprising six islands, the two main ones being Phi Phi Don and Phi Phi Leh, this archipelago.
              </p>
              <button className="bg-light outline-none text-white mt-8  py-4 px-8 rounded-lg text-[15px]">BROWSE DESTINATION</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
