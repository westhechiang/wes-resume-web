import React from 'react';
import PropTypes from 'prop-types';
import {
  ExtendedFlex,
} from 'wes-coreui';

import ResumeBlockHeader from '../ResumeBlockHeader';

const ResumeBlock = ({
  icon,
  title,
  children,
}) => {
  return (
    <ExtendedFlex
      w={1}
      flexDirection="column"
    >
      <ResumeBlockHeader
        label={title}
        icon={icon}
      />
      { children }
    </ExtendedFlex>
  );
};


ResumeBlock.propTypes = {
  children: PropTypes.object,
  icon: PropTypes.string,
  title: PropTypes.string,
};

export default ResumeBlock;
