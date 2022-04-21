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
import { SearchForm } from './SearchForm';
import { IState as Props } from './Home';
import {
  searchSchoolDistricts,
  searchSchools,
  NCESDistrictFeatureAttributes,
  NCESSchoolFeatureAttributes,
} from '@utils/nces';

interface IProps {
  handleSearching: Props['handleSearching'];
}

export interface IState {
  onSubmit: (value: object) => void;
}

const SearchContainer: React.FC<IProps> = ({ handleSearching }) => {
  const [districtSearch, setDistrictSearch] = React.useState<
    NCESDistrictFeatureAttributes[]
  >([]);
  const [schoolSearch, setSchoolSearch] = React.useState<
    NCESSchoolFeatureAttributes[]
  >([]);

  const onSubmit = React.useCallback(
    (values: object) => {
      handleSearching(true);
      console.log('values:', values);
    },
    [handleSearching]
  );

  //
  const demo = async () => {
    // see console for api result examples
    handleSearching(true);
    const demoDistrictSearch = await searchSchoolDistricts(
      'Peninsula School District'
    );
    setDistrictSearch(demoDistrictSearch);
    console.log('District example', demoDistrictSearch);

    const demoSchoolSearch = await searchSchools(
      'k',
      demoDistrictSearch[1].LEAID
    );
    setSchoolSearch(demoSchoolSearch);
    console.log('School Example', demoSchoolSearch);
    handleSearching(false);
  };

  //   React.useEffect(() => {
  //     demo();
  //   }, []);

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
    </>
  );
};

export default SearchContainer;
