import React from 'react';
import { Image } from '@chakra-ui/react';
import schoolImg from './school-logo.svg';

export const School: React.FC<{ props: [] }> = (props) => {
  return <Image {...props} src={schoolImg} />;
};
