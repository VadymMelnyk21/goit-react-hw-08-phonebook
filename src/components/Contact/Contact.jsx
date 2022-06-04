import PropTypes from 'prop-types';

export default function Contact({ name, number, contactId, deleteContact }) {
  return (
    <>
      <div>
        <span>{name}: </span>
        <span>{number}</span>
      </div>
      <button type="button" onClick={() => deleteContact(contactId)}>
        Delete
      </button>
    </>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
