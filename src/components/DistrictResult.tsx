import React from 'react';
import {
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
import { searchSchools } from '@utils/nces';

const DistrictResult: React.FC = ({ district }) => {
  const getSchoolResults = React.useCallback(async () => {
    const schoolResponse = await searchSchools('k', district.leid);
    console.log('schoolResponse:', schoolResponse);
  }, [searchSchools]);

  return (
    <>
      <Text onClick={getSchoolResults}>{district.name}</Text>
    </>
  );
};

export { DistrictResult };
