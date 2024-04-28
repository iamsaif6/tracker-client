import { Helmet } from 'react-helmet';

const AddSpot = () => {
  return (
    <div>
      <Helmet>
        <title>Add Tourist Spot | Tracker</title>
      </Helmet>

      <div className='h-screen flex items-center justify-center w-full bg-no-repeat bg-cover bg-center  bg-[url("https://i.ibb.co/Qkxsctx/raphael-nogueira-JMYBet-GDIKY-unsplash-copy.jpg")]'>
        <div className="p-12 w-3/5 bg-[#0000009d]  border-[1px] rounded-lg  ">
          <form className="grid grid-cols-2 gap-6">
            <div className=" space-y-5">
              <input type="text" placeholder="Tourist Spot Name" className="input input-bordered w-full" name="tourists_spot_name" />
              <input type="text" placeholder="Location" className="input input-bordered w-full" name="location" />
              <input
                type="text"
                placeholder="Seasonality (ex : summer, winter)"
                className="input input-bordered w-full"
                name="seasonality"
              />
              <input
                type="text"
                placeholder="Total Visitors Per Year (ex : 10000)"
                className="input input-bordered w-full"
                name="totaVisitorsPerYear"
              />
              <input type="text" placeholder="Your Name" className="input input-bordered w-full" name="name" required />
            </div>
            <div className="space-y-5">
              <select name="country_Name" className="select select-bordered w-full ">
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
              <input type="text" placeholder="Average Cost" className="input input-bordered w-full" name="average_cost" />
              <input type="text" placeholder="Travel Time (ex : 2-4 days)" className="input input-bordered w-full" name="travel_time" />
              <input type="url" placeholder="Enter Image URL of The Spot" className="input input-bordered w-full" name="image" />
              <input type="email" placeholder="Your Email" className="input input-bordered w-full" name="email" required />
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
