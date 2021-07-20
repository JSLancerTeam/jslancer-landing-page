import React from 'react';
import styled, { css } from 'styled-components';

const ListTitle = styled.h3`
  margin-bottom: 15px;
  margin-top: 40px;
`;

const TechnologyList = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: min-content;
  padding-top: 45px;
  margin-bottom: 85px;
  column-gap: 30px;
  row-gap: 30px;
`;

const TechnologyItem = styled.div<{ order?: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 185px;

  @media screen and (max-width: 500px) {
    width: auto;
    min-width: unset;
    flex-basis: 25%;
    ${props => props.order && css`
      order: ${props.order};
    `}
  }
`;

const TechnologyImage = styled.div`
  box-shadow: rgb(0 0 0 / 30%) 4px 4px 10px;
  width: 131px;
  height: 131px;
  border-radius: 100%;
  background: #00aeef;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 70%;
  }

  @media screen and (max-width: 500px) {
    width: 50px;
    height: 50px;

    img {
      max-width: 50%;
    }
  }
`;

const TechnologyName = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  margin-top: 20px;

  @media screen and (max-width: 500px) {
    font-size: 13px;
  }
`;

const frontendItems = [{
  image: 'assets/images/technology/react.svg',
  name: 'React',
}, {
  image: 'assets/images/technology/redux.svg',
  name: 'Redux',
}, {
  image: 'assets/images/technology/styled-components.svg',
  name: 'Styled-components',
  order: 1,
}, {
  image: 'assets/images/technology/javascript.svg',
  name: 'Javascript',
}, {
  image: 'assets/images/technology/typescript.svg',
  name: 'Typescript',
}, {
  image: 'assets/images/technology/graphql.svg',
  name: 'GraphQL',
}, {
  image: 'assets/images/technology/socketio.svg',
  name: 'SocketIO',
}];

const backendItems = [{
  image: 'assets/images/technology/javascript.svg',
  name: 'Javascript'
}, {
  image: 'assets/images/technology/node.svg',
  name: 'NodeJS'
}, {
  image: 'assets/images/technology/apollo.svg',
  name: 'Apollo'
}, {
  image: 'assets/images/technology/mysql.svg',
  name: 'MySQL'
}, {
  image: 'assets/images/technology/mongo.svg',
  name: 'MongoDB'
}, {
  image: 'assets/images/technology/graphql.svg',
  name: 'GraphQL',
}]

const TechnologyStack: React.FunctionComponent = () => (
  <div className="portfolio-wrapper">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title">
            <h2>Technologies</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="section-title">
            <ListTitle>Front-end</ListTitle>
            <TechnologyList>
              {frontendItems.map(item => (
                <TechnologyItem key={item.name} order={item.order}>
                  <TechnologyImage>
                    <img src={item.image} alt={item.name} />
                  </TechnologyImage>
                  <TechnologyName>{item.name}</TechnologyName>
                </TechnologyItem>
              ))}
            </TechnologyList>

            <ListTitle>Back-end</ListTitle>
            <TechnologyList>
              {backendItems.map(item => (
                <TechnologyItem key={item.name}>
                  <TechnologyImage>
                    <img src={item.image} alt={item.name} />
                  </TechnologyImage>
                  <TechnologyName>{item.name}</TechnologyName>
                </TechnologyItem>
              ))}
            </TechnologyList>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default TechnologyStack;
