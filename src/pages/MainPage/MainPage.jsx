import { getNews } from "../../api/apiNews";

import styles from "./styles.module.css";

import { useDebounce } from "../../helpers/hooks/useDebounce";
import { PAGE_SIZE } from "../../constants/constants";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";
import { LatestNews } from "../../components/LatestNews";
import { NewsByFilters } from "../../components/NewsByFilters";

const MainPage = () => {
  return (
    <main className={styles.main}>
      <LatestNews />

      <NewsByFilters />
    </main>
  );
};

export { MainPage };
