/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import Header from './header';
import styles from './layout.module.css';

// if (typeof window === 'undefined') {
//     global.window = {};
// }

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Header />
                <main>{this.props.children}</main>
                <footer style={{ display: 'none' }}>
                    © {new Date().getFullYear()} -{' '}
                    <a
                        href="https://github.com/TomFevrier/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Tom Février
                    </a>
                    <br />
                    Powered by{' '}
                    <a
                        href="https://www.gatsbyjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Gatsby
                    </a>{' '}
                    &{' '}
                    <a
                        href="http://strapi.io"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Strapi
                    </a>
                </footer>
            </>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
