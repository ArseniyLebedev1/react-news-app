import { withSkeleton } from "../../helpers/hocs/withSkeleton";
import { NewsItem } from "../NewsItem";
import styles from "./styles.module.css";

const NewsList = ({ news }) => {
  return (
    <div className={styles.list}>
      {news?.map((item) => (
        <NewsItem key={item.id} item={item}/>
      ))}
    </div>
  );
};

const NewsListWithSkeleton = withSkeleton(NewsList, "item", 10)


export { NewsListWithSkeleton, NewsList };
