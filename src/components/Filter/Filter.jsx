import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contactsSlice';
import { FilterContainer, Input, Text } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();

  const handleChangeFilter = e => dispatch(changeFilter(e.target.value));

  return (
    <FilterContainer>
      <Text>Пошук контакту за іменем</Text>
      <Input
        type="text"
        name="filter"
        onChange={handleChangeFilter}
        placeholder="Ім’я Прізвище"
      />
    </FilterContainer>
  );
}
