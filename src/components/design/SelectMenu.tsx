import React from 'react';
import Select from 'react-select';

//Reusable Select Menu with a wide variety of props available. This libary was selected for
// it's type-ahead functionality
const customStyles = {
  valueContainer: (provided: {}) => {
    return {
      ...provided,
      padding: '.5rem 2rem .5rem .75rem',
    };
  },
  input: (provided: {}) => {
    return { ...provided, lineHeight: 1.25, padding: 0, margin: 2 };
  },
  control: (provided: {}) => ({
    ...provided,
    borderColor: null,
  }),
  menu: (provided: {}) => {
    return {
      ...provided,
    };
  },
};

export const SelectMenu: React.FC<{ customStyles: {} }> = (props) => {
  return <Select styles={customStyles} {...props}></Select>;
};
