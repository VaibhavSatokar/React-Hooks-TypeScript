import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';

import AnimalContext from './store';
import { IAnimal } from '../useContext';


export default function KhCard() {
  const animal = React.useContext<IAnimal>(AnimalContext)

  return (
    <React.Fragment>
      <Card sx={{ maxWidth: '100%', height:'100%', mb: '4rem' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={animal.img}
            alt="animal img"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" fontFamily={'Algerian'} fontWeight={'600'} component="div" align='center'>
              {animal.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{}}>
              {animal.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </React.Fragment>
  );
}