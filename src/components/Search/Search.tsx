import { useTheme } from "@/context/ThemeContext";
import styles from "./styles.module.css";

type SearchPropsType = {
  keywords: string;
  setKeywords: (keywords: string) => void;
};

const Search = (props: SearchPropsType) => {
  const { keywords, setKeywords } = props;

  const { isDark } = useTheme();

  return (
    <div className={`${styles.root} ${isDark ? styles.dark : styles.light}`}>
      <input
        className={styles.input}
        type="text"
        value={keywords}
        placeholder="JavaScript"
        onChange={(event) => setKeywords(event.target.value)}
      />
    </div>
  );
};

export default Search;
