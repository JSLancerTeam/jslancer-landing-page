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
                We are a web and mobile development team from Vietnam. We focus
                on develop rich interactive applications with React and NodeJS technologies
              </p>
            </div>
            <div className="row mt--30 mt_sm--10">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="about-us-list">
                  <h3 className="title">High technical skills</h3>
                  <p>
                    Our team consists of senior developers who have vast
                    experience with React and React Native. Our technical skill
                    allow us to tackle difficult challenges and bring the
                    best solution for your product.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="about-us-list">
                  <h3 className="title">Customer first</h3>
                  <p>
                    In order to be successful, we need to understand customer's
                    vision and goal. So we take a lot of time to understand our
                    customer and their vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default About;
