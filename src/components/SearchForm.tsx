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
      <div>
        <div>District</div>
        <Controller
          name='district'
          control={control}
          defaultValue={''}
          render={({ field }) => {
            return <Input {...field} />;
          }}
        />
      </div>
      <div>
        <div>School</div>
        <Controller
          name='school'
          control={control}
          defaultValue={''}
          render={({ field }) => {
            return <Input {...field} />;
          }}
        />
      </div>
      <div>
        <Button type='submit'>Search</Button>
      </div>
    </form>
  );
};

export { SearchForm };
