import React from 'react';
import PropTypes from 'prop-types';
import {
  ExtendedFlex,
  Heading,
} from 'wes-coreui';

const ProfileName = ({
  name,
}) => {
  return (
    <ExtendedFlex
      flexDirection="column"
      align="center"
      py={2}
    >
      <Heading
        type="H1"
        m={0}
        color="white"
      >
        { name.nickname }
      </Heading>
      <Heading
        type="H4"
        m={0}
        color="white"
      >
        { name.last }
      </Heading>
    </ExtendedFlex>
  );
};

ProfileName.propTypes = {
  name: PropTypes.object,
};

export default ProfileName;
