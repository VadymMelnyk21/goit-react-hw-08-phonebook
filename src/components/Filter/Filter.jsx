import PropTypes from 'prop-types';
import { FilterContainer, Input, Text } from './Filter.styled';

export default function Filter({ value, changeFilter }) {
  return (
    <FilterContainer>
      <Text>Пошук контакту за іменем</Text>
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={changeFilter}
        placeholder="Ім’я Прізвище"
      />
    </FilterContainer>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
