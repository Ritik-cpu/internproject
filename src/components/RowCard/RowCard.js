import React from 'react'
import {Grid,Container} from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const RowCard = () => {
  return (
    <Container sx={{marginTop:'32px'}}  maxWidth="lg">
      <Typography mt={2} variant="h4" color="initial">Our culture in action</Typography>
      <Typography my={2} variant="body1" color="initial">Our culture leads us to find ways to help people do ordinary and sometimes extraordinary things.</Typography>

    <Grid  container spacing={2}>
      <Grid  xs={12} sm={6} md={3} >
       <ActionAreaCard/>
      </Grid>
      <Grid  xs={12} sm={6} md={3}>
      <ActionAreaCard/>
      </Grid>
      <Grid  xs={12} sm={6} md={3}>
      <ActionAreaCard/>
      </Grid >
      <Grid  xs={12} sm={6} md={3}>
      <ActionAreaCard/>
      </Grid>
    </Grid>
  </Container>
  )
}

export default RowCard



 function ActionAreaCard() {
  return (
    <Card sx={{margin:"16px"}} > 
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/asset/cardpic.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
