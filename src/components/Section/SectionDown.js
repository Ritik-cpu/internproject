import React from 'react'
import { SectionLayout } from './SectionLayout'
import { Box,  CardMedia, Typography } from '@mui/material'

export const SectionDown = () => {
  return (
    <Box marginTop={"78px"}>
        <SectionLayout left={<Left/>} right={<Right/>}/>
    </Box>
  )
}

const Left=()=>{
    return(
        <Box  >
        <CardMedia
          component="img"
          alt="green iguana"
          height="350px"
          width={"100%"}
          sx={{borderRadius: '100px 100px 0px 0px'}}
          image="/asset/pic3.png"
        />
          </Box>
    )
}

const Right=()=>{
    return(
        <Box sx={{ display:"flex",flexDirection:"column", padding:'16px',  height:"100%", marginLeft:"32px",  justifyContent:"center"}}>
         <Typography variant="h5" color="initial">
         Lizards are a widespread group of squamate
         </Typography>
         <Typography variant="body1" color="initial">
         Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information
         </Typography>
        </Box>
    )
}