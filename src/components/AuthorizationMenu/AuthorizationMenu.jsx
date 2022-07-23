import { Container, Link } from './AuthorizationMenu.styled';

export default function AuthorizationMenu() {
  return (
    <Container>
      <Link to="/register">Реєстрація</Link>
      <Link to="/login">Авторизація</Link>
    </Container>
  );
}
