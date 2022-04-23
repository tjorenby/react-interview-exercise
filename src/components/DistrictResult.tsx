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
import { IState as Props } from './Home';

interface IProps {
  handleSchoolResults: Props['handleSchoolResults'];
  handleSelectedDistrict: Props['handleSelectedDistrict'];
}

const DistrictResult: React.FC<IProps> = ({
  district,
  handleSchoolResults,
  handleSelectedDistrict,
}) => {
  const getSchoolResults = React.useCallback(async () => {
    const response = await searchSchools('k', district.leid);
    //console.log('schoolResponse:', response);
    const schoolObjects = response.map((school) => {
      return {
        id: school.LEAID,
        name: school.NAME,
        street: school.STREET,
        city: school.CITY,
        state: school.STATE,
        zip: school.ZIP,
      };
    });

    handleSchoolResults(schoolObjects);
  }, [searchSchools]);

  const onSelect = React.useCallback(() => {
    handleSelectedDistrict(district);
    getSchoolResults();
  }, [handleSelectedDistrict, getSchoolResults]);

  return (
    <>
      <Text onClick={onSelect}>{district.name}</Text>
    </>
  );
};

export { DistrictResult };
