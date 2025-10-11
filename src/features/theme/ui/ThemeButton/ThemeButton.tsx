import { useTheme } from "@/app/providers/ThemeProvider";
import styles from "./styles.module.css";
import { themeIcons } from "@/shared/assets";

const ThemeButton = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <img
      className={styles.root}
      src={isDark ? themeIcons.light : themeIcons.dark}
      alt=""
      width={44}
      height={44}
      onClick={toggleTheme}
    />
  );
};

export default ThemeButton;
