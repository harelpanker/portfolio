import uuid from 'react-uuid';

const skillsData = [
  {
    id: uuid(),
    icon: '/icons/tools.svg',
    title: 'Tools',
    items: [
      { id: uuid(), name: 'Figma' },
      { id: uuid(), name: 'Webflow' },
    ],
  },
  {
    id: uuid(),
    icon: '/icons/JS.svg',
    title: 'Basic',
    items: [
      { id: uuid(), name: 'HTML' },
      { id: uuid(), name: 'CSS / SCSS' },
      { id: uuid(), name: 'JavaScript' },
    ],
  },
  {
    id: uuid(),
    icon: '/icons/book.svg',
    title: 'Extra',
    items: [
      { id: uuid(), name: 'User Interface (UI)' },
      { id: uuid(), name: 'User Experience (UX)' },
      { id: uuid(), name: 'Search Engine Optimization (SEO)' },
    ],
  },
  {
    id: uuid(),
    icon: '/icons/react.svg',
    title: 'Fraimworks / Liberrars',
    items: [
      { id: uuid(), name: 'React.js' },
      { id: uuid(), name: 'NextJS' },
      { id: uuid(), name: 'Styled-Components' },
      { id: uuid(), name: 'Tailwind CSS' },
      { id: uuid(), name: 'Material-UI' },
      { id: uuid(), name: 'Framer Motion' },
    ],
  },
  {
    id: uuid(),
    icon: '/icons/target.svg',
    title: 'What Next?',
    items: [
      { id: uuid(), name: 'GraphQL' },
      { id: uuid(), name: 'TypeScript' },
    ],
  },
];

export default skillsData;
