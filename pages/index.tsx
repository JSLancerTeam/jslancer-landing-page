import * as React from 'react';
import Layout from '../components/common/Layout';
import { NextPage } from 'next';

import Slider from '../components/Slider';
import About from '../components/About';
import Service from '../components/service/Service';
import Portfolio from '../components/Portfolio';
import Team from '../components/team/Team';
import serviceData from './service/data';
import portfolioData from './portfolio/data';
import teamData from './team/data';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home Page">
      <div className="slider-wrapper">
        <Slider data={serviceData} />
      </div>

      <div className="about-area about-position-top pb--120">
        <About />
      </div>

      <div className="service-area ptb--80  bg_image bg_image--3">
        <div className="container">
          <Service data={serviceData} />
        </div>
      </div>

      <div className="portfolio-area ptb--120 bg_color--1">
        <div className="portfolio-sacousel-inner mb--55">
          <Portfolio data={portfolioData} />
        </div>
      </div>
      <Team data={teamData} />
    </Layout>
  );
};

export default IndexPage;
