import React from 'react';
import {
  Box,
  Flex,
  Button,
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
import { DistrictResult } from './DistrictResult';

import { IState as Props } from './Home';
import { stringify } from 'querystring';

interface IProps {
  usState: Props['usState'];
  handleSelectedDistrict: Props['handleSelectedDistrict'];
  handleSchoolResults: Props['handleSchoolResults'];
}

export interface IState {}

const ResultsByStateContainer: React.FC<IProps> = ({
  usState,
  handleSelectedDistrict,
  handleSchoolResults,
}) => {
  return (
    <Flex>
      <Box>
        <Text fontSize='3xl'>{usState.name}</Text>

        <>
          {usState.districts.map((district) => {
            return (
              <div key={district.id}>
                <DistrictResult
                  district={district}
                  handleSchoolResults={handleSchoolResults}
                  handleSelectedDistrict={handleSelectedDistrict}
                />
              </div>
            );
          })}
        </>
      </Box>
    </Flex>
  );
};

export { ResultsByStateContainer };
