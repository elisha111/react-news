import styles from "./styles.module.css";

import LatestNews from "@/pages/main/ui/LatestNews";
import NewsByFilters from "@/pages/main/ui/NewsByFilters";

const MainPage = () => {
  return (
    <main className={styles.root}>
      <LatestNews />
      <NewsByFilters />
    </main>
  );
};

export default MainPage;
