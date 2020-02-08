import React from 'react';
import { Link } from 'gatsby';

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
