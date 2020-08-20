import styles from "../styles/projectHome.module.scss";

const ProjectHome = ({ name, img, liveURL }) => {
  return (
    <a
      href={liveURL}
      target='_blank'
      className={styles.project}
      style={{ backgroundImage: `url(${img})` }}>
      <div className={styles.overlay}></div>
      <h3>{name}</h3>
    </a>
  );
};

export default ProjectHome;
