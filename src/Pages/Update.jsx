import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
  const spot = useLoaderData();

  const handleUpdate = e => {
    e.preventDefault();

    const form = e.target;
    const tourists_spot_name = form.tourists_spot_name.value;
    const location = form.location.value;
    const seasonality = form.seasonality.value;
    const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
    const country_Name = form.country_Name.value;
    const average_cost = form.average_cost.value;
    const travel_time = form.travel_time.value;
    const image = form.image.value;
    const description = form.description.value;
    const spots = {
      tourists_spot_name,
      location,
      seasonality,
      totaVisitorsPerYear,
      country_Name,
      average_cost,
      travel_time,
      image,
      description,
    };

    fetch(`https://tracker-murex-phi.vercel.app/update/${spot._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(spots),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Updated !',
            text: 'Your Post Has Been Updated',
            icon: 'success',
          });
        } else if (data.modifiedCount == 0) {
          Swal.fire({
            title: 'Not Updated !',
            text: 'Please Make Changes For Update',
            icon: 'error',
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Update Tourist Spot | Tracker</title>
      </Helmet>

      <div className='md:py-[80px] px-5  py-[40px] flex items-center justify-center w-full bg-no-repeat bg-cover bg-center  bg-[url("https://i.ibb.co/Qkxsctx/raphael-nogueira-JMYBet-GDIKY-unsplash-copy.jpg")]'>
        <div className="md:p-12 p-5 sm:p-8 md:w-4/5 lg:w-3/5 bg-[#0000009d]  border-[1px] rounded-lg">
          <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className=" space-y-5">
              <input
                type="text"
                placeholder="Tourist Spot Name"
                className="input input-bordered w-full"
                name="tourists_spot_name"
                defaultValue={spot.tourists_spot_name}
                required
              />
              <input
                type="text"
                placeholder="Location"
                className="input input-bordered w-full"
                name="location"
                defaultValue={spot.location}
                required
              />
              <input
                type="text"
                placeholder="Seasonality (ex : summer, winter)"
                className="input input-bordered w-full"
                name="seasonality"
                defaultValue={spot.seasonality}
                required
              />
              <input
                type="text"
                placeholder="Total Visitors Per Year (ex : 10000)"
                className="input input-bordered w-full"
                name="totaVisitorsPerYear"
                defaultValue={spot.totaVisitorsPerYear}
                required
              />
            </div>
            <div className="space-y-5">
              <select required name="country_Name" className="select select-bordered w-full ">
                <option disabled>Select Country</option>
                {spot.country_Name == 'Bangladesh' ? <option selected>Bangladesh</option> : <option>Bangladesh</option>}
                {spot.country_Name == 'Thailand' ? <option selected>Thailand</option> : <option>Thailand</option>}
                {spot.country_Name == 'Indonesia' ? <option selected>Indonesia</option> : <option>Indonesia</option>}
                {spot.country_Name == 'Malaysia' ? <option selected>Malaysia</option> : <option>Malaysia</option>}
                {spot.country_Name == 'Vietnam' ? <option selected>Vietnam</option> : <option>Vietnam</option>}
                {spot.country_Name == 'Cambodia' ? <option selected>Cambodia</option> : <option>Cambodia</option>}
              </select>
              <input
                type="text"
                placeholder="Average Cost"
                className="input input-bordered w-full"
                name="average_cost"
                defaultValue={spot.average_cost}
                required
              />
              <input
                type="text"
                placeholder="Travel Time (ex : 2-4 days)"
                className="input input-bordered w-full"
                name="travel_time"
                defaultValue={spot.travel_time}
                required
              />
              <input
                type="url"
                placeholder="Enter Image URL of The Spot"
                className="input input-bordered w-full"
                name="image"
                defaultValue={spot.image}
                required
              />
            </div>
            <textarea
              placeholder="Enter a short description"
              className=" md:col-span-2 textarea textarea-bordered w-full"
              name="description"
              defaultValue={spot.description}
              required
              id=""
              cols="10"
              rows="2"
            ></textarea>
            <button type="submit" className="bg-light rounded-lg py-3 text-white text-semibold md:col-span-2">
              Update Spot
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
