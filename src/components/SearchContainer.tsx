import React from 'react';
import { Box, Center, Text } from '@chakra-ui/react';
import { SearchForm } from './SearchForm';
import { searchSchoolDistricts } from '@utils/nces';
import { US_STATE } from '../enums';
import { IState as Props } from './Home';

interface IProps {
  handleSearching: Props['handleSearching'];
  handleDistrictResults: Props['handleDistrictResults'];
  handleSelectedDistrict: Props['handleSelectedDistrict'];
  resetResults: Props['resetResults'];
}

export interface IState {
  onSubmit: (value: { district: string }) => void;
}

const SearchContainer: React.FC<IProps> = ({
  handleSearching,
  handleDistrictResults,
  handleSelectedDistrict,
  resetResults,
}) => {
  const usStates = Object.entries(US_STATE).map(([stateKey, stateValue]) => {
    return {
      key: stateKey,
      value: stateValue.name,
    };
  });

  const getDistrictResults = React.useCallback(
    async (value: string) => {
      const response = await searchSchoolDistricts(value);

      //Grab pertinent-fields-only
      const districtObjects = response.map((district) => {
        return {
          id: district.OBJECTID,
          leid: district.LEAID,
          name: district.NAME,
          street: district.LSTREE,
          city: district.LCITY,
          state: district.LSTATE,
          zip: district.LZIP,
        };
      });

      // Sort results by US State in order to provide context for user
      const resultsByState = usStates
        .map((usState) => {
          return {
            name: usState.value,
            districts: districtObjects.filter(
              (district) => district.state === usState.key
            ),
          };
        })
        .filter((result) => result.districts.length > 0);

      handleDistrictResults(resultsByState);

      if (resultsByState.length > 0) {
        //Set a default selection on component load.
        const defaultSelection = resultsByState[0].districts[0];
        handleSelectedDistrict(defaultSelection);
      }

      handleSearching(false);
    },
    [
      searchSchoolDistricts,
      handleSearching,
      handleDistrictResults,
      handleSelectedDistrict,
    ]
  );

  const onSubmit = React.useCallback(
    (values: { district: string }) => {
      resetResults();
      handleSearching(true);
      getDistrictResults(values.district);
    },
    [resetResults, handleSearching, getDistrictResults]
  );

  return (
    <Box>
      <Center>
        <Box display='flex' fontSize='48px'>
          <Box>
            <Text color='brand.red' fontWeight='bold' mr='1' mb='2'>
              School
            </Text>
          </Box>
          <Box>
            <Text>Finder</Text>
          </Box>
        </Box>
      </Center>
      <Center>
        <SearchForm onSubmit={onSubmit} />
      </Center>
    </Box>
  );
};

export default SearchContainer;
