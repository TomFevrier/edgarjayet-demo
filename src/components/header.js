import React from 'react';
import { Link } from 'gatsby';

import './header.module.css';

const Header = ({ onMouseEnter, onClick, color }) => {
    return (
        <header>
            <Link to={'/'} onMouseEnter={onMouseEnter} onClick={onClick}>
                <h1 style={{ 'color': color || 'black' }}>Edgar Jayet</h1>
            </Link>
        </header>
    );
};

export default Header;
