import styles from "./styles.module.css";

import LatestNews from "./LatestNews";
import NewsByFilters from "./NewsByFilters";

const Main = () => {
  return (
    <main className={styles.root}>
      <LatestNews />
      <NewsByFilters />
    </main>
  );
};

export default Main;
