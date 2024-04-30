import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../Components/AuthProvider';
import { FaEye, FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [spots, setSpot] = useState([]);
  useEffect(() => {
    fetch(`https://tracker-murex-phi.vercel.app/mylist/${user.email}`)
      .then(res => res.json())
      .then(data => {
        setSpot(data);
      });
  }, [user.email]);

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#f24c4c',
      cancelButtonColor: '#333',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });

        fetch(`https://tracker-murex-phi.vercel.app/my_list/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              console.log('deleted');
              const newSpots = spots.filter(spot => spot._id !== id);
              setSpot(newSpots);
            }
          });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Helmet>
        <title>My List | Tracker</title>
      </Helmet>
      <div className="mb-[70px]">
        <h2 className="text-[30px] font-semibold text-center my-9">My Tour Spot List</h2>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Spot Name</th>
                  <th className="hidden md:block">Location</th>
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
                        <div className="avatar hidden md:block">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={spot.image} alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-[12px] md:text-[15px]">{spot.tourists_spot_name}</div>
                          <div className="text-sm opacity-50">{spot.country_Name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="hidden md:block">
                      {spot.location}
                      <br />
                      <span className="badge badge-ghost badge-sm">{spot.country_Name}</span>
                    </td>
                    <td>${spot.average_cost}</td>
                    <td>
                      <p>{spot.travel_time}</p>
                    </td>
                    <td className="text-[20px]  flex items-center gap-3">
                      <Link to={`/details/${spot._id}`}>
                        <button className="hover:text-light transition-all" title="View">
                          <FaEye className="text-[22px] mt-[2px]" />
                        </button>
                      </Link>
                      <Link to={`/update/${spot._id}`}>
                        <button className="hover:text-light transition-all" title="Edit">
                          <FaEdit />
                        </button>
                      </Link>
                      <button
                        className="hover:text-light transition-all"
                        onClick={() => {
                          handleDelete(spot._id);
                        }}
                        title="Delete"
                      >
                        <MdDelete />
                      </button>
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
