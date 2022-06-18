import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container, TitleH, TitleH2 } from './App.styled';

export default function App() {
  const contactsDefault = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [contacts, setContacts] = useState([...contactsDefault] ?? []);
  const [filter, setFilter] = useState('');

  // ДЗ 3 збереження в локалсторедж початок

  useEffect(() => {
    console.log('getItem');
    const contactsLS = localStorage.getItem('contactsLocalStorage');
    const contactsParse = JSON.parse(contactsLS);

    if (contactsParse) {
      console.log('getcontactsParse', contactsParse);
      setContacts(contactsParse);
    }
  }, []);

  useEffect(() => {
    console.log('setItem');
    console.log('setItemcont', contacts);
    localStorage.setItem('contactsLocalStorage', JSON.stringify(contacts));
  }, [contacts]);

  // ДЗ 3 збереження в локалсторедж кінець

  const addContact = ({ name, number }) => {
    console.log('addContact');
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
    console.log('deleteContact');
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => {
    console.log('changeFilter');
    setFilter(e.currentTarget.value);
  };

  const filterList = () => {
    console.log('filterList');
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
