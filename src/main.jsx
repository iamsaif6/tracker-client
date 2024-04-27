import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root';
import Home from './Pages/Home';
import TouristsSpot from './Pages/TouristsSpot';
import AddSpot from './Pages/AddSpot';
import MyList from './Pages/MyList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/tourist_spot',
        element: <TouristsSpot></TouristsSpot>,
      },
      {
        path: '/add_spot',
        element: <AddSpot></AddSpot>,
      },
      {
        path: '/my_list',
        element: <MyList></MyList>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);