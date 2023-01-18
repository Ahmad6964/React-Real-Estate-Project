import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Partner from "../Partner/Partner";
import Ready from "../Ready/Ready";
import Banner from "../InnerBanner/Banner";
import PropertyD from "../PropertyDetail/PropertyD"
import Detail from "../DetailCard/Detail";
import Lahproperty from "../lahore-Property/Lahproperty";
import Similary from "../Similary-Houses/Similary";

const Innerpage = () => {
  return (
    <>
    
      <Header />
      <Banner/>
      <PropertyD/>
      <Detail/>
      <Lahproperty/>
      <Ready />
      <Partner />
      <Footer />
    </>
  );
};

export default Innerpage;
