import styles from "../styles/project.module.scss";

const Project = (p) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={p.img} alt={p.name} />
      <div className={styles.content}>
        <div className={styles.top}>
          <h2 className={styles.projName}>{p.name}</h2>
          <p>{p.text}</p>
          <ul className={styles.ul}>
            {p.tags.map((tag, i) => (
              <li className={styles.tag} key={i}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.links}>
          <a className={styles.codeLink} href={p.codeLink} target='_blank'>
            Code
          </a>
          <a className={styles.liveSite} href={p.liveURL} target='_blank'>
            Live Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
