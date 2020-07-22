import { useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

import Link from "next/link";
import styles from "../styles/navbar.module.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const { width } = useWindowDimensions();
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href='/'>
          <h2>Panker</h2>
        </Link>
        {width < 768 ? (
          <>
            <div className={open ? styles.navDrawer : styles.navDrawerCloased}>
              <ul className={styles.listMobile}>
                <li>
                  <Link href='/about'>
                    <a
                      className={styles.link}
                      style={{ animationDelay: "0.4s" }}>
                      About
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/projects'>
                    <a
                      className={styles.link}
                      style={{ animationDelay: "0.6s" }}>
                      Projects
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/contact'>
                    <a
                      className={styles.link}
                      style={{ animationDelay: ".8s" }}>
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.hamburgerWrapper} onClick={handleOpen}>
              <div className={styles.lineTop}></div>
              <div className={styles.lineBottom}></div>
            </div>
          </>
        ) : (
          <ul className={styles.listDesktop}>
            <li>
              <Link href='/about'>
                <a className={styles.link}>About</a>
              </Link>
            </li>
            <li>
              <Link href='/projects'>
                <a className={styles.link}>Projects</a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a className={styles.link}>Contact</a>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
