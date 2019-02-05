import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/nav';
import { BrowserRouter, Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <header className="header">
                        <div className="logo_wrapper">
                            <Link to="/"><img src={logo} alt="" /></Link>
                        </div>
                        <Navigation />
                    </header>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
