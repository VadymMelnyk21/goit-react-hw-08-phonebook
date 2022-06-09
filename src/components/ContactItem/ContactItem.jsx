import PropTypes from 'prop-types';
import { ItemContainer, Button, Item } from './ContactItem.styled';

export default function ContactItem({
  name,
  number,
  contactId,
  deleteContact,
}) {
  return (
    <Item>
      <ItemContainer>
        <div>
          <span>{name}: </span>
          <span>{number}</span>
        </div>
        <Button type="button" onClick={() => deleteContact(contactId)}>
          Видалити
        </Button>
      </ItemContainer>
    </Item>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
