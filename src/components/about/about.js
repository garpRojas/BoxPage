import React from "react";
import aboutImage from "../../img/about.png";
import "./about.css";

const About = () => {
  return (
    <div className="container section-independent">
      <div className="row row-fix justify-content-md-center justify-content-lg-start">
        <div className="col-md-6 col-md-6 col-xl-5 text-secondary section-lg-60 section-lg-bottom-90 text-left">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="mb-30 font-weight-bold">About Us</h3>
            </div>
          </div>
          <div className="inset-md-right-15 inset-xl-right-0">
            <p>
              Our Investment Company, located in Rockville, Maryland, is a full
              service real estate company that provides acquisition, development
              and finance expertise for both commercial and multi-family
              projects.
            </p>
            <p>
              Our experience in structuring complicated financial transactions
              while accommodating diverse partnership interests, has allowed it
              to achieve over $1 Billion in acquisitions and financing.
            </p>
          </div>
        </div>
        <div className="col-lg-6 offset-lg-1 d-none d-lg-flex align-items-end">
          <img src={aboutImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
