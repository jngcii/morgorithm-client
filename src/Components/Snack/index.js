import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Snack({ snackOpen, isSuccess, msg }) {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    snackOpen.onChange(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={snackOpen.value}
      autoHideDuration={1500}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={isSuccess ? "success" : "error"}>
        {msg}
      </Alert>
    </Snackbar>
  );
}
