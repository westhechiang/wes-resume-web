import React from 'react';
import PropTypes from 'prop-types';
import {
  ExtendedFlex,
  Heading,
} from 'wes-coreui';


const ProfileTitle = ({
  title,
}) => {
  return (
    <ExtendedFlex
      flexDirection="column"
      align="center"
    >
      <Heading
        type="H2"
        m={0}
        color="white"
        whiteSpace="nowrap"
      >
        { title }
      </Heading>
    </ExtendedFlex>
  );
};

ProfileTitle.propTypes = {
  title: PropTypes.string,
};

export default ProfileTitle;
