import styles from "./styles.module.css";

import LatestNews from "@/components/LatestNews";
import NewsByFilters from "@/components/NewsByFilters";

const Main = () => {
  return (
    <main className={styles.root}>
      <LatestNews />
      <NewsByFilters />
    </main>
  );
};

export default Main;
