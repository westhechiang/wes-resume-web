import React from 'react';
import PropTypes from 'prop-types';
import { ExtendedFlex } from 'wes-coreui';

const Section = ({
  children,
  bg,
  w,
  align,
  bgImage,
}) => {
  return (
    <ExtendedFlex
      w={w}
      bgImage={bgImage}
      rbgSize="150px"
      height="100%"
      flexDirection="column"
      align={align}
      p={[3]}
      bg={bg}
    >
      { children }
    </ExtendedFlex>
  );
};

Section.defaultProps = {
  align: 'center',
};

Section.propTypes = {
  children: PropTypes.any,
  bg: PropTypes.string,
  w: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
  align: PropTypes.string,
  bgImage: PropTypes.string,
};

export default Section;
