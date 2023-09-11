import { SectionLayout } from './SectionLayout'
import { Box, Container, CardMedia, Typography } from '@mui/material'
import { Tabs } from '../Tabs/Tabs'


export const SectionTop = () => {
    
  return (
    <Box>
        <Container maxWidth="lg">
        <Typography marginTop={"32px"} variant="h4" color="initial">
            Our cultural attributes
        </Typography>
        </Container>
        <SectionLayout left={<Tabs/>} right={<RightCont/>}/>

    </Box>
  )
}

const RightCont=()=>{
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