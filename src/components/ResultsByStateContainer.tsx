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
import { DistrictResult } from './DistrictResult';
import { IState as Props } from './Home';

interface IProps {
  usState: Props['usState'];
}

const ResultsByStateContainer: React.FC<IProps> = ({ usState }) => {
  return (
    <>
      <Heading>{usState.name}</Heading>
      {usState.districts.map((district) => {
        console.log('district:', district);

        return (
          <div key={district.id}>
            <DistrictResult district={district} />
          </div>
        );
      })}
    </>
  );
};

export { ResultsByStateContainer };
