import React, { useState } from "react";
import { iconSearch } from "../../../../assets/icons/headersIcons";
import styles from "./search.module.css";

const SearchInput = ({ isDark }) => {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <>
      <div className={styles.search__input}>
        <input
          type="text"
          placeholder="Search..."
          className={`${isDark ? styles.input__dark : styles.input__light}`}
        />
        <img
          src={iconSearch}
          alt="Search"
          onClick={() => setIsSearch(!isSearch)}
        />
      </div>
      <div className={styles.toggle__input}>
        {isSearch && <input type="text" placeholder="Search..." />}
      </div>
    </>
  );
};

export default SearchInput;
