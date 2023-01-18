import React from "react";
import Search from "../Popular-Search/Search";
import "./Lahproperty.scss";

const Lahproperty = () => {
  return (
    <>
      <section className="lahoreproperty">
        <div className="container">
          <div className="row lahore-property-content">
            <h1>About Property in Lahore</h1>
            <br/>
            <p>
              The Lahore real estate market is one of the most sought after
              investment havens in the country and the reason is obvious:
              lucrative returns on investment. Property in Lahore has seen
              escalations in value and this is the main reason why investors
              capitalise on real estate in Lahore. <br /><br /> Not only that the plots in
              Lahore are greatly desired by property buyers, people also prefer
              to buy or build houses in Lahore because of the outstanding
              infrastructure of the city. <br /> <br /> Amid other housing projects in Lahore,
              the concept of apartments in Lahore is also getting popular. With
              many apartment projects such as The Springs Apartments Homes,
              Sheranawala Heights, Tower 27, Indigo Heights and many more, the
              real estate landscape of the city is changing with the passage of
              time. <br /> <br /> In terms of real estate, Lahore projects are not just
              limited to residential options, as the city equally offers the
              best commercial projects suitable for all kinds of businesses.<br /> <br /> The
              metropolitan city of Lahore is expanding left, right and centre.
              People from many other cities have also migrated to Lahore because
              it offers a plenty of job and business opportunities and also
              provides them with a suitable environment to live. Perhaps because
              of the increasing population of the city, many real estate
              developers have entered the city which has resulted in the
              increase of Lahore property value.
            </p>
            <Search/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Lahproperty;
