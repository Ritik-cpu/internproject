import React from 'react'
import { SectionLayout } from './SectionLayout'
import { Box, CardMedia, Typography } from '@mui/material'

export const SectionLast = () => {
  return (
    <Box marginTop={"78px"}>
        <SectionLayout left={<Left/>} right={<Right/>}/>
    </Box>
  )
}

const Right=()=>{
    return(
        <Box  >
        <CardMedia
          component="img"
          alt="green iguana"
          height="350px"
          width={"100%"}
          image="/asset/mypic.png"
        />
          </Box>
    )
}

const Left=()=>{
    return(
        <Box sx={{ display:"flex",flexDirection:"column",  height:"100%", padding:'16px', marginLeft:"32px",  justifyContent:"center"}}>
         <Typography variant="h5" color="initial">
         Lizards are a widespread group of squamate
         </Typography>
         <Typography variant="body1" color="initial">
         Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information
         </Typography>
        </Box>
    )
}