import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const Toast = ({ open, message, severity, vertical, horizontal, onClose }) => {
    return (
        <Snackbar
        anchorOrigin={{vertical, horizontal}}
        key={`${vertical}, ${horizontal}`}
        open={open}
        autoHideDuration={2000}
        onClose={onClose}
        >
            <Alert elevation={6} variant='filled' severity={severity}>
                {message}
            </Alert>

        </Snackbar>
    )
}

export default Toast;