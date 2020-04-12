module.exports = {
    plugins: [
        'podbase-theme-mercury',
        {
            resolve: `gatsby-source-rss-feed`,
            options: {
                url: `https://feed.pod.space/filipandfredrik`,
                name: `Podcast`,
            },
        },
    ],
}
