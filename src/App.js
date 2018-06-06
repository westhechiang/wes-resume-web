import React from 'react';
import {
  Theme,
  ThemeProvider,
  ExtendedFlex,
} from 'wes-coreui';

import PaperSection from './components/PaperSection';
import Paper from './components/Paper';
import Background from './components/Background';
import Profile from './components/Profile';
import ResumeBlock from './components/ResumeBlock';
import Experience from './components/Experience';
import Education from './components/Education';
import Blurb from './components/Blurb';

import educationIcon from './assets/mortarboard.svg';
import experienceIcon from './assets/briefcase.svg';
import bgImage from './assets/dust_scratches.png';

import resume from './resume.json';
import iconsLicensing from './iconsLicensing';

const App = () => {
  console.log(iconsLicensing);
  return (
    <ThemeProvider theme={Theme}>
      <Background>
        <Paper>
          <ExtendedFlex
            align="flex-start"
            flexDirection={['column', 'column', 'row']}
            height="100%"
          >
            <PaperSection
              w={[1, 1, 0.3]}
              bg="blue.0"
            >
              <Profile data={resume.profile} />
            </PaperSection>
            <PaperSection
              w={[1, 1, 0.7]}
              bg="gray.2"
              bgImage={bgImage}
            >
              <ResumeBlock
                title="Work Experience"
                icon={experienceIcon}
              >
                <Experience
                  data={resume.experience}
                />
              </ResumeBlock>
              <ResumeBlock
                title="Education"
                icon={educationIcon}
              >
                <Education
                  data={resume.education}
                />
              </ResumeBlock>
            </PaperSection>
          </ExtendedFlex>
        </Paper>
        <Blurb />
      </Background>
    </ThemeProvider>
  );
};

export default App;
