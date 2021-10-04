import uuid from 'react-uuid';

const recommendations = [
  {
    id: uuid(),
    body: 'A passionate web developer and a skilful designer. Delivers Top-notch websites. Highly recommended to work with!',
    name: 'Elad Grief',
    position: 'Full Stack Software Engineer at SpaceBL',
    image: '/images/recommendations/elad.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/10547626/',
  },
  {
    id: uuid(),
    body: 'A very talented and resourceful developer that I am happy to work with.',
    name: 'Shimon Tolts',
    position: 'CEO & Co-Founder at Datree, AWS Community Hero',
    image: '/images/recommendations/shimon.png',
    linkedinUrl: 'https://www.linkedin.com/in/tolts/',
  },
];

export default recommendations;
