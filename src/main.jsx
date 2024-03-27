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
import BookDetails from './Component/BookDetails/BookDetails';

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
        loader: () => fetch('/fakeData.json')
      },
      {
        path: "/pagestoRead",
        element:<PagesToRead></PagesToRead> ,
        loader: () => fetch('/fakeData.json')
    
       
      },
      {
        path: "/:id",
        element:<BookDetails></BookDetails>,
        loader: () => fetch ('fakeData.json')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
