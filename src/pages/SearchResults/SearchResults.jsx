import React from 'react';
import { useLocation } from 'react-router-dom';
import { Title } from './SearchResults.styled';

const SearchResults = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const searchParam = searchParams.get('q');
  console.log(searchParam);
  return <Title>No product found</Title>;
};

export default SearchResults;
