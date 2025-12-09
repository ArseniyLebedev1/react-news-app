import styles from "./styles.module.css";

const Skeleton = ({ count = 1, type = "banner", direction = "column" }) => {
  return (
    <>
      {count > 1 ? (
        <ul
          className={
            direction === "column" ? styles.columnList : styles.rowList
          }
        >
          {[...Array(count)].map((_, index) => (
            <li
              className={type === "banner" ? styles.banner : styles.item}
              key={index}
            ></li>
          ))}
        </ul>
      ) : (
        <li className={type === "banner" ? styles.banner : styles.item}></li>
      )}
    </>
  );
};

export { Skeleton };
