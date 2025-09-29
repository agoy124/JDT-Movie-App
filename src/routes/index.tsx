import { createBrowserRouter } from "react-router";
import HomeScreen from "../features/home";
import DetailScreen from "../features/detail";
import Layout from "../components/layout";
import ProductScreen from "../features/product";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <HomeScreen />,
        index: true,
      },
      {
        path: "/detail/:id",
        element: <DetailScreen />,
      },
      {
        path: "/product",
        element: <ProductScreen />,
      },
    ],
  },
]);
