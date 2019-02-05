import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul>
                <SignUp />
                <SignIn />
            </ul>
        </nav>
    );
}

export default Navigation;