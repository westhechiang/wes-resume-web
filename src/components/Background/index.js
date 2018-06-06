import React from 'react';
import PropTypes from 'prop-types';
import { ExtendedFlex } from 'wes-coreui';
import bgImage from '../../assets/gplaypattern.png';

const Background = ({
  children,
}) => {
  return (
    <ExtendedFlex
      flexDirection="column"
      bg="white"
      bgImage={bgImage}
      w={1}
      minHeight="100vh"
      justify="flex-start"
      align="center"
      p={[0, 0, 3]}
    >
      { children }
    </ExtendedFlex>
  );
};

Background.propTypes = {
  children: PropTypes.object,
};

export default Background;
