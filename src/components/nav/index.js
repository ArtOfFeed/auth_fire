import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';

function Transition(props) {
    return <Slide direction="down" {...props} />;
}

class Navigation extends Component {
    state = {
        open: false,
    };

    handleClickOpen = (e) => {
        e.preventDefault();
        this.setState({ open: true });
    };

    handleClose = (e) => {
        e.preventDefault();
        this.setState({ open: false });
    };

    render() {
        return (
            <nav className="navigation">
                <ul>
                    <li><a href="javascript:void(0)" className="link" onClick={this.handleClickOpen} rel="noopener noreferrer">Login</a></li>
                    <li><a href="javascript:void(0)" className="link" rel="noopener noreferrer">Sign in</a></li>
                </ul>
                <Dialog open={this.state.open} TransitionComponent={Transition} keepMounted onClose={this.handleClose} aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
                    <TextField margin="dense" id="name" label="Email Address" type="email" />
                    <Button onClick={this.handleClose} color="primary">Sumbit</Button>
                    <Button onClick={this.handleClose} color="primary">Cancel</Button>
                </Dialog>
            </nav>
        );
    }
}

export default Navigation;