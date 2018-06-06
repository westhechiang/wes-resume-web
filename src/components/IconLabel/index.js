import React from 'react';
import PropTypes from 'prop-types';
import {
  ExtendedFlex,
  Image,
  Body,
} from 'wes-coreui';

import locationIcon from '../../assets/placeholder.svg';
import durationIcon from '../../assets/clock.svg';
import schoolIcon from '../../assets/school.svg';
import degreeIcon from '../../assets/certificate.svg';

const IconLabel = ({
  label,
  icon,
  iconSize,
}) => {
  const icons = {
    location: locationIcon,
    duration: durationIcon,
    school: schoolIcon,
    degree: degreeIcon,
  };

  return (
    <ExtendedFlex
      pr={3}
      align="center"
    >
      <Image
        src={icons[icon]}
        w={iconSize}
        mr={1}
      />
      <Body
        type="B2"
        color="blue.0"
        m={0}
      >
        {label}
      </Body>
    </ExtendedFlex>
  );
};

IconLabel.defaultProps = {
  iconSize: 15,
};

IconLabel.propTypes = {
  label: PropTypes.string,
  iconSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),
  icon: PropTypes.oneOf([
    'location',
    'duration',
    'school',
    'degree',
  ]).isRequired,
};

export default IconLabel;
