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

class SignUp extends Component {
    state = {
        open: false,
        name_sign: '',
        password_sign: ''
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
                <a href="/Sign" className="link" onClick={this.handleClickOpen} rel="noopener noreferrer">SignUp</a>
                <Dialog open={this.state.open} TransitionComponent={Transition} fullWidth={true} maxWidth={'xs'} keepMounted onClose={this.handleClose} aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
                    <form id="sign-up-form" onSubmit={this.handleSignSubmit} >
                        <DialogContent>
                            <TextField margin="dense" id="name_sign" onChange={this.handleChange} label="Email" type="email" fullWidth />
                            <TextField margin="dense" id="password_sign" onChange={this.handleChange} label="Password" type="password" fullWidth />
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

export default SignUp;