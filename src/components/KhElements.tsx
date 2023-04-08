import * as React from 'react';
import { Box, Typography } from '@mui/material';

export interface IKhTitleProps {
    title : string
}

export function KhTitle (props: IKhTitleProps) {
  return (
    <React.Fragment>
      <Box
      component='div'
      mt={'2rem'}
      mb={'2rem'}
      >
        <Typography 
        variant='h3' 
        align='center'
        fontFamily={'Algerian'}
        color={'Highlight'}
        fontWeight={'500'}
        >
            {props.title}
        </Typography>
      </Box>
    </React.Fragment>
  );
}

