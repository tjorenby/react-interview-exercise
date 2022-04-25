import React from 'react';
import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { IState as Props } from './SelectedDistrictContainer';

interface IProps {
  selectedSchool: Props['selectedSchool'];
}

const SelectedSchoolContainer: React.FC<IProps> = ({ selectedSchool }) => {
  return (
    <Box>
      {selectedSchool.id && (
        <Box>
          <Center>
            <Text fontSize='xl'>{selectedSchool?.name}</Text>
          </Center>
          <Center>
            <Box>
              <Box>{selectedSchool.street}</Box>
              <Flex>
                <Box mr='1'>{`${selectedSchool.city},`}</Box>
                <Box mr='1'>{selectedSchool.state}</Box>
                <Box>{selectedSchool.zip}</Box>
              </Flex>
            </Box>
          </Center>
        </Box>
      )}
    </Box>
  );
};

export { SelectedSchoolContainer };
