import React from 'react';
import ServiceBlock from './service/Block';
import { IData } from '../pages/service/data';

interface IProps {
  data: Array<IData>;
}

const Slider: React.FunctionComponent<IProps> = ({ data }) => (
  <div className="slider-activation" id="home">
    {/* Start Single Slide */}
    <div
      className="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image bg_image--1"
      data-black-overlay="6"
    >
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner">
              <h1 className="title theme-gradient">
                JS lancer <br /> team{' '}
              </h1>
            </div>
          </div>
        </div>
        {/* Start Service Area */}
        <div className="service-wrapper service-white">
          <ServiceBlock data={data} />
        </div>
        {/* End Service Area */}
      </div>
    </div>
    {/* End Single Slide */}
  </div>
);

export default Slider;
