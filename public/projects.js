import uuid from "react-uuid";
const projectsList = [
  {
    id: uuid(),
    name: "Weather App",
    img: "./projects-img/weather-app.png",
    text:
      "Weather app, using React hooks and useEfect to fetch data from an API",
    tags: ["React", "API"],
    codeLink: "https://github.com/harelpanker/react-weather",
    liveURL: "https://react-weather-rose.vercel.app/",
  },
  {
    id: uuid(),
    name: "Breaking Bad Index",
    img: "./projects-img/breaking-bad-app.png",
    text:
      "Breaking bad index of characters, using useEfect to fetch data from an API, and a search bar with auto-filter",
    tags: ["React", "API", "Filter"],
    codeLink: "https://github.com/harelpanker/breaking-bad",
    liveURL: "https://breaking-bad-six.vercel.app/",
  },
  {
    id: uuid(),
    name: "To Do App",
    img: "./projects-img/todo-app.png",
    text:
      "Good old/new Todo app, an example of CRUD aplication build with Material-UI",
    tags: ["Next.js", "CRUD", "Material-UI"],
    codeLink: "https://github.com/harelpanker/todo-next",
    liveURL: "https://todo-next-tau.vercel.app/",
  },
  {
    id: uuid(),
    name: "Recipe App",
    img: "./projects-img/recipe-app.png",
    text:
      "Recipe app using API, with the ability to search for new recipes, built with Material-UI",
    tags: ["React", "API", "Material-UI", "Search"],
    codeLink: "https://github.com/harelpanker/recipe-app-react",
    liveURL: "https://recipe-app-react-blue.vercel.app/",
  },
  {
    id: uuid(),
    name: "Expense Tracker App",
    img: "./projects-img/expanse-tracker.png",
    text: "Expanse tracker app, built with Next.js",
    tags: ["Next.js", "CRUD"],
    codeLink: "https://github.com/harelpanker/expense-tracker",
    liveURL: "https://expense-tracker-theta.vercel.app/",
  },
  {
    id: uuid(),
    name: "Old Age Home",
    img: "./projects-img/old-age-home.jpeg",
    text: "An index site with advanced filtering made for a client in Webflow",
    tags: ["Webflow", "Advanced Filtering", "RTL", "Index Site"],
    liveURL: "https://www.parentshome.co.il/",
  },
];
export default projectsList;
