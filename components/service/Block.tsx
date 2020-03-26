import React from 'react';
import { IData } from '../../data/service';

interface IProps {
  data: Array<IData>;
}

const ServiceBlock: React.FunctionComponent<IProps> = ({ data }) => (
  <div className="row">
    {data.slice(0, 3).map((val, i) => (
      <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
        <div className="service service__style--1">
          <div className="icon">
            <img
              src={`/assets/images/icons/icon-0${i + 1}.png`}
              alt="Digital Agency"
            />
          </div>
          <div className="content">
            <h4 className="title">{val.title}</h4>
            <p>{val.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);
export default ServiceBlock;
