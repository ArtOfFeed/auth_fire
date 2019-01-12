import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import { DialogActions } from '@material-ui/core';

function Transition(props) {
    return <Slide direction="down" {...props} />;
}

class Login extends Component {
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
            <li>
                <a href="/login" className="link" onClick={this.handleClickOpen} rel="noopener noreferrer">Login</a>
                <Dialog open={this.state.open} TransitionComponent={Transition} fullWidth={true} maxWidth={'xs'} keepMounted onClose={this.handleClose} aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
                    <DialogContent>
                        <TextField margin="dense" id="name" label="Email Address" type="email" fullWidth />
                        <TextField margin="dense" id="password" label="Password" type="password" fullWidth />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">Sumbit</Button>
                        <Button onClick={this.handleClose} color="primary">Cancel</Button>
                    </DialogActions>
                </Dialog>
            </li>
        )
    }
}

export default Login;