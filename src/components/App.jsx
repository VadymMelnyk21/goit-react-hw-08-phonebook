import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container, TitleH, TitleH2 } from './App.styled';
import { contactsDefault } from '../data/contactsDefault';

export default function App() {
  const [contacts, setContacts] = useState([...contactsDefault] ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsLS = localStorage.getItem('contactsLocalStorage');
    const contactsParse = JSON.parse(contactsLS);

    if (contactsParse) {
      setContacts(contactsParse);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contactsLocalStorage', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} вже в контактах`)
      : setContacts([newContact, ...contacts]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filterList = () => {
    const normalValue = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalValue)
    );
  };

  return (
    <Container>
      <TitleH>Телефонна книга</TitleH>
      <ContactForm submitProp={addContact} />

      <TitleH2>Контакти</TitleH2>
      <Filter value={filter} changeFilter={changeFilter} />
      <ContactList contacts={filterList()} deleteContact={deleteContact} />
    </Container>
  );
}
