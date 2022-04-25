import React from 'react';
import {
  Box,
  Center,
  Container,
  Heading,
  Text,
  ScaleFade,
  Spinner,
  Flex,
} from '@chakra-ui/react';
import { Card, NoneFound } from './design';
import { SearchGlass } from './design/images';
import SearchContainer from './SearchContainer';
import { ResultsByStateContainer } from './ResultsByStateContainer';
import { SelectedDistrictContainer } from './SelectedDistrictContainer';

export interface IState {
  handleSearching: (value: boolean) => void;
  handleDistrictResults: (
    value: [
      {
        name: string;
        districts: [
          {
            id: number;
            leid: string;
            name: string;
            street: string;
            city: string;
            state: string;
            zip: string;
          }
        ];
      }
    ]
  ) => void;
  handleSelectedDistrict: (value: {}) => void;
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

  selectedDistrict: {
    id: number;
    name: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    leid: string;
  };
}

const Home: React.FC = () => {
  const [searching, setSearching] = React.useState<boolean>(false);
  const [districtResults, setDistrictResults] = React.useState<[]>();
  const [selectedDistrict, setSelectedDistrict] = React.useState<{}>({});

  const resetResults = () => {
    setSelectedDistrict({});
    setDistrictResults([]);
  };

  const handleSearching = (value: boolean) => {
    setSearching(value);
  };

  const handleDistrictResults = (value: { name: string; districts: [] }) => {
    setDistrictResults(value);
  };

  const handleSelectedDistrict = (value: {}) => {
    setSelectedDistrict(value);
  };

  return (
    <Center h='90vh'>
      <Container>
        <ScaleFade initialScale={0.9} in={true}>
          <Center>
            <SearchContainer
              handleSearching={handleSearching}
              handleDistrictResults={handleDistrictResults}
              handleSelectedDistrict={handleSelectedDistrict}
              resetResults={resetResults}
            />
          </Center>
          <Box h='400px'>
            <Center>
              <>
                {searching ? (
                  <Box p='50'>
                    <Center>
                      <Spinner />
                    </Center>
                  </Box>
                ) : (
                  <ScaleFade initialScale={0.9} in={true}>
                    {!districtResults ? (
                      <Box p='50'>
                        <Center>
                          <Text fontWeight='bold' color='brand.purple'>
                            Enter District Or Keyword To Get Started
                          </Text>
                        </Center>
                        <Center>
                          <SearchGlass boxSize='100px' mt='2' />
                        </Center>
                      </Box>
                    ) : (
                      <>
                        {districtResults?.length === 0 ? (
                          <Box p='50'>
                            <NoneFound text='No Results Found. Try A New Search!' />
                          </Box>
                        ) : (
                          <Card
                            variant='rounded'
                            borderColor='white'
                            mt='4'
                            p='6'
                          >
                            <Flex>
                              <Card variant='container' borderColor='white'>
                                <Box mb='4' w='full'>
                                  <Heading>Districts</Heading>
                                  <Box h='4px' bg='brand.red' />
                                </Box>
                                <Box h='400px' w='400px'>
                                  <Box h='360px' w='390px' overflow='auto'>
                                    {districtResults?.map(
                                      (usState: {
                                        name: string;
                                        districts: [{}];
                                      }) => {
                                        return (
                                          <Box key={usState.name}>
                                            <ResultsByStateContainer
                                              usState={usState}
                                              districtResults={districtResults}
                                              handleSelectedDistrict={
                                                handleSelectedDistrict
                                              }
                                              selectedDistrict={
                                                selectedDistrict
                                              }
                                            />
                                          </Box>
                                        );
                                      }
                                    )}
                                  </Box>
                                </Box>
                              </Card>

                              <Card
                                variant='rounded'
                                borderColor='white'
                                bg='brand.lightGreen'
                                mt='6'
                                ml='2'
                              >
                                {selectedDistrict.id && (
                                  <Card
                                    variant='rounded'
                                    borderColor='white'
                                    bg='white'
                                  >
                                    <Box>
                                      <SelectedDistrictContainer
                                        selectedDistrict={selectedDistrict}
                                      />
                                    </Box>
                                  </Card>
                                )}
                              </Card>
                            </Flex>
                          </Card>
                        )}
                      </>
                    )}
                  </ScaleFade>
                )}
              </>
            </Center>
          </Box>
        </ScaleFade>
      </Container>
    </Center>
  );
};

export default Home;
