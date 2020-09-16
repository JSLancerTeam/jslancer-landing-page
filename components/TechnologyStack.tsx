import React from 'react';
import styled from 'styled-components';

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
`;

const TechnologyItem = styled.div`
  height: 80px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    width: 50%;
    margin-right: 0;
    margin-bottom: 50px;
    justify-content: flex-start;
  }
`;

const TechnologyImage = styled.img`
  height: 100%;
  margin-bottom: 10px;
`;

const TechnologyName = styled.div`
  text-align: center;
`;

const frontendItems = [{
  image: 'assets/images/technology/javascript.png',
  name: 'JavaScript',
}, {
  image: 'assets/images/technology/react.png',
  name: 'React',
}, {
  image: 'assets/images/technology/angular.png',
  name: 'Angular',
}, {
  image: 'assets/images/technology/chrome.png',
  name: 'Chrome Extension API',
}, {
  image: 'assets/images/technology/redux.png',
  name: 'Redux',
}];

const backendItems = [{
  image: 'assets/images/technology/nodejs.png',
  name: 'NodeJS'
}, {
  image: 'assets/images/technology/graphql.png',
  name: 'GraphQL'
}, {
  image: 'assets/images/technology/firebase.png',
  name: 'Firebase'
}, {
  image: 'assets/images/technology/mysql.png',
  name: 'MySQL'
}, {
  image: 'assets/images/technology/socketio.png',
  name: 'Socket.IO'
}, {
  image: 'assets/images/technology/redis.png',
  name: 'Redis'
}, {
  image: 'assets/images/technology/mongodb.png',
  name: 'MongoDb'
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
                <TechnologyItem key={item.name}>
                  <TechnologyImage src={item.image} alt={item.name} />
                  <TechnologyName>{item.name}</TechnologyName>
                </TechnologyItem>
              ))}
            </TechnologyList>

            <ListTitle>Back-end</ListTitle>
            <TechnologyList>
              {backendItems.map(item => (
                <TechnologyItem key={item.name}>
                  <TechnologyImage src={item.image} alt={item.name} />
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
