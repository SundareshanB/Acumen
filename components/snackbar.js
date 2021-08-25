import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

const Errors = () => {

    return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={true}
        autoHideDuration={5000}
        message="Error occured"
        
      />
    </div>
  );
}

export default Errors;