import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import { portfolioSlick2 } from '../constants/script';
import { IData } from '../pages/portfolio/data';

interface IProps {
  data: Array<IData>;
}

const Portfolio: React.FunctionComponent<IProps> = ({ data }) => (
  <div className="portfolio-wrapper">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>
              These are some products that we have developed for our customers
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-slick-activation mt--70 mt_sm--40">
      <Slider {...portfolioSlick2}>
        {data.map((value, index) => (
          <div className="portfolio" key={index}>
            <div className="thumbnail-inner">
              <div className={`thumbnail ${value.image}`}></div>
              <div className={`bg-blr-image ${value.image}`}></div>
            </div>
            <div className="content">
              <div className="inner">
                <h4>
                  <Link
                    href="/portfolio/[detail]"
                    as={`/portfolio/${value.href}`}
                  >
                    <a href={`/portfolio/${value.href}`}>{value.title}</a>
                  </Link>
                </h4>
                <div className="portfolio-button">
                  <Link
                    href="/portfolio/[detail]"
                    as={`/portfolio/${value.href}`}
                  >
                    <a className="rn-btn" href={`/portfolio/${value.href}`}>
                      View Details
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
);
export default Portfolio;
