import * as React from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { resetIdCounter } from 'react-tabs';

import Layout from '../../components/common/Layout';
import MemberInfo from '../../components/team/MemberInfo';

const memberInfo = [
  {
    textPosition: 'text-left',
    category: 'Freelance digital designer',
    title: 'Hello, I’m <span>Nancy</span> Welcome to my World.',
    description: '',
    buttonText: '',
    buttonLink: ''
  }
];

const MemberPage: NextPage = () => {
  resetIdCounter();
  const router = useRouter();
  const { detail } = router.query;
  console.log(detail);

  return (
    <Layout title="Member Detail Page">
      {/* Start Slider Area   */}
      <div className="slider-wrapper">
        {/* Start Single Slide */}
        {memberInfo.map((value, index) => (
          <div
            className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--16"
            key={index}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className={`inner ${value.textPosition}`}>
                    {value.category ? <span>{value.category}</span> : ''}
                    {value.title ? (
                      <h1
                        className="title"
                        dangerouslySetInnerHTML={{ __html: value.title }}
                      ></h1>
                    ) : (
                      ''
                    )}
                    {value.description ? (
                      <p className="description">{value.description}</p>
                    ) : (
                      ''
                    )}
                    {value.buttonText ? (
                      <div className="slide-btn">
                        <a
                          className="rn-button-style--2 btn-primary-color"
                          href={`${value.buttonLink}`}
                        >
                          {value.buttonText}
                        </a>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* End Single Slide */}
      </div>
      {/* End Slider Area   */}

      {/* Start About Area */}
      <div className="about-area about-position-top pb--120  bg_color--1">
        <div className="about-wrapper">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-5">
                <div className="thumbnail">
                  <img
                    className="w-100"
                    src="/assets/images/about/about-5.jpg"
                    alt="About Images"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="about-inner inner pt--100">
                  <div className="section-title">
                    <h2 className="title">About Me</h2>
                    <p className="description">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered{' '}
                      <a href="#">alteration</a> in some form, by injected
                      humour, or randomised words which dont look even slightly
                      believable. If you are going to use a passage of Lorem
                      Ipsum,
                    </p>
                  </div>
                  <div className="row mt--30">
                    <MemberInfo />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About Area */}
    </Layout>
  );
};

export default MemberPage;
