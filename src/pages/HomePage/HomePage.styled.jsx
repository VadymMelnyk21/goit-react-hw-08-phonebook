import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 400px;
  margin: 70px auto 0;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
  text-align: center;
  border-bottom: 25px solid #5db09d;
`;

export const Title = styled.h2`
  font-size: 32px;
  color: #42362b;
`;

export const Text = styled.p`
  font-size: 18px;
  color: #5db09d;
`;

export const Link = styled(NavLink)`
  color: #5db09d;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #42362b;
  }
`;
