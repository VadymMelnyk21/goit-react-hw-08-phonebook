import { useDispatch, useSelector } from 'react-redux';
import {
  getUserEmail,
  getUserName,
} from 'redux/authorization/authorization-selectors';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/authorization/authorization-requests';
import { Container, UserInfo, Button } from './UserMenu.styled';

export default function UserMenu() {
  const userName = useSelector(getUserName);
  const userEmail = useSelector(getUserEmail);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <UserInfo>
          Привіт {userName} | Ваша пошта {userEmail} |
        </UserInfo>
        <Button
          type="button"
          onClick={() => {
            dispatch(logOut());
            navigate('/');
          }}
        >
          Вийти
        </Button>
      </Container>
    </>
  );
}
