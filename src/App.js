import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/nav';

class App extends Component {
    render() {
        return (
            <div className="app">
                <header className="header">
                    <div className="logo_wrapper">
                        <img src={logo} alt="" />
                    </div>
                    <Navigation />
                </header>
            </div>
        );
    }
}

export default App;
