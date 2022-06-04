import PropTypes from 'prop-types';

export default function Contact({ name, number }) {
  return (
    <>
      <span>{name}: </span>
      <span>{number}</span>
    </>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
