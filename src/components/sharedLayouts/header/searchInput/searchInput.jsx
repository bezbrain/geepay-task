import React from "react";
import { iconSearch } from "../../../../assets/icons/headersIcons";
import styles from "./search.module.css";

const SearchInput = () => {
  return (
    <div className={styles.search__input}>
      <input type="text" placeholder="Search..." />
      <img src={iconSearch} alt="Search" />
    </div>
  );
};

export default SearchInput;
