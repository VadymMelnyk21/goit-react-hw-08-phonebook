import { Container, Link } from './AuthorizationMenu.styled';

export default function AuthorizationMenu() {
  return (
    <Container>
      <Link to="/register">Зареєструватися</Link>
      <Link to="/login">Увійти</Link>
    </Container>
  );
}
