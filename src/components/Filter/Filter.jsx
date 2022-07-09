import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, getFilter } from 'redux/contactsSlice';
import { FilterContainer, Input, Text } from './Filter.styled';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = e => dispatch(changeFilter(e.target.value));

  return (
    <FilterContainer>
      <Text>Пошук контакту за іменем</Text>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChangeFilter}
        placeholder="Ім’я Прізвище"
      />
    </FilterContainer>
  );
}
