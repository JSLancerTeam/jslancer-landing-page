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
                      We are a mobile and web development company from Vietnam.
                      <br />
                      Our company is highly specialize in <strong>
                        React
                      </strong>{" "}
                      and <strong>NodeJS</strong>.
                    </p>
                    <p>
                      We make web application, ecommerce website, real-time data application and Chrome extension.
                    </p>
                    <p className="description">
                      Each member in our company has over 5 years experience with
                      web development. We have strong bond and work together to finish project.
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
                      In the last 3 years, our company have completed over <strong>15 projects</strong> for our clients and contribute a significant amount of works to their sucess.
                    </p>
                    <br />
                    <p className="description">
                      <h4>Our technology stacks:</h4>
                      <strong>Frontend:</strong>
                      <ul>
                        <li>ReactJS</li>
                        <li>redux, redux-sage, mobX</li>
                        <li>styled-components</li>
                        <li>react-router-dom</li>
                        <li>graphql</li>
                        <li>socket.io</li>
                        <li>Chrome Extension API</li>
                      </ul>
                      <strong>Backend:</strong>
                      <ul>
                        <li>ExpressJS</li>
                        <li>Knex, Waterline, Mongoose</li>
                        <li>Firebase</li>
                        <li>Mongodb, MySql, PostgresQL</li>
                        <li>GraphQL</li>
                        <li>Stripe, Paypal</li>
                        <li>Docker</li>
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
