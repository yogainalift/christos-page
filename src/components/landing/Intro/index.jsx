import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {Header} from 'Theme'
import {Button, Container} from 'Common'
import dev from 'Static/illustrations/dev.svg'
import {Details, IntroWrapper, Thumbnail, Wrapper} from './styles'

export const Intro = () => (
  <Wrapper>
    <Header/>
    <IntroWrapper as={Container}>
      <Details>
        <h1>Hi There!</h1>
        <h4>I’m Christos and I’m a frontend focused software engineer!</h4>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
      <Thumbnail>
        <img src={dev} alt="I’m Christos and I’m a frontend focused software engineer!"/>
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
)
