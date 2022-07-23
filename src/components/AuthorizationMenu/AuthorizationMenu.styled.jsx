import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div``;

export const Link = styled(NavLink)`
  text-decoration: none;
  padding: 0 14px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  position: relative;
  z-index: 19;

  transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #42362b;
  }
  &.active {
    color: #fff;
    &::after {
      content: '';
      position: absolute;
      display: block;
      z-index: -1;
      width: 100%;
      height: 55px;
      background-color: #42362b;
      border-radius: 2px;
      left: 0;
      bottom: -26px;
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    }
  }
`;
