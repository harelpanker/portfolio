import uuid from 'react-uuid';

const projectsData = [
  {
    id: uuid(),
    image: '/images/tlv-cto.png',
    title: 'TLV CTO Club',
    url: 'https://www.tlvctoclub.com/',
    shortDescription: 'Design and built with Webflow',
  },
  {
    id: uuid(),
    image: '/images/wnf.png',
    title: "Women N' Fitness",
    url: 'https://women-n-fitness.webflow.io/',
    shortDescription: 'Design and built with Webflow | E-Commerce',
  },
  {
    id: uuid(),
    image: '/images/the-big-pic.png',
    title: 'The Bigger Picture',
    url: 'https://www.thebiggerpicturepod.com/',
    shortDescription: 'Built with Webflow from design | Podcast',
  },
  {
    id: uuid(),
    image: '/images/christianes.png',
    title: "Christiane's Farmacy",
    url: 'https://www.christiane.co/',
    shortDescription: 'Design and built with Webflow | E-Commerce',
  },
  {
    id: uuid(),
    image: '/images/ofek.png',
    title: 'Ofek | Product UX/UI Designer',
    url: 'https://www.ofekwolman.com/',
    shortDescription: 'Built with Webflow from design | Portfolio',
  },
];

export default projectsData;
