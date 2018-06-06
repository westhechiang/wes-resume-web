import React from 'react';
import PropTypes from 'prop-types';
import {
  ExtendedFlex,
  Heading,
  Image,
} from 'wes-coreui';

import IconLabel from '../../IconLabel';

import titleIcon from '../../../assets/badge.svg';

const ExperienceHeader = ({
  title,
  company,
  location,
  duration,
}) => {
  return (
    <ExtendedFlex
      flexDirection="column"
      pb={2}
    >
      <ExtendedFlex
        align="flex-start"
        justify={['space-between']}
        flexDirection={['column', 'row']}
        pb={1}
      >
        <ExtendedFlex
          align="center"
        >
          <Image
            src={titleIcon}
            w={15}
            mr={1}
            pb={[1, 0]}
          />
          <ExtendedFlex
            align={['flex-start', 'flex-start', 'center']}
            flexDirection={['column', 'column', 'row']}
            pb={[1, 0]}
          >
            <Heading
              type="H3"
              color="blue.0"
              m={0}
            >
              {title}
            </Heading>
          </ExtendedFlex>
        </ExtendedFlex>
        <IconLabel
          icon="duration"
          label={`${duration.start} - ${duration.end}`}
        />
      </ExtendedFlex>
      <ExtendedFlex
        align={['flex-start', 'flex-start', 'center']}
        flexDirection={['column', 'column', 'row']}
      >
        <IconLabel
          icon="location"
          label={`${company}, ${location}`}
        />
      </ExtendedFlex>
    </ExtendedFlex>
  );
};

ExperienceHeader.propTypes = {
  title: PropTypes.string,
  company: PropTypes.string,
  location: PropTypes.string,
  duration: PropTypes.object,
};

export default ExperienceHeader;
