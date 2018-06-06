import React from 'react';
import PropTypes from 'prop-types';
import { ExtendedFlex } from 'wes-coreui';

const Paper = ({
  children,
}) => {
  return (
    <ExtendedFlex
      flexDirection="column"
      w={[1, 1, 794]}
      height={['100%', '100%', 1122]}
      position="relative"
      shadow
      hoverShadow
    >
      { children }
    </ExtendedFlex>
  );
};

Paper.propTypes = {
  children: PropTypes.object,
};

export default Paper;
