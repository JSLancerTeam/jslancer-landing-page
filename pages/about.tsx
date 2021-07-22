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
                      JSLancer, a software development consultant from Vietnam, 
                      was founded in 2015 to assist our clients in developing superior user interface and data visualization solutions.
                    </p>
                    <p className="description">
                      Our close-knit team consists of experienced engineers who can tackle complicated challenges and deliver the best solution for your product, 
                      allowing you to focus on strategy, company development, and user growth without worry.
                    </p>
                    <p className="description">
                      We have been working with clients fromthe US, Singapore, Australia and deliver technical solutions 
                      that meet their business goals and budget.
                    </p>
                    <br />
                    <p className="description">
                      <h4>Our technology stacks:</h4>
                      <ul>
                        <li>Advance UI with ReactJS, Redux, GraphQL, styled-components, SCSS</li>
                        <li>Real-time application with Socket.</li>
                        <li>Build data visualization applications with D3JS</li>
                        <li>Write unit test and E2E to verify the functionality of an individual part or the whole of an application</li>
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
                project and find out more about our company.
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
