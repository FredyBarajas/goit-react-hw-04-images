import Styled from 'styled-components';

export const StyledButton = Styled.button`
  background-color: #1a54d4;
  color: aliceblue;
  font-size: 40px;
  border: none;
  box-shadow:5px 5px 5px #00000080;
  border-radius: 50%;
  margin-bottom: 65px;
  width: 60px;
  height:60px;
  margin-left:50%;
transform: translate( -50%,0);
cursor:pointer;
&:hover{
    background:aliceblue;
    color:#1a54d4;
}

`;
