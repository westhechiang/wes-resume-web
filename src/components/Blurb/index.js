import React from 'react';
import {
  Body,
  ExtendedFlex,
  TextLink,
} from 'wes-coreui';

const Blurb = () => {
  const linkBuilder = (link) => {
    const links = {
      react: {
        label: 'React',
        href: 'https://reactjs.org/',
      },
      styledComponents: {
        label: 'Styled Components',
        href: 'https://www.styled-components.com/',
      },
      repo: {
        label: 'https://github.com/westhechiang/wes-resume-web',
        href: 'https://github.com/westhechiang/wes-resume-web',
      },
    };

    return (
      <TextLink
        rel="noopener noreferrer"
        href={links[link].href}
        target="_blank"
        color="gray.0"
        fontWeight={3}
        fontStyle="italic"
      >
        { links[link].label }
      </TextLink>
    );
  };

  return (
    <ExtendedFlex
      w={1}
      justify="center"
      py={3}
    >
      <Body
        type="B2"
        m={0}
        color="gray.0"
      >
        Made by Wes Chiang, built with { linkBuilder('react') } and { linkBuilder('styledComponents') }. Check out the code at { linkBuilder('repo') }.
      </Body>
    </ExtendedFlex>
  );
};

export default Blurb;
