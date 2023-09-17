import Styled from 'styled-components';

export const LoaderStyled = Styled.span`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: fixed;
  animation: rotate 1s linear infinite;
  top: 50%;
  left: 50%;
&::before,
&::after {
  content: '';
  box-sizing: border-box;
  position: absolute;
  inset: 0px;
  border-radius: 50%;
  border: 5px solid blue;
  animation: prixClipFix 2s linear infinite;
}
&::after {
  border-color: #ff3d00;
  animation: prixClipFix 2s linear infinite, rotate 0.5s linear infinite reverse;
  inset: 6px;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes prixClipFix {
  0% {
    clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
  }
  25% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
  }
  50% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
  }
  75% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
  }
  100% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
  }
`;
