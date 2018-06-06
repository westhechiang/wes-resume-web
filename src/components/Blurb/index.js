import React from 'react';
import {
  Body,
  ExtendedFlex,
} from 'wes-coreui';

const Blurb = () => {
  return (
    <ExtendedFlex
      w={1}
      justify="center"
      py={3}
    >
      <Body
        type="B2"
        m={0}
        color="gray.0"
      >
        Made by Wes Chiang, built with <a rel="noopener noreferrer" href="https://reactjs.org/" target="_blank">React</a> and <a rel="noopener noreferrer" href="https://www.styled-components.com/" target="_blank">Styled Components</a>. Check out the code at <a rel="noopener noreferrer" href="https://github.com/westhechiang/wes-resume-web" target="_blank">https://github.com/westhechiang/wes-resume-web</a>
      </Body>
    </ExtendedFlex>
  );
};

export default Blurb;
