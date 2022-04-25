import React from 'react';
import { Flex, Center, Text, VStack, Spinner, Box } from '@chakra-ui/react';
import { SelectMenu, NoneFound } from './design';
import { searchSchools } from '@utils/nces';
import { SelectedSchoolContainer } from './SelectedSchoolContainer';
import { IState as Props } from './Home';

interface IProps {
  selectedDistrict: Props['selectedDistrict'];
}

export interface IState {
  results: [
    {
      id: number;
      name: string;
      street: string;
      city: string;
      state: string;
      zip: string;
    }
  ];
  selectedSchool: {
    id: number;
    name: string;
    street: string;
    city: string;
    state: string;
    zip: string;
  };
}

const SelectedDistrictContainer: React.FC<IProps> = ({ selectedDistrict }) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [results, setResults] = React.useState<[]>([]);
  const [selectedSchool, setSelectedSchool] = React.useState<{}>({});

  const onSelect = React.useCallback((event) => {
    setSelectedSchool(event ? event.value : {});
  }, []);

  const options = results?.map((result: { name: string }) => {
    return {
      label: result.name,
      value: result,
    };
  });

  const getSchoolResults = React.useCallback(
    async (leid) => {
      setLoading(true);
      //reset school selection to clear stale data
      setSelectedSchool({});
      const response = await searchSchools('', leid);

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

      setResults(schoolObjects);
      setLoading(false);
    },
    [searchSchools]
  );

  // get School Results on component render
  React.useEffect(() => {
    if (selectedDistrict.leid) {
      getSchoolResults(selectedDistrict.leid);
    } else {
      setResults([]);
    }
  }, [getSchoolResults, selectedDistrict]);

  return (
    <>
      <Center pb='1'>
        <Box w='full'>
          <Center>
            <Text fontSize='2xl' fontWeight='bolder'>
              {selectedDistrict.name}
            </Text>
          </Center>
          <Center>
            <Flex>
              <Box mr='1'>{`${selectedDistrict.city},`}</Box>
              <Box mr='1'>{selectedDistrict.state}</Box>
              <Box>{selectedDistrict.zip}</Box>
            </Flex>
          </Center>
          <Box h='4px' bg='brand.red' />
        </Box>
      </Center>

      <Box h='300px' w='600px' mt='2'>
        {loading ? (
          <VStack>
            <Box>Searching For Schools...</Box>
            <Spinner />
          </VStack>
        ) : (
          <>
            <Box mt='2'>
              {results.length > 0 ? (
                <Box>
                  <Center>
                    <Box w='400px'>
                      <Center>
                        <Text mb='1' fontWeight='bold'>{`${results.length} ${
                          results.length === 1 ? 'School' : 'Schools'
                        } Found`}</Text>
                      </Center>

                      <SelectMenu
                        placeholder={'Select Or Search...'}
                        isClearable
                        options={options}
                        onChange={onSelect}
                      />
                    </Box>
                  </Center>

                  <Box mt='4'>
                    <SelectedSchoolContainer selectedSchool={selectedSchool} />
                  </Box>
                </Box>
              ) : (
                <Box
                  height='200px'
                  width='400px'
                  position='absolute'
                  top={0}
                  right={0}
                  left={0}
                  bottom={0}
                  margin='auto'
                >
                  <NoneFound text='No Schools Found' />
                </Box>
              )}
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export { SelectedDistrictContainer };
