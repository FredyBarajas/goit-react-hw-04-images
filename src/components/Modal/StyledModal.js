import Styled from 'styled-components';

export const ModalStyled = Styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

`;

export const ContenStyled = Styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: relative;
  max-height:90vh;


`;

export const ImageStyled = Styled.img`
  max-width: 100%;
  max-height: 90%;
`;

export const BtnStyled = Styled.button`position: absolute;
width:30px;
height:30px;
  top: 10px;
  right: 10px;
  background-color:white;
  cursor: pointer;
  border-radius: 50%;
  border:solid 1px red;
  font-size:18px;
  color:red;
  box-shadow: 0 0 10px rgba(2, 2, 2, 0.3);
  &:hover{
    color:white;
    background-color:red;
  }`;
