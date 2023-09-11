import {  Box, Container,Typography } from '@mui/material'
import React from 'react'
import { Instagram, LinkedIn, Twitter, Facebook } from '@mui/icons-material'
import './Footer.css'




export const Footer = () => {
  return (
    <Box>
    <Container  maxWidth='lg' sx={{display:'flex ',alignItems:"center", justifyContent:'space-between', }}>
      <LeftContent/>
       <RightContent/>
    </Container>

    <Box sx={{ background:'#FAF9F8'}}>

    <Container className='Typo'  sx={{justifyContent:'flex-end', paddingTop:'32px'}} >
    <Typography variant="subtitle1" color="initial" marginLeft={1}>Accessibility</Typography>
        <Typography variant="subtitle1" color="initial" marginLeft={1}>EKalakaar</Typography>
        <Typography variant="subtitle1" color="initial" marginLeft={1}> Data Privacy Notice</Typography>
        <Typography variant="subtitle1" color="initial" marginLeft={1}>Legal Policies</Typography>
    </Container>
    </Box>
    </Box>
  )
}



 const LeftContent = () => {

  return (
    <Box sx={{background:"#FAFAFA",padding:"20px", }}>
    <Container className='Typo' sx={{display:'flex'}} >
        <Typography variant="h6" color="initial" marginLeft={0}>English | </Typography>
        <Typography variant="subtitle1" color="initial" marginLeft={1}>FR-Canada</Typography>
        <Typography variant="subtitle1" color="initial" marginLeft={1}>Support</Typography>
        <Typography variant="subtitle1" color="initial" marginLeft={1}>Accessibility</Typography>
        <Typography variant="subtitle1" color="initial" marginLeft={1}>EKalakaar</Typography>
        <Typography variant="subtitle1" color="initial" marginLeft={1}> Data Privacy Notice</Typography>
        <Typography variant="subtitle1" color="initial" marginLeft={1}>Legal Policies</Typography>
    </Container>
</Box>
  )
}
 
const RightContent = () => {
    return (
        <Box sx={{display:'flex' }}>
            {/* <List sx={{display:"flex"}}> */}
                    
                    <Facebook className='icons'/>
                    
            
                    <LinkedIn className='icons' />
                 
            
                   <Instagram className='icons'/>
                 
            
                    <Twitter className='icons'/>
                 
            {/* </List> */}
        </Box>
    )
}
