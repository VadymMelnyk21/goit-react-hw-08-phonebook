import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/contacts-requests';
import { ItemContainer, Button, Item } from './ContactItem.styled';

export default function ContactItem({ name, number, contactId }) {
  const dispatch = useDispatch();
  const infoDelete = { contactId, name };

  return (
    <Item>
      <ItemContainer>
        <div>
          <span>{name}: </span>
          <span>{number}</span>
        </div>
        <Button
          type="button"
          onClick={() => dispatch(deleteContactThunk(infoDelete))}
        >
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
};
