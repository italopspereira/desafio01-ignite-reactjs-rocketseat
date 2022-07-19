import styles from "../components/Header.module.css";
import toDoLogo from "../assets/Logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={toDoLogo} className={styles.logo} alt="" />
    </header>
  );
}
