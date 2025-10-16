import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "./routes";
import ScrollToTop from "./components/general/ScrollToTop";

const AppRoutes = () => {
  const element = useRoutes(routes);
  return element;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;