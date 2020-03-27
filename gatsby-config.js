module.exports = {
    siteMetadata: {
        title: 'Edgar Jayet',
        description: '',
        author: 'Edgar Jayet',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-strapi',
            options: {
                apiURL: 'https://edgarjayet.herokuapp.com',
                contentTypes: [
                    // List of the Content Types you want to be able to request from Gatsby.
					'about',
					'project',
					'article',
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
				icon: 'src/images/icon.png', // This path is relative to the root of the site.
            },
        },
        'gatsby-plugin-offline',
        'gatsby-plugin-transition-link',
    ],
};
