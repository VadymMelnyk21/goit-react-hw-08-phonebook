import AuthorizationMenu from 'components/AuthorizationMenu/AuthorizationMenu';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/authorization/authorization-selectors';
import { Container, Nav, MenuLink } from './Menu.styled';

export default function Menu() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Container>
      <Nav>
        <MenuLink to="/">Домашня сторінка</MenuLink>
        {isLoggedIn && <MenuLink to="contacts">Контакти</MenuLink>}
      </Nav>

      {isLoggedIn ? <UserMenu /> : <AuthorizationMenu />}
    </Container>
  );
}
