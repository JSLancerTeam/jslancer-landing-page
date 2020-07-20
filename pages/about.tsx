import * as React from "react";
import { NextPage } from "next";

import Layout from "../components/common/Layout";
import Breadcrumb from "../components/common/Breadcrumb";
import Counter from "../components/Counter";

const AboutPage: NextPage = () => {
  return (
    <Layout title="JSLancer - About us">
      <Breadcrumb title="About" />
      {/* Start About Area  */}
      <div className="rn-about-area ptb--120 bg_color--1">
        <div className="rn-about-wrapper">
          <div className="container">
            <div className="row row--35">
              <div className="col-lg-5">
                <div className="thumbnail">
                  <img
                    className="w-100"
                    src="/assets/images/team.jpg"
                    alt="JSLancer team"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title">About us</h2>
                    <p className="description">
                      We are a and web development team from Vietnam.
                      <br />
                      Our team is highly specialize in <strong>
                        React
                      </strong>{" "}
                      and <strong>NodeJS</strong>.
                    </p>
                    <p className="description">
                      Each member in our team has over 5 years experience with
                      web development.
                    </p>
                    <p className="description">
                      Besides outsourcing, we also contributing to software and
                      open-source community by creating{" "}
                      <strong>
                        <a href="https://github.com/jslancerteam">
                          open-source softwares
                        </a>
                      </strong>
                    </p>

                    <p className="description">
                      In the last 3 years, our teams have completed over <strong>15 projects</strong> for our clients and contribute a significant amount of works to their sucess.
                    </p>

                    <p className="description">
                      <strong>Here is our we works:</strong>
                      <ul>
                        <li>We always take at least 20% of project time to discuss and understand project requirements with our clients</li>
                        <li>We split project requirements into milestone and provide an accurate estimation for time and cost for each project</li>
                        <li>We have a clear dead-line to finish project on-time</li>
                        <li>We are export of ReactJS and NodeJS which help us overcome difficult challenges in any projects</li>                        
                      </ul>
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About Area  */}

      {/* Start CounterUp Area */}
      <div className="rn-counterup-area pb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h3 className="fontWeight500">Our Fun Facts</h3>
              </div>
            </div>
          </div>
          <Counter />
        </div>
      </div>
      {/* End CounterUp Area */}

      {/* Start Finding Us Area  */}
      <div className="rn-finding-us-area rn-finding-us bg_color--1">
        <div className="inner">
          <div className="content-wrapper">
            <div className="content">
              <h4 className="theme-gradient">Find out more</h4>
              <p>
                We offer 30-minutes of free consultant. Let's talk about your
                project and find out more about our team.
              </p>
              <a
                className="rn-btn btn-white"
                href="https://calendly.com/jslancer-contact-us/30min"
              >
                Schedule a meeting
              </a>
            </div>
          </div>
          <div className="thumbnail">
            <div className="image">
              <img
                src="/assets/images/find-our-works.jpg"
                alt="Finding Images"
              />
            </div>
          </div>
        </div>
      </div>
      {/* End Finding Us Area  */}
    </Layout>
  );
};

export default AboutPage;
