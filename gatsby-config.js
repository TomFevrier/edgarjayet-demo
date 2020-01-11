module.exports = {
    siteMetadata: {
        title: 'Edgar Jayet',
        description: 'Datajournalisme et nouveaux formats',
        author: 'Edgar Jayet',
        menuLinks: [
            {
                name: 'À propos',
                link: '/a-propos/',
            },
            {
                name: 'Projets',
                link: '/projets/',
            },
            {
                name: 'Parcours',
                link: '/parcours/',
            },
            {
                name: 'Contact',
                link: '/contact/',
            },
        ],
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
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                //icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
            },
        },
        'gatsby-plugin-offline',
        'gatsby-plugin-transition-link',
    ],
};
