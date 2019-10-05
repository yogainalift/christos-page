import React from 'react'
import {Container} from 'Common'
import {socialLinks} from 'Data'
import {Details, Flex, Links, Wrapper} from './styles'


const mySocial = [
  {
    'id': 0,
    'name': 'Telegram',
    'link': `${socialLinks.telegram}`,
    'icon': '/icons/telegram.svg',
  },
  {
    'id': 1,
    'name': 'Github',
    'link': `${socialLinks.github}`,
    'icon': '/icons/github.svg',
  },
  {
    'id': 2,
    'name': 'StackOverflow',
    'link': `${socialLinks.stackoverflow}`,
    'icon': '/icons/stackoverflow.svg',
  },
  {
    'id': 3,
    'name': 'Twitter',
    'link': `${socialLinks.twitter}`,
    'icon': '/icons/twitter.svg',
  },
]

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Christos Tselepidas</h2>
        <span>
           © All rights are reserved | {new Date().getFullYear()} | Made with{' '}
          <span aria-label="love" role="img" />
          {' '}
          by{' '}
          <a
            href="https://christos.page"
            rel="noopener noreferrer"
            target="_blank"
          >
            Christos Tselepidas
          </a>
        </span>
      </Details>
      <Links>
        {mySocial.map(({id, name, link, icon}) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`follow me on ${name}`}
          >
            <img width="24" src={icon} alt={name} />
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
)
