import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/contact.module.scss";

const contact = () => {
  return (
    <>
      <Head>
        <title> Contact Me | Harel Panker</title>
        <meta
          name='description'
          content='You are welcome to drop me a line in the form below or contact medirectly via my email web@panker.io'
        />
      </Head>
      <Navbar />
      <div className='pageContainer'>
        <header className={styles.header}>
          <div className='shortLine'></div>
          <h1 className='pageHeader'>Get in touch</h1>
          <h4 className={styles.text}>
            If you wanna get in touch, talk to me about a project collaboration,
            or just say hi, fill in the form below or send an email to{" "}
            <a className={styles.link} href='mailto:web@panker.io'>
              web@panker.io
            </a>{" "}
            and ~let's talk.
          </h4>
        </header>
        <main className={styles.main}>
          <form
            autocomplete='off'
            action='https://formspree.io/harelpanker@gmail.com'
            method='POST'>
            <div className={styles.inputBlock}>
              <label className={styles.label} htmlFor='name'>
                Name:
              </label>
              <input
                className={styles.input}
                type='text'
                autocomplete='off'
                name='name'
                required
                id='name'
              />
            </div>
            <div className={styles.inputBlock}>
              <label className={styles.label} htmlFor='email'>
                Email:
              </label>
              <input
                className={styles.input}
                autocomplete='off'
                type='email'
                name='_replyto'
                required
                id='email'
              />
            </div>
            <div className={styles.inputBlock}>
              <label className={styles.label} htmlFor='message'>
                Message:
              </label>
              <textarea
                className={styles.textarea}
                name='message'
                id='message'
              />
            </div>
            <button className='btn-main' type='submit'>
              Send
            </button>
          </form>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default contact;
