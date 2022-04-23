import React from 'react';
import {
  Button,
  Flex,
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
  Box,
} from '@chakra-ui/react';
import { IState as Props } from './SearchContainer';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

interface IProps {
  onSubmit: Props['onSubmit'];
}

interface IFormInputs {
  district: string;
  school: string;
}

const SearchForm: React.FC<IProps> = ({ onSubmit }) => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>();

  const formSubmitHandler: SubmitHandler<IFormInputs> = (
    values: IFormInputs
  ) => {
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit(formSubmitHandler)}>
      <Flex>
        <Center w='200px' h='40px'>
          <Box>
            <Text>District</Text>
            <Controller
              name='district'
              control={control}
              defaultValue={''}
              render={({ field }) => {
                return <Input {...field} />;
              }}
            />
          </Box>
        </Center>
        <Center w='100px' h='40px'>
          <Box pt='5'> - and / or - </Box>
        </Center>
        <Center w='200px' h='40px'>
          <Box>
            <Text>School</Text>
            <Controller
              name='school'
              control={control}
              defaultValue={''}
              render={({ field }) => {
                return <Input {...field} />;
              }}
            />
          </Box>
        </Center>
        <Center w='100px' h='40px' mt='3' ml='2'>
          <Button type='submit' color='white' variant='solid' colorScheme='red'>
            Search
          </Button>
        </Center>
      </Flex>
    </form>
  );
};

export { SearchForm };
