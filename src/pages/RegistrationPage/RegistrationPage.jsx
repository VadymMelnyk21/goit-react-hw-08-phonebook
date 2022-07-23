import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/authorization/authorization-requests';
import {
  Container,
  Form,
  Label,
  LableText,
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
    setName('');
    setEmail('');
    setPassword('');
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
          <LableText>Введіть пароль</LableText>
          <Input
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
            autoComplete="off"
            required
          />
        </Label>
        <FormButton type="submit">Зареєструватися</FormButton>
      </Form>
    </Container>
  );
}
