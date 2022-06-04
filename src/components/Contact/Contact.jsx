import PropTypes from 'prop-types';
import { ItemContainer, Button } from './Contact.styled';

export default function Contact({ name, number, contactId, deleteContact }) {
  return (
    <ItemContainer>
      <div>
        <span>{name}: </span>
        <span>{number}</span>
      </div>
      <Button type="button" onClick={() => deleteContact(contactId)}>
        Видалити
      </Button>
    </ItemContainer>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
