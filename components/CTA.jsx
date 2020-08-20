import Link from "next/link";
import styles from "../styles/CTA.module.scss";

const CTA = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <h2 className={styles.text}>Let's Work Together</h2>
          <Link href='/contact'>
            <a className={styles.btn}>Contact Me</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
