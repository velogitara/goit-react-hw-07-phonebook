import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { addFilter, getFilter } from '../../redux/contacts';

const Filter = ({ title }) => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);

  const filterHandler = e => {
    dispatch(addFilter(e.currentTarget.value.toLowerCase()));
  };
  return (
    <div>
      <h3>{title}</h3>
      <label>
        <input
          type="text"
          placeholder="add something"
          onChange={filterHandler}
          value={filterValue}
        />
      </label>
    </div>
  );
};

export default Filter;

Filter.protoTypes = {
  title: PropTypes.string.isRequired,
  filter: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};
