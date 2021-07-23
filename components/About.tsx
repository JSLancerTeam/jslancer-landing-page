import React from 'react';

const About: React.FunctionComponent = () => (
  <div className="about-wrapper">
    <div className="container">
      <div className="row row--35">
        <div className="col-lg-5 col-md-12">
          <div className="thumbnail">
            <img
              className="w-100"
              src="/assets/jslancer/about-us.jpg"
              alt="About Images"
            />
          </div>
        </div>

        <div className="col-lg-7 col-md-12">
          <div className="about-inner inner">
            <div className="section-title">
              <h2 className="title">About us</h2>
              <p className="description">
                JSLancer, a software development consultant from Vietnam, 
                was founded in 2015 toserve our clients in developing advanced user interface and data visualization solutions.
              </p>
              <p className="description">
                Our close-knit team consists of experienced engineers who can tackle complicated challenges and 
                deliver quality solution for your product, allowing you to focus on strategy, business growth, and user engagement without worry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default About;
