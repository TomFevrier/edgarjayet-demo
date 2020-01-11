import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import styles from './header.module.css';

const Header = ({ onMouseEnter }) => {
    return (
        <header>
            <Link to={'/'} onMouseEnter={onMouseEnter}>
                <h1>Edgar Jayet</h1>
            </Link>
        </header>
    );
};

export default Header;
