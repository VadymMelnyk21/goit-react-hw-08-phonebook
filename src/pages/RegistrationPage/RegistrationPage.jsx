import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/authorization/authorization-requests';
import {
  Container,
  Form,
  Label,
  LableText,
  LableInfo,
  Input,
  FormButton,
} from './RegistrationPage.styled';

export default function RegistrationPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(register({ name, email, password }));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>
          <LableText>Введіть своє ім’я</LableText>
          <Input
            onChange={handleChange}
            type="text"
            name="name"
            value={name}
            autoComplete="off"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </Label>

        <Label>
          <LableText>Введіть свою електронну адресу</LableText>
          <Input
            onChange={handleChange}
            type="email"
            name="email"
            value={email}
            autoComplete="off"
            required
          />
        </Label>

        <Label>
          <LableText>
            Введіть пароль
            <LableInfo>
              (мінімум 7 символів, ви ввели {password.length})
            </LableInfo>
          </LableText>
          <Input
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
            autoComplete="off"
            required
            pattern="(?=.*\d).{7,}"
            title="Пароль має містити мінімум 7 символів, цифри або малі букви латинського алфавіту"
          />
        </Label>

        <FormButton type="submit">Зареєструватися</FormButton>
      </Form>
    </Container>
  );
}
