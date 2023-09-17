import React from 'react';
import { StyledButton } from './StyledButton';

function Button(props) {
  const { onClick } = props;
  return (
    <StyledButton type="submit" id="load-more" onClick={onClick}>
      +
    </StyledButton>
  );
}

export default Button;
