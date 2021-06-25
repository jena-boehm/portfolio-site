/* eslint-disable max-len */
export default [
  {
    id: '1',
    name: 'Sonic Blooming',
    description: 'An interactive app for a soundwalk installation at the Portland International Rose Test Garden. Compositions were created by artist Crystal Cortez from electrical impulse data read by sensors and collected from various plants in a process called "Biodata Sonification." I helped create the website that allows users to navigate the gardens and listen to these compositions, collaborating remotely with another engineer, Mikey Romay.',
    myContributions: 'As the lead designer, I used React, Context API, and CSS to build UI components, create a seamless user experience, and ensure mobile/browser compatibility.',
    deployed: 'https://www.sonicblooming.com/', 
    github: 'https://github.com/mikeymasonic/sonicBlooming',
    technologies: 'JavaScript | React | CSS | Context API | p5.js | Web Audio API | Google Drive API',
    image: '../public/images/sonic-blooming.png'
  },
  {
    id: '2',
    name: 'Flourish',
    description: 'A fullstack app to help novice plant owners navigate the nursery and learn how to care for their plants. Users can search by text or photo to identify a plant and get detailed information on care. They can add plants to their collection, log care history and add custom notes. Developed with a team of 4 other engineers.',
    myContributions: 'My contributions were building authentication on the backend and frontend, using GraphQL queries on the frontend to render data, and constructing UI components.',
    deployed: 'https://flourish-pro.netlify.app/', 
    github: 'https://github.com/FlourishTeam',
    demo: '',
    technologies: 'React | Context API | CSS | Node.js | PostgreSQL | Express.js | GraphQL | Heroku',
    image: '../public/images/flourish.png'
  },
  {
    id: '3',
    name: 'Traktion',
    description: 'An innovative backend SMS-based app that helps users form new habits. Facial and object recognition technology is used to verify the user\'s face and items related to their habit before confirming completion. Developed with a team of 5 other engineers.',
    myContributions: 'My main contributions were the services files and methods that brought all our technologies together, as well as AWS Rekognition functions that verify the user\'s habit completion submissions.',
    github: 'https://github.com/Alchemy-Traction/traction',
    demo: '',
    technologies: 'NodeJS | PostgreSQL | ExpressJS | AWS Rekognition | Twilio | Heroku',
    image: '../public/images/traktion.png'
  },
  {
    id: '4',
    name: 'Aurora Synth',
    description: 'A design-driven browser synthesizer built in a 5 day sprint using Vanilla JavaScript, HTML, and CSS. The user has the ability to play the synthesizer solo or with a pre-recorded beat, as well as choose between the different waveforms: sine, square, triangle, and sawtooth. Developed with a team of 3 other engineers.',
    myContributions: 'My main contributions were the app design and visualizer, in addition to the AudioContext start/stopSound functions and low-pass filter.',
    deployed: 'https://bryanakitchen.github.io/aurora/', 
    github: 'https://github.com/jena-boehm/aurora',
    demo: '',
    technologies: 'Vanilla JavaScript | HTML | CSS | Web Audio API',
    image: '../public/images/aurora-synth.png'
  }
];