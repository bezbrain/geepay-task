import React from "react";
import { iconSearch } from "../../../../assets/icons/headersIcons";
import styles from "./search.module.css";

const SearchInput = ({ isDark }) => {
  return (
    <div className={styles.search__input}>
      <input
        type="text"
        placeholder="Search..."
        className={`${isDark ? styles.input__dark : styles.input__light}`}
      />
      <img src={iconSearch} alt="Search" />
    </div>
  );
};

export default SearchInput;
