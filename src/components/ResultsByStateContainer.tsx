import React from 'react';
import { Box, Text, List, ListItem } from '@chakra-ui/react';
import { DistrictResult } from './DistrictResult';
import { IState as Props } from './Home';

interface IProps {
  usState: {
    name: string;
    districts: [district: { id: number; name: string }];
  };
  selectedDistrict: Props['selectedDistrict'];
  handleSelectedDistrict: Props['handleSelectedDistrict'];
}

const ResultsByStateContainer: React.FC<IProps> = ({
  usState,
  selectedDistrict,
  handleSelectedDistrict,
}) => {
  return (
    <Box>
      <Box w='250px' borderBottom='1px' my='2'>
        <Text fontSize='2xl'>{usState.name}</Text>
      </Box>

      <List spacing={1}>
        {usState.districts.map((district) => {
          const selected = selectedDistrict.id === district.id;
          return (
            <ListItem
              h='38px'
              w='full'
              py='1'
              key={district.id}
              bg={selected ? 'brand.lightGreen' : ''}
              borderRight={selected ? '4px' : ''}
              borderLeftRadius='40px'
              _hover={{
                bg: `${!selected ? 'brand.lightGreen' : ''}`,
                borderRight: '4px',
              }}
            >
              <DistrictResult
                district={district}
                selected={selectedDistrict.id === district.id}
                handleSelectedDistrict={handleSelectedDistrict}
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export { ResultsByStateContainer };
