import React from 'react';
import { SearchForm } from './SearchForm';
import { IState as Props } from './Home';
import { searchSchoolDistricts, searchSchools } from '@utils/nces';
import { US_STATE } from '../enums';

interface IProps {
  handleSearching: Props['handleSearching'];
  handleDistrictResults: Props['handleDistrictResults'];
  handleSchoolResults: Props['handleSchoolResults'];
}

export interface IState {
  onSubmit: (value: object) => void;
}

const SearchContainer: React.FC<IProps> = ({
  handleSearching,
  handleDistrictResults,
  handleSchoolResults,
}) => {
  const usStates = Object.entries(US_STATE).map(([stateKey, stateValue]) => {
    return {
      key: stateKey,
      value: stateValue.name,
    };
  });

  const getSchoolResults = React.useCallback(
    async (districts: []) => {
      console.log('districts in getSchool:', districts);
      const schoolResponse = await searchSchools('k', districts[1].LEAID);
      console.log('schoolResponse:', schoolResponse);
    },
    [searchSchools]
  );

  const getDistrictResults = React.useCallback(
    async (value: string) => {
      const response = await searchSchoolDistricts(value);

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

      handleSearching(false);
      //setDistrictSearch(response);
    },
    [searchSchoolDistricts]
  );

  const onSubmit = React.useCallback(
    (values: object) => {
      handleSearching(true);
      const districtOnly = values.district && !values.school;
      const schoolOnly = values.school && !values.district;

      if (districtOnly) {
        getDistrictResults(values.district);
      } else if (schoolOnly) {
        console.log('query school only');
      }
    },
    [handleSearching, getDistrictResults]
  );

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
    </>
  );
};

export default SearchContainer;
