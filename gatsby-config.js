module.exports = {
    siteMetadata: {
        title: 'Edgar Jayet',
        description: 'Datajournalisme et nouveaux formats',
        author: 'Edgar Jayet',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-strapi',
            options: {
                apiURL: 'https://edgarjayet.herokuapp.com',
                //apiURL: 'https://localhost:1337',
                contentTypes: [
                    // List of the Content Types you want to be able to request from Gatsby.
                    'project',
					'about',
					'article',
					'job'
                ],
                queryLimit: 1000,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                start_url: '/',
            },
        },
        'gatsby-plugin-offline',
        'gatsby-plugin-transition-link',
    ],
};
