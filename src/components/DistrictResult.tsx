import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { IState as Props } from './Home';

interface IProps {
  district: { name: string };
  selected: boolean;
  handleSelectedDistrict: Props['handleSelectedDistrict'];
}

const DistrictResult: React.FC<IProps> = ({
  district,
  selected,
  handleSelectedDistrict,
}) => {
  const onSelect = React.useCallback(() => {
    handleSelectedDistrict(district);
  }, [handleSelectedDistrict]);

  return (
    <Box pl='3' pt='1' pb='1'>
      <Text
        _hover={{ color: `${!selected ? 'white' : ''}` }}
        cursor={`${!selected ? 'pointer' : ''}`}
        casing='uppercase'
        onClick={onSelect}
      >
        {district.name}
      </Text>
    </Box>
  );
};

export { DistrictResult };
