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
    subtitle: 'Tutorial Builder',
    description: (
      <>
        <p>
          Iorad is a tutorial builder tool which is being used by many companies to create training tutorial videos for their employees and customers. Zappy, Zoom, Minted, and WeWork are some of their clients.
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
    numberImage: 3
  }, 
  {
    image: 'nugit',
    href: 'nugit',
    title: 'Nugit',
    subtitle: 'Nugit.co - Singapore',
    description: (
      <>
        <p>
          Nugit is a data storytelling software that lets you better understand your data by transforming it into graphs, pie charts, and line charts.
        </p>
        <p>
          <strong>What we have done:</strong>
          <br />
          JSLancer works with Nugit as a frontend development consultant. Nugit hires one of our team members as a full-time developer.
        </p>        
      </>
    ),
    aboutClient: (
      <ul>
        <li>Company: Nugit</li>
        <li>Owner: Nugit.co - Singapore</li>        
      </ul>
    ),
    technology: (
      <ul>
        <li>React</li>
        <li>NodeJS</li>
        <li>ExpressJS</li>
      </ul>
    ),
    numberImage: 2
  }, 
  {
    image: 'fivegrid',
    href: 'fivegrid',
    title: 'Fivegrid',
    subtitle: 'Fivegrid.tech - Australia',
    description: (
      <>
        <p>
          Fivegrid is a software-as-a-service platform that streamlines the activation and management of digital marketing campaigns across many channels, including search, social, and native display.
        </p>
        <p>
          <strong>What we have done:</strong>
          <br />
            For Fivegrid, JSLancer provides frontend development consulting services.
        </p>        
      </>
    ),
    aboutClient: (
      <ul>
        <li>Company: Fivegrid.tech</li>
        <li>Owner: Fivegrid.tech - Australia</li>        
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
          Crystal dashboard is a simple, elegant, and multi-purpose ReactJS dashboard that you can quickly customize for any admin dashboard project. It's completely free.
        </p>
        <p>
          The crystal dashboard can be downloaded from:{' '}
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
    image: 'usonia',
    href: 'usonia-labs-cloud-manager',
    title: 'Usonia Labs Cloud Manager',
    subtitle:
      'Usonia Labs is an online platform that allows users to manage their files more easily.',
    description: (
      <>
        <p>
          This application includes a terminal and a text editor, allowing users to edit files directly in the browser.
        </p>
        <p>
          This project also has Cloud Upload feature which is very helpful to upload or download files from Google Drive, Dropbox, iCloud and OneDrive.
        </p>
      </>
    ),
    numberImage: 3
  },
];

export default data;
