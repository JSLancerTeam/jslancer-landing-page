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
    numberImage: 3
  }, 
  {
    image: 'nugit',
    href: 'nugit',
    title: 'Nugit',
    subtitle: 'Nugit.co - Singapor',
    description: (
      <>
        <p>
          Nugit is a data storytelling platform that transforms your business data into graphs, pie, and line charts and helps you understand your data better.
        </p>
        <p>
          <strong>What we have done:</strong>
          <br />
          JSLancer provides frontend development consultant service for Nugit. One developer of our team joins Nugit as a full-time developer.   
        </p>        
      </>
    ),
    aboutClient: (
      <ul>
        <li>Company: Nugit</li>
        <li>Owner: Nugit.co - Singapor</li>        
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
          Fivegrid is a SaaS product that simplifies digital marketing campaign activation and management across multiple channels including Search, Social and Native Display.
        </p>
        <p>
          <strong>What we have done:</strong>
          <br />
          JSLancer provides frontend development consultant service for Fivegrid.
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
];

export default data;
