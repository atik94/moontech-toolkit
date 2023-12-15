import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import TopRated from "../pages/TopRated";
import AddProduct from "../pages/dashboard/AddProduct";
import Dashboard from "../layout/dashboard/Dashboard";
import ProductList from "../pages/dashboard/ProductList";

// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "top-rated",
//         element: <TopRated />,
//       },
//       {
//         path: "cart",
//         element: <Cart />,
//       },
//     ],
//   },
// ]);

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "top-rated",
        element: <TopRated />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <ProductList />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
    ],
  },
]);

export default routes;
