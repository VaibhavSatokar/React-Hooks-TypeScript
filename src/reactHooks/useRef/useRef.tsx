
/* useRef is a React Hook that lets you reference a value that’s not needed for rendering. */

import React from 'react';
import { KhTitle } from '../../components/KhElements';

import { Box, Button } from '@mui/material'

export interface IUseRefComponentProps {
}

export function UseRefComponent (props: IUseRefComponentProps) {
  const ref = React.useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('Clicked '+ref.current+' times')
  }

  return (
    <React.Fragment>
      <KhTitle title='React.useRef()'/>
      <Box mt='2rem' mb='4rem' display={'flex'} flexDirection={'row'} justifyContent={'space-around'}>
        <Button size='large' variant='contained' onClick={handleClick}>Click Me</Button>
      </Box>
    </React.Fragment>
  );
}
