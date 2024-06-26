import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Home/ErrorPage/ErrorPage";
import RootFIle from "./RootFile/RootFIle";
import Home from "./Home/Home";
import BookDetails from "./BookDetails/BookDetails";
import ListedBooks from "./LIstedBooks/ListedBooks";
import PagesToRead from "./PagesToRead/PagesToRead";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootFIle></RootFIle>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "pagesToRead",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("Book.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
