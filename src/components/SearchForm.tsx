import React from 'react';
import { Button, Flex, Center, Input, Box } from '@chakra-ui/react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { IState as Props } from './SearchContainer';

interface IProps {
  onSubmit: Props['onSubmit'];
}

interface IFormInputs {
  district: string;
}

//using React Hook Form for ease of validation and scalability.
const SearchForm: React.FC<IProps> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<IFormInputs>({
    mode: 'onChange',
  });

  const formSubmitHandler: SubmitHandler<IFormInputs> = (
    values: IFormInputs
  ) => {
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit(formSubmitHandler)}>
      <Flex h='40px' align='center'>
        <Center>
          <Box w='400px'>
            <Controller
              name='district'
              control={control}
              defaultValue={''}
              rules={{ required: true }}
              render={({ field }) => {
                return (
                  <Input
                    {...field}
                    placeholder='Enter District or Keyword...'
                  />
                );
              }}
            />
          </Box>

          <Box ml='4'>
            <Button
              type='submit'
              color='white'
              variant='solid'
              bg='brand.red'
              disabled={!isValid}
            >
              Search
            </Button>
          </Box>
        </Center>
      </Flex>
    </form>
  );
};

export { SearchForm };
