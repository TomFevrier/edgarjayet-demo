import React from 'react';
import { Link } from 'gatsby';

import './header.module.css';

const Header = ({ onMouseEnter, color }) => {
    return (
        <header>
            <Link to={'/'} onMouseEnter={onMouseEnter}>
                <h1 style={{ 'color': color || 'black' }}>Edgar Jayet</h1>
            </Link>
        </header>
    );
};

export default Header;
