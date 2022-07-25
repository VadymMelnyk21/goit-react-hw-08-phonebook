import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/authorization/authorization-selectors';
import {
  Container,
  Link,
  Text,
  Title,
} from '../../pages/HomePage/HomePage.styled';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      {!isLoggedIn && (
        <Container>
          <Title>Вітаємо у книзі контактів</Title>
          <Text>
            Щоб отримати доступ до ваших контактів <br />
            будь ласка <Link to="/login">авторизуйтеся</Link>
          </Text>
        </Container>
      )}

      {isLoggedIn && children}
    </>
  );
}
