import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { AuthContext } from '../Components/AuthProvider';

const notifySuccess = text => toast.success(text);

const AddSpot = () => {
  const { user } = useContext(AuthContext);

  const handleAddSpot = e => {
    e.preventDefault();
    const form = e.target;
    const tourists_spot_name = form.tourists_spot_name.value;
    const location = form.location.value;
    const seasonality = form.seasonality.value;
    const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
    const name = form.name.value;
    const country_Name = form.country_Name.value;
    const average_cost = form.average_cost.value;
    const travel_time = form.travel_time.value;
    const image = form.image.value;
    const email = form.email.value;
    const description = form.description.value;
    const spots = {
      tourists_spot_name,
      location,
      seasonality,
      totaVisitorsPerYear,
      name,
      country_Name,
      average_cost,
      travel_time,
      image,
      email,
      description,
    };

    console.log(JSON.stringify(spots));
    console.log(spots);
    fetch('http://localhost:3000/add_spot', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(spots),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged) {
          notifySuccess('Spot Added Successfully');
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Add Tourist Spot | Tracker</title>
      </Helmet>

      <div className='h-screen flex items-center justify-center w-full bg-no-repeat bg-cover bg-center  bg-[url("https://i.ibb.co/Qkxsctx/raphael-nogueira-JMYBet-GDIKY-unsplash-copy.jpg")]'>
        <div className="p-12 w-3/5 bg-[#0000009d]  border-[1px] rounded-lg">
          <form onSubmit={handleAddSpot} className="grid grid-cols-2 gap-6">
            <div className=" space-y-5">
              <input
                type="text"
                placeholder="Tourist Spot Name"
                className="input input-bordered w-full"
                name="tourists_spot_name"
                required
              />
              <input type="text" placeholder="Location" className="input input-bordered w-full" name="location" required />
              <input
                type="text"
                placeholder="Seasonality (ex : summer, winter)"
                className="input input-bordered w-full"
                name="seasonality"
                required
              />
              <input
                type="text"
                placeholder="Total Visitors Per Year (ex : 10000)"
                className="input input-bordered w-full"
                name="totaVisitorsPerYear"
                required
              />
              <input type="text" placeholder="Your Name" className="input input-bordered w-full" name="name" required />
            </div>
            <div className="space-y-5">
              <select required name="country_Name" className="select select-bordered w-full ">
                <option disabled selected>
                  Select Country
                </option>
                <option>Bangladesh</option>
                <option>Thailand</option>
                <option>Indonesia</option>
                <option>Malaysia</option>
                <option>Vietnam</option>
                <option>Cambodia</option>
              </select>
              <input type="text" placeholder="Average Cost" className="input input-bordered w-full" name="average_cost" required />
              <input
                type="text"
                placeholder="Travel Time (ex : 2-4 days)"
                className="input input-bordered w-full"
                name="travel_time"
                required
              />
              <input type="url" placeholder="Enter Image URL of The Spot" className="input input-bordered w-full" name="image" required />
              <input
                type="email"
                placeholder="Your Email"
                defaultValue={user?.email}
                className="input input-bordered w-full"
                name="email"
                readOnly
              />
            </div>
            <textarea
              placeholder="Enter a short description"
              className=" col-span-2 textarea textarea-bordered w-full"
              name="description"
              required
              id=""
              cols="10"
              rows="2"
            ></textarea>
            <button type="submit" className="bg-light rounded-lg py-3 text-white text-semibold col-span-2">
              Add Spot
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSpot;
