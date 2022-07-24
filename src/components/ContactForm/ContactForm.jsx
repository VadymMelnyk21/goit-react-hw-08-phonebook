import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/contacts/contacts-requests';
import { getContacts } from 'redux/contacts/contacts-selectors';
import {
  Button,
  FormContainer,
  Input,
  InputContainer,
  LableText,
} from './ContactForm.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const changeName = e => setName(e.target.value);
  const changeNumber = e => setNumber(e.target.value);

  const handlerSubmit = e => {
    e.preventDefault();

    const newContact = {
      name,
      number,
    };

    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? Notify.warning(`${name} вже є у ваших контактах`)
      : dispatch(addContactThunk(newContact));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormContainer>
      <form onSubmit={handlerSubmit}>
        <InputContainer>
          <label>
            <LableText>Ім’я контакту</LableText>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={changeName}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Ім’я Прізвище"
              autoComplete="off"
            />
          </label>
          <label>
            <LableText>Номер</LableText>
            <Input
              type="tel"
              name="number"
              value={number}
              onChange={changeNumber}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="000-00-00"
              autoComplete="off"
            />
          </label>
        </InputContainer>
        <Button type="submit">Додати контакт</Button>
      </form>
    </FormContainer>
  );
}
