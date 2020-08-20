import styles from "../styles/client.module.scss";

const Client = ({ name, text }) => {
  return (
    <div className={styles.client}>
      <p className={styles.text}>{text}</p>
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export default Client;
