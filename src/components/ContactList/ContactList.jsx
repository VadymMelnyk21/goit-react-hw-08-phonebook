import ContactItem from '../ContactItem/ContactItem';
import { List, Error } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contactsSlice';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsApi';

export default function ContactList() {
  const { data = [] } = useGetContactsQuery();
  const { filter } = useSelector(state => getFilter(state));
  const [deleteContact] = useDeleteContactMutation();

  const handleDeleteContact = contactId => deleteContact(contactId);

  const filterList = () => {
    const normalValue = filter.toLowerCase().trim();
    return data.filter(contact =>
      contact.name.toLowerCase().includes(normalValue)
    );
  };

  const contactsList = filterList();

  return (
    <List>
      {contactsList.length > 0 ? (
        contactsList.map(({ id, name, phone }) => {
          return (
            <ContactItem
              key={id}
              name={name}
              number={phone}
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
