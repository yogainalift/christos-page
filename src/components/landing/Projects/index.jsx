import React from 'react'
import {Container} from 'Common'
import {Wrapper} from './styles'

export const Projects = () => {
  // const {
  // 	github: {
  // 		repositoryOwner: {
  // 			repositories: { edges },
  // 		},
  // 	},
  // } = useStaticQuery(graphql`
  // 	{
  // 		github {
  // 			repositoryOwner(login: "yogainalift") {
  // 				repositories(
  // 					first: 8
  // 					orderBy: { field: STARGAZERS, direction: DESC }
  // 				) {
  // 					edges {
  // 						node {
  // 							id
  // 							name
  // 							url
  // 							description
  // 							stargazers {
  // 								totalCount
  // 							}
  // 							forkCount
  // 						}
  // 					}
  // 				}
  // 			}
  // 		}
  // 	}
  // `)
	// {/*<Grid>*/}
	// {/*	{edges.map(({ node }) => (*/}
	// {/*		<Item*/}
	// {/*			key={node.id}*/}
	// {/*			as="a"*/}
	// {/*			href={node.url}*/}
	// {/*			target="_blank"*/}
	// {/*			rel="noopener noreferrer"*/}
	// {/*		>*/}
	// {/*			<Card>*/}
	// {/*				<Content>*/}
	// {/*					<h4>{node.name}</h4>*/}
	// {/*					<p>{node.description}</p>*/}
	// {/*				</Content>*/}
	// {/*				<Stats>*/}
	// {/*					<div>*/}
	// {/*						<img src={starIcon} alt="stars" />*/}
	// {/*						<span>{node.stargazers.totalCount}</span>*/}
	// {/*					</div>*/}
	// {/*					<div>*/}
	// {/*						<img src={forkIcon} alt="forks" />*/}
	// {/*						<span>{node.forkCount}</span>*/}
	// {/*					</div>*/}
	// {/*				</Stats>*/}
	// {/*			</Card>*/}
	// {/*		</Item>*/}
	// {/*	))}*/}
	// {/*</Grid>*/}

  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
    </Wrapper>
  )
}
