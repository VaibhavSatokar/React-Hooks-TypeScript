import React from 'react';

import { Box, Button, Paper, Typography } from '@mui/material';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import { KhTitle } from '../../components/KhElements';
import CountReducer from './elements/countReducer';
import { initialCountState } from './elements/countReducer';

import { increaseAction, decreaseAction } from './elements/countActions';

export interface IUseReducerComponentProps {
}

export function UseReducerComponent (props: IUseReducerComponentProps) { 
  const [state, dispatch] = React.useReducer(CountReducer, initialCountState);
    
  return (
    <React.Fragment>
      <KhTitle title='React.useReducer()'/>
        <Box sx={{mt:'2rem', mb:'4rem', display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
            <Button 
            variant="contained" 
            size='large' 
            endIcon={<AddCircleIcon/>}
            onClick={()=> dispatch(increaseAction)}
            >
                Increment
            </Button>
        
            <Paper elevation={8} >
            <Box component={'div'} sx={{paddingInline:'2rem'}}>
                <Typography textAlign={'center'} fontSize={100}>{state.value}</Typography>
            </Box>
            </Paper>

            <Button 
            variant="contained" 
            size='large' 
            endIcon={<RemoveCircleIcon/>}
            onClick={()=> dispatch(decreaseAction)}
            >
              Decrement
            </Button> 
        </Box>  
     </React.Fragment>
  );
}
