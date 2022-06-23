import React from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const AdminUnathorized = () => {

  return (
    <Stack spacing={1}>
      <Typography variant='body1' align='center' color='text.secondary'>
          You must be an admin to access this page.
      </Typography>
    </Stack>
  )
}

export default AdminUnathorized