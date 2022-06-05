import styled from '@emotion/styled';

export const FormContainer = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px solid #aaa;
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const LableText = styled.span`
  display: block;
  margin: 0 0 10px;
`;

export const Input = styled.input`
  width: 180px;
  padding: 5px;
  border: 1px solid #555;
  border-radius: 3px;
`;

export const Button = styled.button`
  display: block;
  padding: 5px 15px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #747474;
  border-radius: 5px;
  font-weight: 700;
  color: #555;
  cursor: pointer;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
  }
`;
