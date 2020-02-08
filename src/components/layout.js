/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

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
                <main>{this.props.children}</main>
            </>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
