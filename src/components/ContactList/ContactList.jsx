import ContactItem from '../ContactItem/ContactItem';
import { List, Error } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter, deleteContact } from 'redux/contactsSlice';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => dispatch(deleteContact(contactId));

  const filterList = () => {
    const normalValue = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalValue)
    );
  };

  const contactsList = filterList();

  return (
    <List>
      {contactsList.length > 0 ? (
        contactsList.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              name={name}
              number={number}
              contactId={id}
              deleteContact={handleDeleteContact}
            />
          );
        })
      ) : (
        <Error>
          <strong>Упс, нічого нема</strong>
        </Error>
      )}
    </List>
  );
}
