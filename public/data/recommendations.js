import uuid from 'react-uuid';

const recommendations = [
  {
    id: uuid(),
    body: 'I have worked with Harel as a freelance developer at Antidote Health. He processes a great deal of knowledge and experience in the field of development, and always does extensive research when investigating if something can be done. Harel has great communication skills and professionalism and is always quick and efficient when completing projects. He has been a great pleasure to work with and I highly recommend him to any company looking to partner with him in development.',
    name: 'Amanda Elizabeth Cohen',
    position: 'Marketing Coordinator at Antidote Health',
    image: '/images/recommendations/elizabeth.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/amandaelizabethcrum/',
  },
  {
    id: uuid(),
    body: 'I’m finding it hard to write a review for Harel. Not because he doesn’t deserve it. The opposite. He’s so good at his job and such a pleasure to work with that I want to keep him for me and our company. He’s hard working, creative, energetic, and very knowledgable. In all honesty, I could not recommend him more highly.',
    name: 'Eitan Armon',
    position: 'Growth Manager at Lin Health',
    image: '/images/recommendations/eitan.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/eitanarmon/',
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
