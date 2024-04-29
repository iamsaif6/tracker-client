import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root';
import Home from './Pages/Home';
import AddSpot from './Pages/AddSpot';
import MyList from './Pages/MyList';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProvider from './Components/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute';
import AllTouristsSpot from './Pages/AllTouristsSpot';
import Details from './Pages/Details';
import Update from './Pages/Update';
import ErrorPage from './Pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: () => fetch('http://localhost:3000/'),
      },
      {
        path: '/tourist_spot',
        element: <AllTouristsSpot></AllTouristsSpot>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: () => fetch('http://localhost:3000/'),
      },
      {
        path: '/add_spot',
        errorElement: <ErrorPage></ErrorPage>,
        element: (
          <PrivateRoute>
            <AddSpot></AddSpot>
          </PrivateRoute>
        ),
      },
      {
        path: '/my_list',
        errorElement: <ErrorPage></ErrorPage>,
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        errorElement: <ErrorPage></ErrorPage>,
        element: <Login></Login>,
      },
      {
        path: '/register',
        errorElement: <ErrorPage></ErrorPage>,
        element: <Register></Register>,
      },
      {
        path: '/details/:id',
        errorElement: <ErrorPage></ErrorPage>,
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:3000/details/${params.id}`),
      },
      {
        path: '/update/:id',
        errorElement: <ErrorPage></ErrorPage>,
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:3000/details/${params.id}`),
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
