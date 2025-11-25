import styles from "./styles.module.css";

const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <button
          className={
            selectedCategory === category ? styles.active : styles.item
          }
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export { Categories };
