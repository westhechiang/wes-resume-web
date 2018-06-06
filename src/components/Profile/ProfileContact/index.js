import React from 'react';
import PropTypes from 'prop-types';
import {
  ExtendedFlex,
  Image,
  Body,
  TextLink,
  Heading,
} from 'wes-coreui';

import locationIcon from '../../../assets/map.svg';
import emailIcon from '../../../assets/email.svg';
import githubIcon from '../../../assets/github.svg';
import linkedInIcon from '../../../assets/linkedin-logo.svg';

class ProfileContact extends React.Component {
  static propTypes = {
    contactData: PropTypes.object,
  };

  static transformData(props) {
    const entryTypes = {
      email: {
        icon: emailIcon,
        isLink: true,
      },
      github: {
        icon: githubIcon,
        isLink: true,
      },
      location: {
        icon: locationIcon,
        isLink: false,
      },
      linkedIn: {
        icon: linkedInIcon,
        isLink: true,
      },
    };

    const mergedData = {
      ...props.contactData,
      location: props.location,
    };

    return Object.entries(mergedData).reduce((accum, entry) => {
      if (entry[0] === 'email') {
        return {
          ...accum,
          [entry[0]]: {
            value: entry[1],
            href: `mailto:${entry[1]}`,
            label: entry[0],
            ...entryTypes[entry[0]],
          },
        };
      }
      return {
        ...accum,
        [entry[0]]: {
          value: entry[1],
          href: entry[1],
          label: entry[0],
          ...entryTypes[entry[0]],
        },
      };
    }, {});
  }

  state = {
    contactData: {
      email: {},
      linkedIn: {},
      github: {},
      location: {},
    },
  };

  static getDerivedStateFromProps(props) {
    const transformedData = ProfileContact.transformData(props);
    return {
      contactData: {
        ...transformedData,
      },
    };
  }

  render() {
    const {
      contactData,
    } = this.state;
    console.log('contactData', contactData);

    return (
      <ExtendedFlex
        flexDirection="column"
        align="center"
        pt={3}
      >
        {
          Object.entries(contactData).map((entry) => {
            return (
              <ExtendedFlex
                key={entry[0]}
                w={1}
                pb={2}
                justify="flex-start"
                align="flex-start"
              >
                <Image
                  src={entry[1].icon}
                  w={[30, 20]}
                  mr={2}
                />
                <ExtendedFlex
                  flexDirection="column"
                  justify="flex-start"
                  align="flex-start"
                >
                  <Heading
                    type="H5"
                    color="white"
                    m={0}
                  >
                    { entry[1].label }
                  </Heading>
                  <Body
                    type="B2"
                    color="white"
                    m={0}
                  >
                    {
                      entry[1].isLink ?
                        <TextLink
                          href={entry[1].href}
                          color="white"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          { entry[1].value }
                        </TextLink> :
                        entry[1].value
                    }
                  </Body>
                </ExtendedFlex>
              </ExtendedFlex>
            );
          })
        }
      </ExtendedFlex>
    );
  }
}

export default ProfileContact;
