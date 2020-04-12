import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const EpisodeList = () => {
    const data = useStaticQuery(graphql`
        query PodcastsQuery {
            allFeedPodcast {
                edges {
                    node {
                        title
                    }
                }
            }
        }
    `)

    const episodes = data.allFeedPodcast.edges

    return (
        <ul>
            {episodes.map((episode) => (
                <li>{episode.node.title}</li>
            ))}
        </ul>
    )
}

export default EpisodeList
