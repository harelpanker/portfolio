import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import clientsList from "../public/clients";
import styles from "../styles/index.module.scss";
import Client from "../components/Client";
import Flicking from "@egjs/react-flicking";

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Harel Panker | Front End Web Developer | UX/UI | SEO</title>
        <meta
          name='description'
          content="My name is Harel Panker and I'm a Front End web developer some of my skills involved HTML, CSS\SCSS, Javascript, React, SEO, UX/UI and more | This is my web app portfolio"
        />
        {/* Google site verification */}
        <meta
          name='google-site-verification'
          content='8Yg4JzMAMGU8vRGcu4gui1sbSiuIJNxIjw5Umau9Zr8'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <header className={styles.header}>
        <div className={styles.mainHeader}>
          <h1>Hi! My name is Harel & I'm a Web Developer</h1>
        </div>
        <h2 className={styles.seconderyHeader}>
          <div className={styles.sliderContainer}>
            <div className={styles.words}>
              <span className={styles.sliderItem}>HTML - CSS</span>
              <span className={styles.sliderItem}>SCSS / SASS</span>
              <span className={styles.sliderItem}>Javascript</span>
              <span className={styles.sliderItem}>React - Next.js</span>
              <span className={styles.sliderItem}>Wordpress</span>
              <span className={styles.sliderItem}>Webflow</span>
              <span className={styles.sliderItem}>UX/UI | SEO</span>
            </div>
          </div>
        </h2>
        <div className={styles.btnWrapper}>
          <Link href='/projects'>
            <a className='btn-main'>Projects</a>
          </Link>
          <Link href='/about'>
            <a className='btn-secondery'>About</a>
          </Link>
        </div>
      </header>

      {/* <section>
        <Flicking
          className='flicking flicking0'
          gap={10}
          circular={true}
          moveType='freeScroll'>
          {clientsList.map((client) => (
            <Client key={client.id} {...client} />
          ))}
        </Flicking>
      </section> */}

      <Footer />
    </div>
  );
}
