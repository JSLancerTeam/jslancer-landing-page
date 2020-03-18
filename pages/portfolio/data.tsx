import React from 'react';

export interface IData {
  image: string;
  href: string;
  title: string;
  subtitle: string;
  description: JSX.Element;
  aboutClient?: JSX.Element;
  technology?: JSX.Element;
  numberImage: number;
}

const data = [
  {
    image: 'pullr',
    href: 'pullr',
    title: 'Pullr',
    subtitle: 'Pullr is a fund-raising platform for video game streamer.',
    description: (
      <p>
        This platform helps streamers enhance their streaming video by various
        widgets from Pullr. Streamers also receive donate from viewers viaPullr
        payment system.
      </p>
    ),
    aboutClient: (
      <div>
        <span>Company: Pullr Inc</span>
        <span>Owner: Noah Ridley</span>
        <span>Location: United State</span>
      </div>
    ),
    technology: (
      <div>
        <span>AngularJS</span>
        <span>LESS</span>
        <span>Gulp</span>
      </div>
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
          Crystal dashboard is a minimal, beautiful, multi-purpose that you can
          easily to modify to use any admin dashboard project. It's complete
          free.
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
      <div>
        <span>Client name: Damon Cleveland</span>
        <span>Location: United State</span>
      </div>
    ),
    technology: (
      <div>
        <span>Angular 2</span>
        <span>Webpack</span>
        <span>SASS</span>
      </div>
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
        Just enter your appointment data and get the best itinerary options
        including car, public transport, flight and accommodation in seconds.
      </p>
    ),
    aboutClient: (
      <div>
        <span>Client name: Efexcon</span>
        <span>Location: Zug, Switzerland</span>
      </div>
    ),
    technology: (
      <div>
        <span>AngularJS</span>
        <span>Webpack</span>
        <span>Typescript</span>
        <span>ExpressJS</span>
        <span>MongoDB</span>
        <span>Passport</span>
      </div>
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
  }
];

export default data;
