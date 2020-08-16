import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Project from "../components/Project";
import projectsList from "../public/projects";
import Head from "next/head";

const projects = () => {
  return (
    <>
      <Head>
        <title> Projects | Harel Panker</title>
        <meta
          name='description'
          content='Here you can find list of my recent projects, mainly in React and Next.js, you can find in each of them link to the code and the live site'
        />
      </Head>
      <Navbar />
      <div className='pageContainer'>
        <header>
          <div className='shortLine'></div>
          <h1 className='pageHeader'>Projects</h1>
          <p className='text'>
            So, on this page, you will be able to browse between my projects
            some of them are part of my learning path, showing some of my
            abilities and, some are projects that I built for clients.
          </p>
        </header>
        <main>
          {projectsList.map((p) => (
            <Project {...p} key={p.id} />
          ))}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default projects;
