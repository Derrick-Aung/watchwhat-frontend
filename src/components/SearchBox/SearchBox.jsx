import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import { InputBase, IconButton } from '@material-ui/core';
import { fetchSearchQuery } from '../../redux/search/searchActions';

const SearchBox = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [query, setQuery] = useState('');

  const handleSearchSubmit = ({ type, key }) => {
    if (
      query &&
      (type === 'click' || (type === 'keydown' && key === 'Enter'))
    ) {
      dispatch(fetchSearchQuery(history, query));
    }
  };

  return (
    <>
      <InputBase
        placeholder="Search For A Movie"
        inputProps={{ 'aria-label': 'search movies' }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => handleSearchSubmit(e)}
      />
      <IconButton
        type="submit"
        aria-label="search"
        onClick={(e) => handleSearchSubmit(e)}
      >
        <SearchIcon color="primary" />
      </IconButton>
    </>
  );
};

export default SearchBox;
