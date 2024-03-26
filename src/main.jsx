import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import ListedBooks from './Component/ListedBooks/ListedBooks';
import PagesToRead from './Component/PagesToRead/PagesToRead';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element:<Home></Home> ,
      },
      {
        path: "/listedBooks",
        element:<ListedBooks></ListedBooks> ,
      },
      {
        path: "/pagestoRead",
        element:<PagesToRead></PagesToRead> ,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
