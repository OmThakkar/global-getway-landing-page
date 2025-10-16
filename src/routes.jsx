import Layout from "./layout/Layout";
import Home from "./pages/Home";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
];

export default routes;