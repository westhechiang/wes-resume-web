import React from 'react';
import PropTypes from 'prop-types';
import {
  ExtendedFlex,
  ExtendedBox,
} from 'wes-coreui';

import IconLabel from '../IconLabel';

const Education = ({
  data,
}) => {
  return (
    <ExtendedFlex
      flexDirection={['column', 'column', 'row']}
      align={['flex-start', 'flex-start', 'center']}
    >
      {
        Object.entries(data).map((entry) => {
          const label = entry[0] === 'duration' ?
            `${entry[1].start} - ${entry[1].end}` :
            entry[1];
          return (
            <ExtendedBox
              pb={[2, 2, 0]}
              key={entry[0]}
            >
              <IconLabel
                icon={entry[0]}
                iconSize={20}
                label={label}
              />
            </ExtendedBox>
          );
        })
      }
    </ExtendedFlex>
  );
};

Education.propTypes = {
  data: PropTypes.object,
};

export default Education;
