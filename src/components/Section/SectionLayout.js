import { Grid, Container } from '@mui/material'
import React from 'react'

export const SectionLayout = ({left,right}) => {
  return (
   
      <Container sx={{marginTop:'32px'}} maxWidth="lg">
        <Grid  container spacing={1}>
          <Grid xs={12} md={6}>
            {left}
          </Grid>
          <Grid xs={12} md={6}>
            {right}
          </Grid>
        </Grid>
      </Container>

  )
}
