import styles from "../styles/about-section.module.scss";
import Link from "next/link";

const About = () => {
  return (
    <main className='section-light'>
      <div className='container-home'>
        <div className='short-divider'></div>
        <h2 className='section-header'>About</h2>
        <p className={styles.aboutText}>
          Hello, my name is <strong>Harel Panker</strong>, and I'm a Web
          Developer & Designer from Vienna Austria.
        </p>
        <p className={styles.aboutText}>
          I have extensive knowledge in frontend development, which includes
          HTML, CSS, Javascript, React and more.
        </p>
        <p className={styles.aboutText}>
          I'm always willing to learn new things, and improve my skills so I can
          deliver the best product possible.
        </p>
        <div className={styles.btnWrapper}>
          <Link href='/about'>
            <a className='btn btn-main btn-small'>Profisional Summery</a>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default About;
