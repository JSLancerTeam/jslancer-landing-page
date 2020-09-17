import React from 'react';
import styled from 'styled-components';

const ClientImg = styled.img`
  height: ${(props) => (props.height ? props.height : '60px')};
  filter: grayscale(100%);
  filter: gray;
  opacity: 0.8;
  max-height: 60px;
  max-width: 180px;

  @media screen and (max-width: 500px) {
    filter: none;
    opacity: 1;
    max-width: 120px;
  }
`;
const ClientList = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: min-content;
  width: 100%;
  margin-top: 20px;
`;

const ClientName = styled.div`
  text-align: center;
  margin-top: 10px;
  font-size: 20px;
  color: gray;

  &:hover {
    color: black;
  }

  @media screen and (max-width: 500px) {
    margin-top: 10px;
  }
`;

const ClientItem = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 100%;
  transition: 0.5s;
  margin-bottom: 40px;

  &::nth-child(2n) {
    margin-bottom: 0;
  }

  @media screen and (max-width: 500px) {
    filter: none;
    opacity: 1;
    margin-right: 0;
    justify-content: flex-start;
    margin-bottom: 0;
  }

  &:hover ${ClientName} {
    color: black;
  }

  &:hover ${ClientImg} {
    filter: none;
    opacity: 1;
  }
`;

const ClientWrapper = styled.div`
  background: hsla(0, 0%, 71%, 0.15);
  margin-top: 20px;
  padding: 20px 0;

  @media screen and (max-width: 500px) {
    padding: 0;
  }
`;

const ImgWrapper = styled.div`
  height: 100%;
  display: flex;
  margin: auto;
  min-height: 60px;
  align-items: center;
`;

const ClientItems = [
  {
    image: 'assets/images/client/c_i_studios.png',
    name: 'C&I Studios',
  }, {
    image: 'assets/images/client/ioradLogo.png',
    name: 'Iorad',
  }, {
    image: 'assets/images/client/taduLogo.png',
    name: 'Tadu.vn',
    height: 'auto',
  }, {
    image: 'assets/images/client/efexcon_Logo_positiv.png',
    name: 'Exfexcon',
    height: 'auto',
  },
];

const Clients = () => {
  return (
    <div className='clients-wrapper'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='section-title'>
              <h2>Our Clients</h2>
              <p>
                Writing code is our passion and making better softwares for people is the highest mission at our company
              </p>
            </div>
          </div>
        </div>
      </div>
      <ClientWrapper>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 p-2'>
              <ClientList>
                {ClientItems.map((item) => (
                  <div
                    className='col-lg-4 col-6 col-md-6 col-sm-6 justify-content-center d-flex align-items-center flex-wrap'
                    key={item.name}
                  >
                    <ClientItem>
                      <ImgWrapper>
                        <ClientImg
                          src={item.image}
                          height={item.height || ''}
                          alt={item.name}
                        />
                      </ImgWrapper>
                      <ClientName>{item.name}</ClientName>
                    </ClientItem>
                  </div>
                ))}
              </ClientList>
            </div>
          </div>
        </div>
      </ClientWrapper>
    </div>
  );
};

export default Clients;
