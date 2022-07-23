import styled from 'styled-components';

export const Container = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
`;

export const UserInfoTitle = styled.span``;

export const Button = styled.button`
  display: inline-block;
  background-color: transparent;
  color: #42362b;

  font-weight: 500;
  font-size: 16px;
  border: none;
  cursor: pointer;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #fff;
  }
`;
