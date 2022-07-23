import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/authorization/authorization-requests';
import {
  Container,
  Form,
  Label,
  LableText,
  Input,
  FormButton,
} from '../RegistrationPage/RegistrationPage.styled';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.perventDefaut();

    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
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

        <FormButton type="submit">Авторизуватися</FormButton>
      </Form>
    </Container>
  );
}
