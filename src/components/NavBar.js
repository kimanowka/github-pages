import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link active" to='/'>Git Hub</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/country'>Country</Link>
            </li>
        </ul>
    );
};

export default NavBar;