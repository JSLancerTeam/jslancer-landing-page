import React from 'react';
import { IData } from '../../pages/service/data';

interface IProps {
  data: Array<IData>;
}

const Service: React.FunctionComponent<IProps> = ({ data }) => (
  <div className="row" id="service">
    <div className="col-lg-4 col-12">
      <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
        <h2 className="title">Services</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
        <div className="service-btn">
          <a className="btn-transparent rn-btn-dark" href="/service">
            <span className="text">Request Custom Service</span>
          </a>
        </div>
      </div>
    </div>
    <div className="col-lg-8 col-12 mt_md--50">
      <div className="row service-one-wrapper">
        {data.map((val, i) => (
          <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
            <a href="/service-details">
              <div className="service service__style--2">
                <div className="icon">{val.icon}</div>
                <div className="content">
                  <h3 className="title">{val.title}</h3>
                  <p>{val.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default Service;
