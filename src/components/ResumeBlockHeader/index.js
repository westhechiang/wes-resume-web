import React from 'react';
import PropTypes from 'prop-types';
import {
  ExtendedFlex,
  ExtendedBox,
  Heading,
} from 'wes-coreui';

import ProfileImage from '../ProfileImage';

const ResumeBlockHeader = ({
  label,
  icon,
}) => {
  return (
    <ExtendedFlex
      w={1}
      align="flex-start"
      pb={2}
    >
      <ExtendedBox
        pr={2}
      >
        <ProfileImage
          size={40}
          image={icon}
          imageSize={28}
          borderColor="blue.0"
          borderSize={1}
        />
      </ExtendedBox>
      <ExtendedBox
        w={1}
        borderBottom={1}
        borderColor="blue.0"
        py={1}
      >
        <Heading
          type="H2"
          color="blue.0"
          m={0}
        >
          { label }
        </Heading>
      </ExtendedBox>
    </ExtendedFlex>
  );
};

ResumeBlockHeader.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
};

export default ResumeBlockHeader;
