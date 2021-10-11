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
  {
    id: uuid(),
    body: 'I have worked with Harel as a freelance developer at Antidote Health. He processes a great deal of knowledge and experience in the field of development, and always does extensive research when investigating if something can be done. Harel has great communication skills and professionalism and is always quick and efficient when completing projects. He has been a great pleasure to work with and I highly recommend him to any company looking to partner with him in development.',
    name: 'Amanda Elizabeth Cohen',
    position: 'Marketing Coordinator at Antidote Health',
    image: '/images/recommendations/elizabeth.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/amandaelizabethcrum/',
  },
];

export default recommendations;
