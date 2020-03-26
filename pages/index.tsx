import * as React from 'react';
import Layout from '../components/common/Layout';
import { NextPage } from 'next';

import Slider from '../components/Slider';
import About from '../components/About';
//import Service from '../components/service/Service';
import Portfolio from '../components/Portfolio';
import Team from '../components/team/Team';
import serviceData from '../data/service';
import portfolioData from '../data/portoflio';
import teamData from '../data/team';

const IndexPage: NextPage = () => {
  return (
    <Layout title="JSLancer - Web and mobile development studio from Vietnam">
      <div className="slider-wrapper">
        <Slider data={serviceData} />
      </div>

      <div className="about-area about-position-top pb--120">
        <About />
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
