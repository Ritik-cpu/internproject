import React from 'react'
import {SectionLayout} from '../Section/SectionLayout'
import { Box, Button, List, ListItem, TextField, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export const Formset = () => {
  return (
    <div>
        <SectionLayout left={<LeftForm/>} right={<RightForm/>}/>
    </div>
  )
}

const add="Why are you interested for eK Fellowship \n 1) What can you offer \n 2) What are your expectations?"
console.log(add)

const LeftForm=()=>{
    return(
        <Box my={2}>
           
           <List>
            <ListItem>
                <TextField
                fullWidth
                id=""
                label="Name"
                //   value={}
                //   onChange={}
                variant='standard'
                />
            </ListItem>
            <ListItem>
                <TextField
                fullWidth
                id=""
                label="Age (Year)"
                //   value={}
                //   onChange={}
                variant='standard'
                />
            </ListItem>
            <ListItem>
                <TextField
                fullWidth
                id=""
                label="Adress"
                //   value={}
                //   onChange={}
                variant='standard'
                />
                <TextField
                fullWidth
                sx={{marginLeft:"16px"}}
                id=""
                label="Postcode"
                //   value={}
                //   onChange={}
                variant='standard'
                />
            </ListItem>
            <ListItem>
                <TextField
                fullWidth
                id=""
                label="Language"
                //   value={}
                //   onChange={}
                variant='standard'
                />
            </ListItem>
            <ListItem>
                <TextField
                fullWidth
                id=""
                label="Education Qualification"
                //   value={}
                //   onChange={}
                variant='standard'
                />
            </ListItem>
            <ListItem>
                <TextField
                fullWidth
                id=""
                label="Mention your passion including your interest in Traditional Performing Art?"
                //   value={}
                //   onChange={}
                variant='standard'
                />
            </ListItem>
            <ListItem>
                <TextField
                fullWidth
                id=""
                label="Are you available for at least 4-6 hours daily for minimum of six months?"
                //   value={}
                //   onChange={}
                variant='standard'
                />
            </ListItem>
            <ListItem>
                <TextField
                fullWidth
                id=""
                
                label={add}
                //   value={}
                //   onChange={}
                variant='standard'
                />
            </ListItem>
           </List>
        </Box>
    )
}




export default function RightForm() {
  return (
    <Box mt={10}>
        
    <ButtonStyle
    fullWidth
      component="label"
      variant="contained"
      startIcon={<CloudUploadIcon />}
      href="#file-upload"
      
    >
      Upload Profile/CV/Any Document
      <VisuallyHiddenInput type="file" />
    </ButtonStyle>
    <Typography  variant="caption" color="#8E8E8E">Attach file. File size of your documents should not exceed 10MB</Typography>
    <Typography variant="h6" my={4} color="#8E8E8E">Other</Typography>
    </Box>
  );
}

const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;

  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

const ButtonStyle=styled(Button)`
border:2px #8E8E8E dashed;
height:20vh;
background:white;
font-size: 125%;
color:#8E8E8E;

`