import React from 'react';
import PropTypes from 'prop-types';
import {
  ExtendedFlex,
  ExtendedBox,
  Body,
} from 'wes-coreui';


const ProfileSummary = ({
  summary,
}) => {
  return (
    <ExtendedFlex
      flexDirection="column"
      align={['flex-start', 'center', 'flex-start']}
      pt={2}
      w={1}
    >
      <Body
        type="B1"
        m={0}
        mb={3}
        w={1}
        textAlign={['left', 'center', 'left']}
        color="white"
      >
        { summary.highlight }

      </Body>
      <Body
        type="B2"
        color="white"
        m={0}
        mb={1}
      >
        I am:
      </Body>
      {
        summary.details.map((detail, index, arr) => {
          return (
            <ExtendedFlex
              key={detail.slice(0, 5)}
              w={1}
              flexDirection="column"
              flexShrink="0"
              justify="center"
              align="flex-start"
            >
              <Body
                type="B2"
                w={1}
                m={0}
                textAlign={['left', 'center', 'left']}
                color="white"
              >
                { detail }
              </Body>
              {
                !(arr.length - 1 === index) &&
                <ExtendedBox
                  height={10}
                  w={1}
                />
              }
            </ExtendedFlex>
          );
        })
      }
    </ExtendedFlex>
  );
};

ProfileSummary.propTypes = {
  summary: PropTypes.object,
};

export default ProfileSummary;
