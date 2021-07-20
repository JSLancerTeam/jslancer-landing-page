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
import ContactDetails from '../components/ContactDetails';
import TechnologyStack from '../components/TechnologyStack';
import Clients from '../components/Clients';
const IndexPage: NextPage = () => {
  return (
    <Layout title='JSLancer - Web and mobile development studio from Vietnam'>
      <div className='slider-wrapper'>
        <Slider data={serviceData} />
      </div>

      <div className='about-area about-position-top pb--120'>
        <About />
      </div>

      <div className='portfolio-area bg_color--1'>
        <div className='portfolio-sacousel-inner mb--55'>
          <TechnologyStack />
        </div>
      </div>

      <div className='portfolio-area ptb--120 bg_color--1'>
        <div className='portfolio-sacousel-inner mb--55'>
          <Portfolio data={portfolioData} />
        </div>
      </div>

      <Clients />

      <Team data={teamData} />

      <div className='rn-contact-top-area ptb--120 bg_color--5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2 className='title'>Contact us</h2>
              <br />
            </div>
          </div>
          <ContactDetails />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
