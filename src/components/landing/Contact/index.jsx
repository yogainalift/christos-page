import React from 'react'
import {Container} from 'Common'
import contact from 'Static/illustrations/contact.svg'
import {Details, Thumbnail, Wrapper} from './styles'

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      lel
    </Details>
    <Thumbnail>
      <img src={contact} alt="I’m Christos and I’m a frontend focused software engineer!"/>
    </Thumbnail>
  </Wrapper>
)
