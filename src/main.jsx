import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root';
import Home from './Pages/Home';
import TouristsSpot from './Pages/TouristsSpot';
import AddSpot from './Pages/AddSpot';
import MyList from './Pages/MyList';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProvider from './Components/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute';

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
        element: (
          <PrivateRoute>
            <AddSpot></AddSpot>
          </PrivateRoute>
        ),
      },
      {
        path: '/my_list',
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
