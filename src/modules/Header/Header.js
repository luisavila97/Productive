import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>🕓 Productive</h1>
      <p>Keep track of your tasks...</p>
    </div>
  );
};

export default Header;
