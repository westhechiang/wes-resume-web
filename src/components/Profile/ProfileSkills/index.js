import React from 'react';
import PropTypes from 'prop-types';
import {
  ExtendedFlex,
  ExtendedBox,
  Heading,
  Body,
} from 'wes-coreui';

const ProfileSkills = ({
  skills,
}) => {
  return (
    <ExtendedFlex
      w={1}
      pt={3}
      flexDirection="column"
      align="center"
    >
      {
        Object.entries(skills).map((entry) => {
          return (
            <ExtendedFlex
              key={entry[0]}
              w={1}
              align={['flex-start', 'center', 'flex-start']}
              flexDirection="column"
            >
              <Body
                type="B2"
                color="white"
                m={0}
                textTransform="capitalize"
              >
                { `${entry[0]}: ` }
              </Body>
              <ExtendedFlex
                key={entry[0]}
                wrap="wrap"
                mb={2}
                flexShrink="0"
                align={['flex-start', 'center', 'flex-start']}
              >
                {
                  entry[1].map((item) => {
                    return (
                      <ExtendedBox
                        key={item}
                        borderRadius="5px"
                        border={1}
                        borderColor="gray.2"
                        py="3px"
                        px={2}
                        mt={1}
                        mr={1}
                        boxSizing="border-box"
                      >
                        <Heading
                          type="H5"
                          m={0}
                          color="gray.2"
                        >
                          { item }
                        </Heading>
                      </ExtendedBox>
                    );
                  })
                }
              </ExtendedFlex>
            </ExtendedFlex>
          );
        })
      }
    </ExtendedFlex>
  );
};

ProfileSkills.propTypes = {
  skills: PropTypes.object,
};

export default ProfileSkills;
