import TouristSpot from '../Components/TouristSpot';

const TouristSpots = ({ spots }) => {
  return (
    <div className="max-w-6xl px-5 mx-auto py-[70px]">
      <div className="text-center">
        <h1 className="text-[45px] mb-2 font-bold">Tourist Spots</h1>
        <p className="max-w-[700px] mx-auto">
          Choose A Tour Package From Our Most Wanted Tour Package List And Travel With Your Beloved One.
        </p>
        <div className="mt-[40px] grid grid-cols-3 gap-7">
          {spots.map(spot => (
            <TouristSpot spot={spot}></TouristSpot>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TouristSpots;
