import styled from '@emotion/styled';

export const Item = styled.li`
  margin-bottom: 7px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: 5px 15px;
  background-color: #fff;
  border: 1px solid #747474;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 700;
  color: #555;
  cursor: pointer;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
  }
`;
