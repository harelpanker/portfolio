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
              Hi! My name is <strong>Harel</strong>, and I'm a front-end web
              developer from Vienna, Austria.
            </p>
            <p>
              I study in the Technion | Israel Institute of Technology, and
              since then worked in the privet sector as a freelancer.
            </p>
            <p>
              I'm caring with me wide knowledge in the basics of web
              development: <strong>HTML, CSS, and Javascript</strong>.
            </p>
            <p>
              More than that, I also know{" "}
              <strong>
                SACC/SCSS, Material-UI, Bootstrap, React.js, and Next.js
              </strong>
              .
            </p>
            <p>
              When it comes to building websites to everyday business, I prefer
              doing so with <strong>Webflow</strong>, which is a powerful CMS{" "}
              <span className={styles.smallText}>
                (Content Management System)
              </span>{" "}
              that gives me a complete solution to design, built, and host the
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
                  <strong>semantic code</strong>, and handle everything that
                  Google loves to see in websites, including Robots.txt,
                  Sitemap.xml, Title and Meta Description, and connecting the
                  websites to Google Search Console and Google Analytics.
                </li>
                <li>
                  I'm following the <strong>UI/UX</strong>{" "}
                  <span className={styles.smallText}>
                    (User Interface / User Experience)
                  </span>{" "}
                  principles, meaning that the websites I'm building will be
                  more pleasant to use and more engageable.
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
