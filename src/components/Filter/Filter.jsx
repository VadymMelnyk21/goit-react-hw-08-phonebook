import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/contacts-slice';
import { FilterContainer, Input, Text } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();

  const handleChangeFilter = e => dispatch(filterContact(e.target.value));

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
