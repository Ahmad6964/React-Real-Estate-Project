import React from "react";

import Cfrom from "../Contact-form/Cfrom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Partner from "../Partner/Partner";
import Ready from "../Ready/Ready";

const Contact = () => {
  return (
    <div>
      <Header />
      <Cfrom/>
      <Ready />
      <Partner />
      <Footer />
    </div>
  );
};

export default Contact;
