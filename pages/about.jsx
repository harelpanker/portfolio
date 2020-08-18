import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/about.module.scss";
import Head from "next/head";
import skills from "../public/skills";

const about = () => {
  return (
    <>
      <Head>
        <title>About Me | Harel Panker</title>
        <meta
          name='description'
          content='Here you can finde more about my expiriance as a front end web developer, my knolage and lenguges that i know'
        />
      </Head>
      <Navbar />
      <div className='pageContainer'>
        <header>
          <div className='shortLine'></div>
          <h1 className='pageHeader'>About</h1>
        </header>
        <main className={styles.container}>
          <section className='text'>
            <p>
              Hi! My name is <strong>Harel</strong> and I'm a front-end web
              developer from Vienna, Austria.
            </p>
            <p>
              I studied at the Technion - the Israel Institute of Technology -
              and since then have worked in the private sector as a freelancer.
            </p>
            <p>
              I have a wide knowledge of the basics of web development:{" "}
              <strong>HTML, CSS, and Javascript</strong>.
            </p>
            <p>
              In addition, I have specialized knowledge in{" "}
              <strong>
                SACC/SCSS, Material-UI, Bootstrap, React.js, and Next.js
              </strong>
              .
            </p>
            <p>
              When it comes to building websites for my clients, I generally use{" "}
              <strong>Webflow</strong>, which is a powerful CMS{" "}
              <span className={styles.smallText}>
                (Content Management System)
              </span>{" "}
              offering a complete solution in designing, building, and hosting
              websites.
            </p>
            <p>
              Other things worth mentioning:{" "}
              <ul>
                <li>
                  I follow the best <strong>SEO</strong>{" "}
                  <span className={styles.smallText}>
                    (Search Engine Optimization)
                  </span>{" "}
                  practice, which means that I write a{" "}
                  <strong>semantic code</strong>, handle everything that Google
                  loves to see in websites, and connect the websites to Google
                  platforms.
                </li>
                <li>
                  I follow <strong>UI/UX</strong>{" "}
                  <span className={styles.smallText}>
                    (User Interface / User Experience)
                  </span>{" "}
                  principles, meaning that the websites I build will be more
                  pleasant to use and more engaging.
                </li>
              </ul>
            </p>
          </section>

          <section className={styles.skilles}>
            <div className={styles.skillesHeader}>
              <h2>Skills & Tools:</h2>
            </div>
            <div className={styles.skillesList}>
              <ul>
                {skills.map((skill) => (
                  <li key={skill.id}>
                    <img
                      className={styles.skillImg}
                      src={skill.img}
                      alt={skill.name}
                    />
                    <h4>{skill.name}</h4>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default about;
