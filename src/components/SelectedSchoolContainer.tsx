import React from 'react';
import {
  Button,
  Box,
  Flex,
  Center,
  Heading,
  Text,
  Icon,
  Input,
  ScaleFade,
  OrderedList,
  Divider,
  ListItem,
  HStack,
  VStack,
  InputRightAddon,
} from '@chakra-ui/react';
import { IState as Props } from './Home';

interface IProps {
  selectedSchool: Props['selectedSchool'];
}

const SelectedSchoolContainer: React.FC<IProps> = ({ selectedSchool }) => {
  return (
    <>
      <Heading>{selectedSchool.name}</Heading>
      <div>
        <Box>{selectedSchool.street}</Box>
        <Flex>
          <Box mr='1'>{`${selectedSchool.city},`}</Box>
          <Box mr='1'>{selectedSchool.state}</Box>
          <Box>{selectedSchool.zip}</Box>
        </Flex>
      </div>
    </>
  );
};

export { SelectedSchoolContainer };
