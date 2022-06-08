import React from "react";
import { FormContainer, SearchButton, SearchInput } from "./SearchBar.styled";
import { ReactComponent as SearchIcon } from "assets/svg/search.svg";
import PropTypes from "prop-types";

const SearchBar = ({ placeholder = "Search", onSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const input = event.target.elements[0];
    onSearch(input.value);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <SearchInput placeholder={placeholder} />
      <SearchButton type="submit">
        <SearchIcon />
      </SearchButton>
    </FormContainer>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
