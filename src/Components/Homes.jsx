import React from "react";
import Home from "../Shared/Components/Home/Home";
import HelmetComponent from "./Helmet/HelmetProvider";

function Homes() {
  return (
    <>
      <HelmetComponent title="Home - International Journal of Smart Internet of Things and Applications" />
      <Home />
    </>
  );
}

export default Homes;
