import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import { DialogActions } from '@material-ui/core';

import firebase from 'firebase/app';

function Transition(props) {
    return <Slide direction="down" {...props} />;
}

class SignIn extends Component {
    state = {
        open: false,
        email: '',
        password: '',
        first_name: '',
        last_name: ''
    };

    handleClickOpen = (e) => {
        e.preventDefault();
        this.setState({ open: true });
    };

    handleClose = (e) => {
        e.preventDefault();
        this.setState({ open: false });
    };

    handleSignSubmit = (e) => {
        e.preventDefault();

        console.log(this.state);
        
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <li>
                <a href="/Sign" className="link" onClick={this.handleClickOpen} rel="noopener noreferrer">SignIn</a>
                <Dialog open={this.state.open} TransitionComponent={Transition} fullWidth={true} maxWidth={'xs'} keepMounted onClose={this.handleClose} aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
                    <form id="sign-in-form" onSubmit={this.handleSignSubmit} >
                        <DialogContent>
                            <TextField margin="dense" id="email" onChange={this.handleChange} label="Email" type="email" fullWidth />
                            <TextField margin="dense" id="password" onChange={this.handleChange} label="Password" type="password" fullWidth />
                            <TextField margin="dense" id="first_name" onChange={this.handleChange} label="First Name" type="text" fullWidth />
                            <TextField margin="dense" id="last_name" onChange={this.handleChange} label="Last Name" type="text" fullWidth />
                        </DialogContent>
                        <DialogActions>
                            <Button type="submit" color="primary">Sumbit</Button>
                            <Button onClick={this.handleClose} color="primary">Cancel</Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </li>
        )
    }
}

export default SignIn;