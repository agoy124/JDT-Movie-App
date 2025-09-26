import { createBrowserRouter } from "react-router";
import HomeScreen from "../features/home";
import DetailScreen from "../features/detail";
import Layout from "../components/layout";
import Login from "../features/login";
import ProtectedRoutes from "./ProtectedRoutes";
import ProductScreen from "../features/product";

export const routes = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            element: <HomeScreen />,
            index: true,
          },
          {
            element: <DetailScreen />,
            path: "/detail/:id",
          },
          {
            element: <ProductScreen />,
            path: "/product",
          },
        ],
      },
    ],
  },
]);