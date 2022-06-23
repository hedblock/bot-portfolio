import React from 'react'

import Typography from '@mui/material/Typography'

const NotConnected = () => {
  return (
    <Typography variant='body1' align='center' color='text.secondary'>
        You must have a web3 connection to access this page.
    </Typography>
  )
}

export default NotConnected