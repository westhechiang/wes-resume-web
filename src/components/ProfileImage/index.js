import React from 'react';
import PropTypes from 'prop-types';
import {
  Circle,
  Image,
} from 'wes-coreui';

const ProfileImage = ({
  size,
  image,
  borderColor,
  borderSize,
  bg,
  imageSize,
}) => {
  return (
    <Circle
      height={size}
      w={size}
      bg={bg}
      border={borderSize}
      borderColor={borderColor}
    >
      <Image
        src={image}
        w={imageSize}
        height={imageSize}
      />
    </Circle>
  );
};

ProfileImage.defaultProps = {
  size: 125,
  image: 'https://www.fillmurray.com/150/150',
  imageSize: '100%',
  bg: 'transparent',
  borderColor: 'white',
  borderSize: 1,
};

ProfileImage.propTypes = {
  borderSize: PropTypes.number,
  size: PropTypes.number,
  image: PropTypes.string,
  borderColor: PropTypes.string,
  bg: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  imageSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.number,
  ]),
};

export default ProfileImage;
