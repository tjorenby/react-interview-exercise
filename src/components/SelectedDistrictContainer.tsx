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
  Spinner,
} from '@chakra-ui/react';
import { SelectMenu } from './design';
import { IState as Props } from './Home';

interface IProps {
  handleSelectedSchool: Props['handleSelectedSchool'];
  selectedDistrict: Props['selectedDistrict'];
  schoolResults: Props['schoolResults'];
}

export interface IState {
  results: [
    {
      id: string;
      name: string;
      street: string;
      city: string;
      state: string;
      zip: string;
    }
  ];
}

const SelectedDistrictContainer: React.FC<IProps> = ({
  handleSelectedSchool,
  selectedDistrict,
  schoolResults,
}) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [results, setResults] = React.useState<[{}]>();
  const [district, setDistrict] = React.useState<{}>();

  const onSelect = React.useCallback(
    (value: object) => {
      handleSelectedSchool(value);
    },
    [handleSelectedSchool]
  );

  const options = results?.map((result) => {
    return {
      label: result.name,
      value: result,
    };
  });

  React.useEffect(() => {
    setLoading(true);
    setDistrict(selectedDistrict);
    setResults(schoolResults);
    setLoading(false);
  }, [schoolResults, selectedDistrict]);

  return (
    <>
      <Text>{district?.name}</Text>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {schoolResults?.length > 0 ? (
            <SelectMenu
              options={options}
              onChange={(e: object) => onSelect(e.value)}
            />
          ) : (
            <Text>No Schools Found</Text>
          )}
        </>
      )}
    </>
  );
};

export { SelectedDistrictContainer };
