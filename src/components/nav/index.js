import React from 'react';
import Login from './login';
import Sign from './signup';

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul>
                <Login />
                <Sign />
            </ul>
        </nav>
    );
}

export default Navigation;