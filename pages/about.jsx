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
              I am a web developer & designer with 3 years of experience. I use
              the most modern tools when building websites, in order to give you
              the <strong>best product possible</strong> at an affordable price.
            </p>
            <p>
              A major focus of mine is <strong>SEO</strong>, that's how Google
              ranks your website and my goal is to give your site the highest
              ranking possible.
            </p>
            <p>
              When I build a new website, I also keep the{" "}
              <strong>user experience</strong> in mind. The goal is to keep the
              users engaged and make their experience on your website easy and
              enjoyable.
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
