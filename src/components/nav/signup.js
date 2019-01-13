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

class Sign extends Component {
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

    handleSignSubmit = (e) => {
        e.preventDefault();

        const signForm = e.target;
        const email = signForm['name_sign'].value;
        const password = signForm['password_sign'].value;

        console.log(signForm, email, password);
    }

    render() {
        return (
            <li>
                <a href="/Sign" className="link" onClick={this.handleClickOpen} rel="noopener noreferrer">Sign</a>
                <Dialog open={this.state.open} TransitionComponent={Transition} fullWidth={true} maxWidth={'xs'} keepMounted onClose={this.handleClose} aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
                    <form id="sign-form" onSubmit={this.handleSignSubmit} >
                        <DialogContent>
                            <TextField margin="dense" id="name_sign" label="Email_Address_sign" type="email" fullWidth />
                            <TextField margin="dense" id="password_sign" label="Password_sign" type="password" fullWidth />
                            {/* <TextField margin="dense" id="password_repeat_sign" label="Password_repeat_sign" type="password" fullWidth /> */}
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

export default Sign;