import React from 'react';
import Select from 'react-select';

export const SelectMenu: React.FC<{ options: []; onChange: () => void }> = (
  props
) => {
  return <Select {...props}></Select>;
};
