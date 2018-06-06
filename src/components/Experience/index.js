import React from 'react';
import PropTypes from 'prop-types';
import {
  ExtendedFlex,
  Body,
} from 'wes-coreui';

import ExperienceHeader from './ExperienceHeader';

const Experience = ({
  data,
}) => {
  return (
    data.map((experience) => {
      return (
        <ExtendedFlex
          key={experience.title}
          flexDirection="column"
          pb={2}
        >
          <ExperienceHeader
            title={experience.title}
            location={experience.location}
            company={experience.company}
            duration={experience.duration}
          />
          <ExtendedFlex
            flexDirection="column"
          >
            {
              experience.accomplishments.map((accomplishment) => {
                return (
                  <ExtendedFlex
                    key={accomplishment}
                    align="center"
                    justify="flex-start"
                    borderLeft={2}
                    borderColor="blue.0"
                    mb={2}
                  >
                    <Body
                      type="B2"
                      color="blue.0"
                      m={0}
                      pl={1}
                    >
                      { accomplishment }
                    </Body>
                  </ExtendedFlex>
                );
              })
            }
          </ExtendedFlex>
        </ExtendedFlex>
      );
    })
  );
};

Experience.propTypes = {
  data: PropTypes.array,
};

export default Experience;
