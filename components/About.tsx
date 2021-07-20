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
                Started in 2015, JSLancer is a software development consultant from Vietnam that helps our clients 
                build the advanced user interface and data visualization products.
              </p>
              <p className="description">
                Our close-knit team consists of experienced engineers who can tackle complex challenges and bring the best solution for your product, 
                allowing you to focus on strategy, business development, and growing your user base with no worries.
              </p>
              <p className="description">
                We have been working with clients fromthe US, Singapore, Australia and deliver technical solutions 
                that meet their business goals and budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default About;
