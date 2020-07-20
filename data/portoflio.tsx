import React from 'react';

export interface IData {
  image: string;
  href: string;
  title: string;
  subtitle: string;
  description: JSX.Element;
  aboutClient?: JSX.Element;
  technology?: JSX.Element;
  numberImage?: number;
  images?: Array<string>;
}

const data = [
  {
    image: 'iorad',
    href: 'iorad',
    title: 'Iorad',
    subtitle: 'Tutorial builder',
    description: (
      <>
        <p>
          Iorad is a tutorial builder tool which is using by many companies to create training tutorial videos for their employees and customers. Their customers include Zappy, Zoom, Minted, WeWork.    
        </p>
        <p>
          <strong>What we have done:</strong>
          <br />
          <ul>
            <li>Implement new interface for website</li>
            <li>API development</li>
          </ul>      
        </p>        
      </>
    ),
    aboutClient: (
      <ul>
        <li>Company: Iorad</li>
        <li>Owner: Sundeep Patel</li>        
      </ul>
    ),
    technology: (
      <ul>
        <li>React</li>
        <li>NodeJS</li>
        <li>ExpressJS</li>
        <li>Mysql</li>
      </ul>
    ),
    numberImage: 2
  },  
  {
    image: 'pullr',
    href: 'pullr',
    title: 'Pullr',
    subtitle: 'Pullr is a fund-raising platform for video game streamer.',
    description: (
      <>
        <p>
          Started in 2014, Pullr is a fund-raising platform for video game
          streamer. Using Pullr, streamer can create various kind of widgets and
          embed into their stream. Viewer can interact with these widgets and
          give donation for streamer
        </p>
        <p>
          More than that, streamer can create campaign to raise fund for
          charity.
        </p>
      </>
    ),
    aboutClient: (
      <ul>
        <li>Company: Pullr Inc</li>
        <li>Owner: Noah Ridley</li>
        <li>Location: United State</li>
      </ul>
    ),
    technology: (
      <ul>
        <li>AngularJS</li>
        <li>LESS</li>
        <li>Gulp</li>
        <li>Laravel</li>
      </ul>
    ),
    numberImage: 3
  },
  {
    image: 'crystal-dashboard',
    href: 'react-bootstrap-admin-dashboard',
    title: 'Crystal Dashboard',
    subtitle:
      'Build on top of React and Bootstrap by top engineers from our team.',
    description: (
      <>
        <p>
          Crystal dashboard is a minimal, beautiful, multi-purpose ReactJS that
          you can easily to modify to use any admin dashboard project. It's
          complete free.
        </p>
        <p>
          You can download at here:{' '}
          <a
            href="https://github.com/JSLancerTeam/crystal-dashboard"
            target="_blank"
          >
            https://github.com/JSLancerTeam/crystal-dashboard
          </a>
        </p>
        <p>
          Live preview:{' '}
          <a
            href="https://jslancerteam.github.io/crystal-dashboard"
            target="_blank"
          >
            https://jslancerteam.github.io/crystal-dashboard
          </a>
        </p>
      </>
    ),
    numberImage: 2
  },
  {
    image: 'the-indie',
    href: 'the-indie',
    title: 'The Indie',
    subtitle: 'The Indie is a music platform for indie music artist',
    description: (
      <p>
        It helps indie music artist publish and promote their music to the
        world. This platform consists a music website and a mobile app to
        download and listen music.
      </p>
    ),
    aboutClient: (
      <ul>
        <li>Client name: Damon Cleveland</li>
        <li>Location: United State</li>
      </ul>
    ),
    technology: (
      <ul>
        <li>Angular 2</li>
        <li>Webpack</li>
        <li>SASS</li>
      </ul>
    ),
    numberImage: 2
  },
  {
    image: 'oneclicktrips',
    href: '1clicktrips',
    title: '1ClickTrips',
    subtitle: '1ClickTrips is tool to search, plan and manage your trips.',
    description: (
      <p>
        1Click is a trip search engine. User just needs toenter your appointment
        data and get the best itinerary options including car, public transport,
        flight and accommodation in seconds.
      </p>
    ),
    aboutClient: (
      <ul>
        <li>Client name: Efexcon</li>
        <li>Location: Zug, Switzerland</li>
      </ul>
    ),
    technology: (
      <ul>
        <li>AngularJS</li>
        <li>Webpack</li>
        <li>Typescript</li>
        <li>ExpressJS</li>
        <li>MongoDB</li>
        <li>Passport</li>
      </ul>
    ),
    numberImage: 3
  },
  {
    image: 'usonia',
    href: 'usonia-labs-cloud-manager',
    title: 'Usonia Labs Cloud Manager',
    subtitle:
      'Usonia Labs is an online tool which helps user easily to manage files in their system.',
    description: (
      <>
        <p>
          This application is packed with a terminal and text editor so user can
          edit their files right in the browser.
        </p>
        <p>
          This project also has Cloud Upload feature which is very helpful to
          upload or download files from Google Drive, Dropbox, iCloud and
          OneDrive.
        </p>
      </>
    ),
    numberImage: 3
  },
  {
    image: 'vtsale',
    href: 'vtsale',
    title: 'VT Sale',
    subtitle: 'POS dashboard',
    description: (
      <>
        <p>
          VTSale is a web application to mananage sale, import, export and
          invoice for small business
        </p>
      </>
    ),
    technology: (
      <ul>
        <li>ReactJS</li>
        <li>Webpack</li>
        <li>Typescript</li>
        <li>ExpressJS</li>
        <li>MongoDB</li>
      </ul>
    ),
    numberImage: 4,
  }
];

export default data;
