import React from 'react';
import PropTypes from 'prop-types';
import {
  ExtendedFlex,
  ExtendedBox,
  Heading,
  Circle,
  Image,
} from 'wes-coreui';

const Header = ({
  first,
  last,
}) => {
  return (
    <ExtendedFlex
      justify="center"
      w={1}
      my={[3, 3, 4]}
      position="absolute"
    >
      <ExtendedBox
        borderRadius="150px"
        border={2}
        borderColor="yellow"
        bg="white"
        p={2}
        w={0.9}
      >
        <ExtendedFlex
          w={1}
          height="100%"
          justify="space-between"
        >
          <ExtendedBox
            w={0.4}
          >
            <Circle
              height={150}
              w={150}
              bg="gray.1"
            >
              <Image
                src="https://www.fillmurray.com/150/150"
                w={1}
                height="100%"
              />
            </Circle>
          </ExtendedBox>
          <ExtendedFlex
            w={0.6}
            flexDirection="column"
            align="flex-start"
            justify="center"
            pl={3}
          >
            <Heading
              type="H1"
              m={0}
            >
              {`${first} ${last}`}
            </Heading>
            <ExtendedBox
              w={90}
              my={3}
              height="2px"
              bg="yellow"
            />
            <Heading
              type="H2"
              m={0}
            >
              Sr. Full Stack Engineer
            </Heading>
          </ExtendedFlex>
        </ExtendedFlex>
      </ExtendedBox>
    </ExtendedFlex>
  );
};

Header.propTypes = {
  first: PropTypes.string,
  last: PropTypes.string,
};

export default Header;
