import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../Components/AuthProvider';
import { FaEye, FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [spots, setSpot] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/mylist/${user.email}`)
      .then(res => res.json())
      .then(data => {
        setSpot(data);
      });
  }, [user.email]);

  return (
    <div className="max-w-6xl mx-auto">
      <Helmet>
        <title>My List | Tracker</title>
      </Helmet>
      <div>
        <h2 className="text-[30px] font-semibold text-center my-9">My Tour Spot List</h2>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Spot Name</th>
                  <th>Location</th>
                  <th>Avg Cost</th>
                  <th>Travel Time</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {spots.map(spot => (
                  <tr key={spot._id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={spot.image} alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{spot.tourists_spot_name}</div>
                          <div className="text-sm opacity-50">{spot.country_Name}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {spot.location}
                      <br />
                      <span className="badge badge-ghost badge-sm">{spot.country_Name}</span>
                    </td>
                    <td>${spot.average_cost}</td>
                    <td>
                      <p>{spot.travel_time}</p>
                    </td>
                    <td className="text-[20px] flex items-center gap-3">
                      <Link to={`/details/${spot._id}`}>
                        <button title="View">
                          <FaEye className="text-[22px] mt-[2px]" />
                        </button>
                      </Link>
                      <Link>
                        <button title="Edit">
                          <FaEdit />
                        </button>
                      </Link>
                      <Link>
                        <button title="Delete">
                          <MdDelete />
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyList;
