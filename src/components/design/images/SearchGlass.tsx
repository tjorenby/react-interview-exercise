import React from 'react';
import { Image } from '@chakra-ui/react';
import searchImg from './cis-efforts-glass.svg';

export const SearchGlass: React.FC<{ props: [] }> = (props) => {
  return <Image {...props} src={searchImg} />;
};
