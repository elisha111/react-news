import styles from "./styles.module.css";

const Search = (props) => {
  const { keywords, setKeywords } = props;

  return (
    <div className={styles.root}>
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
