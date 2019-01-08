import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <header className="header">
                    <div className="logo_wrapper">
                        <img src={logo} alt="" />
                    </div>
                    <nav className="navigation">
                        <ul>
                            <li><a href="http://" target="_blank" rel="noopener noreferrer">Login</a></li>
                            <li><a href="http://" target="_blank" rel="noopener noreferrer">Sign in</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default App;
