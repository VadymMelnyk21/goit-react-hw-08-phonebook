import { useState } from 'react';
import {
  FormContainer,
  InputContainer,
  LableText,
  Button,
  Input,
} from './ContactForm.styled';
import { nanoid } from 'nanoid';
import {
  useGetContactsQuery,
  useCreateContactMutation,
} from 'redux/contactsApi';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const { data: contacts } = useGetContactsQuery();
  const [createContact] = useCreateContactMutation();

  const changeName = e => setName(e.target.value);
  const changeNumber = e => setPhone(e.target.value);

  const handlerSubmit = e => {
    e.preventDefault();

    const newContact = {
      name,
      phone,
      id: nanoid(),
    };

    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} вже в контактах`)
      : createContact(newContact);

    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
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
              name="phone"
              value={phone}
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
