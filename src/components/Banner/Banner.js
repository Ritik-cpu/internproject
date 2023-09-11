import { Box ,Container, Typography} from '@mui/material'
import React from 'react'
import './Banner.css'
export const Banner = () => {
  return (
    <Box className="banner" >
         <Container maxWidth="lg">
          <Box >
            <Typography variant="h4" color="#AD2F3B">Committed to our culture</Typography>
            <Typography variant="body1" color="#AD2F3B">
            We will only achieve our mission if we live our culture. We start by becoming learners in all things –
having a growth mindset. Then we apply that mindset to learning about our customers, being
diverse and inclusive and working together as one.
            </Typography>
          </Box>
         </Container>


    </Box>
  )
}
