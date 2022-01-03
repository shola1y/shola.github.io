import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Profpic from '../Profpic/Profpic';


const Hero = (props) => (
  <>
    <Section >
    <SectionTitle main center>
          Biography <br />
    </SectionTitle>
      <LeftSection col-12 col-lg-4>
      <Profpic/>
        
        <SectionText>
        I'm a fullstack developer who loves to build exciting applications. 
        </SectionText>
      </LeftSection>
      
    </Section>
  </>
);

export default Hero;