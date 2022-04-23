import React from 'react';
import {
  Button,
  Box,
  Center,
  Container,
  Heading,
  Text,
  Icon,
  Input,
  ScaleFade,
  OrderedList,
  Divider,
  ListItem,
  Spinner,
  InputGroup, // Some Chakra components that might be usefull
  HStack,
  VStack,
  InputRightAddon,
  Flex,
} from '@chakra-ui/react';
import { Card } from './design';
import SearchContainer from './SearchContainer';
import { ResultsByStateContainer } from './ResultsByStateContainer';
import { SelectedDistrictContainer } from './SelectedDistrictContainer';
import { SelectedSchoolContainer } from './SelectedSchoolContainer';

export interface IState {
  handleSearching: (value: boolean) => void;
  handleDistrictResults: (value: []) => void;
  handleSchoolResults: (value: []) => void;
  handleSelectedDistrict: (value: {}) => void;
  handleSelectedSchool: (value: {}) => void;
  resetResults: () => void;
  districtResults: [
    {
      usState: {
        name: string;
        districts: [
          district: {
            city: string;
            id: number;
            leid: string;
            name: string;
            state: string;
            street: string;
            zip: string;
          }
        ];
      };
    }
  ];

  schoolResults: [
    {
      id: string;
      name: string;
      street: string;
      city: string;
      state: string;
      zip: string;
    }
  ];
  selectedDistrict: {
    id: number;
    name: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    leid: string;
  };
  selectedSchool: {
    id: string;
    name: string;
    street: string;
    city: string;
    state: string;
    zip: string;
  };
}

const Home: React.FC = () => {
  const [searching, setSearching] = React.useState<boolean>(false);
  const [districtResults, setDistrictResults] = React.useState<[]>();
  const [schoolResults, setSchoolResults] = React.useState<[]>();
  const [selectedDistrict, setSelectedDistrict] = React.useState<{}>();
  const [selectedSchool, setSelectedSchool] = React.useState<{}>({});

  const resetResults = () => {
    setSelectedSchool({});
    setSelectedDistrict({});
    setSchoolResults([]);
    setDistrictResults([]);
  };

  const handleSearching = (value: boolean) => {
    setSearching(value);
  };

  const handleDistrictResults = (value: []) => {
    setDistrictResults(value);
  };

  const handleSchoolResults = (value: []) => {
    setSchoolResults(value);
  };

  const handleSelectedDistrict = (value: {}) => {
    setSelectedSchool({});
    setSchoolResults([]);
    setSelectedDistrict(value);
  };

  const handleSelectedSchool = (value: {}) => {
    setSelectedSchool(value);
  };

  return (
    <Center padding='100px' h='100vh'>
      <Container className='home-container' maxW='container.lg'>
        <ScaleFade initialScale={0.9} in={true}>
          <Card variant='rounded'>
            <SearchContainer
              handleSearching={handleSearching}
              handleDistrictResults={handleDistrictResults}
              handleSchoolResults={handleSchoolResults}
              resetResults={resetResults}
            />
          </Card>
          <Flex>
            <Box w='400px'>
              <Card variant='rounded'>
                {searching ? (
                  <Spinner />
                ) : (
                  <div>
                    <Heading>Districts</Heading>
                    <Box h='400px' overflow='auto'>
                      {districtResults?.map((usState) => {
                        return (
                          <div key={usState.name}>
                            <ResultsByStateContainer
                              usState={usState}
                              handleSelectedDistrict={handleSelectedDistrict}
                              handleSchoolResults={handleSchoolResults}
                            />
                          </div>
                        );
                      })}
                    </Box>
                  </div>
                )}
              </Card>
            </Box>
            <Box w='600px'>
              <Card variant='rounded' h='200px'>
                <Box>
                  <SelectedDistrictContainer
                    selectedDistrict={selectedDistrict}
                    schoolResults={schoolResults}
                    handleSelectedSchool={handleSelectedSchool}
                  />
                </Box>
              </Card>
              <Card variant='rounded'>
                <Box>
                  <SelectedSchoolContainer selectedSchool={selectedSchool} />
                </Box>
              </Card>
            </Box>
          </Flex>
        </ScaleFade>
      </Container>
    </Center>
  );
};

export default Home;

{
  /* <Heading>School Data Finder</Heading>
                    <Text>
                        How would you utilize React.useEffect with the searchSchoolDistricts and searchSchools functions? <br />
                        Using <a href="https://chakra-ui.com/docs/principles" target="_blank">Chakra-UI</a> or your favorite UI toolkit, build an interface that allows the user to: <br />
                        <OrderedList>
                            <ListItem>Search for a district</ListItem>
                            <ListItem>Search for a school within the district (or bypass district filter)</ListItem>
                            <ListItem>View all returned data in an organized way</ListItem>
                        </OrderedList>
                    </Text>
                    <Divider margin={4} />
                    <Text>
                        Check the console for example of returned data. <b>Happy coding!</b>< br />
                        {searching ? <Spinner /> : <></>}< br />
                        {districtSearch.length} Demo Districts<br />
                        {schoolSearch.length} Demo Schools<br />
                    </Text> */
}
