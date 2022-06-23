import React from 'react'

import Typography from '@mui/material/Typography'

const TokenUnauthorized = () => {
  return (
    <Typography variant='body1' align='center' color='text.secondary'>
        You must own a RVPC NFT to access this page.
    </Typography>
  )
}

export default TokenUnauthorized