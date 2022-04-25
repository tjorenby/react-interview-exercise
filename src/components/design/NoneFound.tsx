import React from 'react';
import { Text, VStack } from '@chakra-ui/react';
import { School } from './images';

//Created to reinforce component standardization.
//TODO: Add Text and  Image sizing Props
export const NoneFound: React.FC<{ text: string }> = ({ text }) => {
  return (
    <VStack>
      <Text>{text}</Text>
      <School boxSize='100px' objectFit='cover' alt='school image' />
    </VStack>
  );
};
