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
  Spinner,
  InputGroup, // Some Chakra components that might be usefull
  HStack,
  VStack,
  InputRightAddon,
} from '@chakra-ui/react';
import { Card } from '@components/design/Card';
import SearchContainer from './SearchContainer';

export interface IState {
  handleSearching: (value: boolean) => void;
}

const Home: React.FC = () => {
  const [searching, setSearching] = React.useState<boolean>(false);

  console.log('searching:', searching);
  const handleSearching = (value: boolean) => {
    setSearching(value);
  };

  return (
    <Center padding='100px' height='90vh'>
      <ScaleFade initialScale={0.9} in={true}>
        <Card variant='rounded' borderColor='blue'>
          <SearchContainer handleSearching={handleSearching} />
        </Card>
        <Card variant='rounded'>
          {searching ? <Spinner /> : <div>Results</div>}
        </Card>
      </ScaleFade>
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
