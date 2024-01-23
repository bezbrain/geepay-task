import React from "react";
import { iconSearch } from "../../../../assets/icons/headersIcons";

const SearchInput = () => {
  return (
    <div>
      <input type="text" />
      <img src={iconSearch} alt="" />
    </div>
  );
};

export default SearchInput;
