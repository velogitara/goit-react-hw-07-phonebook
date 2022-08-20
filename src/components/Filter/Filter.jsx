import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, addFilter } from '../../redux/store';

const Filter = ({ title }) => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);

  const filterHandler = e => {
    // console.log(e.currentTarget.value);
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
