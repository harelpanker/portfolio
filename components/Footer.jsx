import styles from "../styles/footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h3>Panker</h3>
        </div>
        <div className={styles.socialWrapper}>
          <a href='mailto:web@panker.io' target='_blank'>
            <img src='/media-img/mail-icon.svg' alt='Mail icon' />
          </a>
          <a href='https://github.com/harelpanker' target='_blank'>
            <img src='/media-img/github-icon.svg' alt='Github icon' />
          </a>
          <a href='https://www.linkedin.com/in/panker-harel/' target='_blank'>
            <img src='/media-img/linkedin-icon.svg' alt='Linkedin' />
          </a>
        </div>
        <div className={styles.right}>
          <Link href='/about'>
            <a>About</a>
          </Link>
          <Link href='/projects'>
            <a>Projects</a>
          </Link>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
