import * as React from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { KhTitle } from '../../components/KhElements';

export interface IUseStateComponentProps {
}

export function UseStateComponent (props: IUseStateComponentProps) {
    const [count, setCount] = React.useState(0)

    return (
    <React.Fragment>
      <KhTitle title='React.useState()' />
      <Box sx={{mt:'2rem', display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
        <Button 
        variant="contained" 
        size='large' 
        onClick={()=>setCount(count+1)}
        endIcon={<AddCircleIcon/>}
        >
          Count
        </Button>
      
        <Paper elevation={8} >
          <Box component={'div'} sx={{paddingInline:'2rem'}}>
            <Typography textAlign={'center'} fontSize={100}>{count}</Typography>
            <Typography variant='h4'>times clicked</Typography>       
          </Box>
        </Paper>

        <Button 
        variant="contained" 
        size='large' 
        onClick={()=>setCount(count-1)}
        endIcon={<RemoveCircleIcon/>}
        >
          Count
        </Button> 
      </Box>  
      <Box component={'div'} display={'flex'} flexDirection={'column'} justifyContent={'space-around'} mt={'2rem'} mb={'4rem'}>
        <Button  variant='contained' onClick={()=>setCount(0)}>Reset Count</Button>
      </Box>
    </React.Fragment>
  );
}
