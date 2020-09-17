import React from 'react';
import styled from 'styled-components';

const ClientImg = styled.img`
  height: 60px;
  filter: grayscale(100%);
  filter: gray;
  opacity: 0.7;
  transition: 0.9s;
  &:hover {
    filter: none;
    opacity: 1;
  }
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
`;
const ClientItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
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
`;

const ClientName = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const ClientWrapper = styled.div`
  background: hsla(0, 0%, 71%, 0.15);
`;

const ClientItems = [
  {
    image: 'assets/images/client/c_i_studios.png',
    name: 'C&I Studios',
  },
  {
    image: 'assets/images/client/ioradLogo.png',
    name: 'Iorad',
  },
  {
    image: 'assets/images/client/taduLogo.png',
    name: 'Tadu Phone',
  },

  {
    image: 'assets/images/client/efexcon_Logo_positiv.png',
    name: 'Exfexcon',
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
                    className='col-3 d-flex align-items-center flex-wrap'
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
