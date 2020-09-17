import React from 'react';
import styled from 'styled-components';

const ClientImg = styled.img`
  height: 45px;
  filter: grayscale(100%);
  filter: gray;
  opacity: 0.7;

  @media screen and (max-width: 500px) {
    filter: none;
    opacity: 1;
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
  margin-top: 20px;
  font-size: 20px;
  color: gray;

  &:hover {
    color: black;
  }
`;

const ClientItem = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px 20px;
  width: 100%;
  transition: 0.5s;

  @media screen and (max-width: 500px) {
    width: 50%;
    filter: none;
    opacity: 1;
    margin-right: 0;
    margin-bottom: 50px;
    justify-content: flex-start;
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
`;

const ClientItems = [
  {
    image: 'assets/images/client/efexcon_Logo_positiv.png',
    name: 'Exfexcon',
  },
  {
    image: 'assets/images/client/ioradLogo.png',
    name: 'Iorad',
  },
  {
    image: 'assets/images/client/taduLogo.png',
    name: 'Tadu.vn',
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
            <div className='col-md-12'>
              <ClientList>
                {ClientItems.map((item) => (
                  <div
                    className='col-4 d-flex align-items-center'
                    key={item.name}
                  >
                    <ClientItem>
                      <ClientImg src={item.image} alt={item.name} />
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
