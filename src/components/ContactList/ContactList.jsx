import Contact from 'components/Contact/Contact';

export default function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <Contact name={name} number={number} />
          </li>
        );
      })}
    </ul>
  );
}
