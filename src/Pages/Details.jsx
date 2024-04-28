import { useLoaderData } from 'react-router-dom';

const Details = () => {
  const spot = useLoaderData();
  console.log(spot);

  return (
    <div className="max-w-6xl mx-auto">
      <div></div>
    </div>
  );
};

export default Details;
