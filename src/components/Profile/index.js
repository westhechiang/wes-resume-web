import React from 'react';
import PropTypes from 'prop-types';
import {
  ExtendedFlex,
} from 'wes-coreui';

import ProfileImage from '../ProfileImage';
import ProfileName from './ProfileName';
import ProfileTitle from './ProfileTitle';
import ProfileContact from './ProfileContact';
import ProfileSkills from './ProfileSkills';
import ProfileSummary from './ProfileSummary';

import profileImage from '../../assets/profile_image.jpg';

const Profile = ({
  data,
}) => {
  return (
    <ExtendedFlex
      w={1}
      flexDirection="column"
      align="center"
    >
      <ProfileImage
        image={profileImage}
      />
      <ProfileName
        name={data.name}
      />
      <ProfileTitle
        title={data.title}
      />
      <ProfileContact
        contactData={data.contact}
        location={data.location}
      />
      <ProfileSummary
        summary={data.summary}
      />
      <ProfileSkills
        skills={data.skills}
      />
    </ExtendedFlex>
  );
};

Profile.propTypes = {
  data: PropTypes.object,
};

export default Profile;
