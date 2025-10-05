import { formatDate } from "@/helpers/formatDate";
import styles from "./styles.module.css";
import { themeIcons } from "@/assets";
import { useTheme } from "@/context/ThemeContext";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className={`${styles.root} ${isDark ? styles.dark : styles.light}`}>
      <div className={styles.info}>
        <h1 className={styles.title}>NEWS REACTIFY</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>
      <img
        className={styles.iconTheme}
        src={isDark ? themeIcons.light : themeIcons.dark}
        alt=""
        width={44}
        height={44}
        onClick={toggleTheme}
      />
    </header>
  );
};

export default Header;
