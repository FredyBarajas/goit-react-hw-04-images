import Styled from 'styled-components';

export const Header = Styled.header`
 background-color: #06132f;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 2;
  width: 100%;
`;

export const Form = Styled.form`
 display: flex;
`;

export const Input = Styled.input`
 background-color: #ffffff70;
  color: #06132f;
  font-size: 16px;
  outline: none;
  border: none;
  border-radius: 20px;
  padding: 7px 20px;
  margin-right: 20px;
  &::placeholder {
    color: #06132f;
  }
`;

export const Button = Styled.button`
 background-color: #1a54d4;
  color: aliceblue;
  font-size: 14px;
  border: none;
  padding: 0 30px;
  border-radius: 20px;
`;
