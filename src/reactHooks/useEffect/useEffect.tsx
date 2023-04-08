import * as React from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import { KhTitle } from '../../components/KhElements';

export interface IUseEffectComponentProps {
}

export function UseEffectComponent (props: IUseEffectComponentProps) {
    const [value, setValue] = React.useState(0)

    React.useEffect(() => { 
        const timer = window.setInterval(() => {
            setValue((v)=> v + 1)
        },1000);

        return ()=>window.clearInterval(timer);
    }, [])
    
    return (
    <React.Fragment>
      <Box sx={{mb:'4rem', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
        <KhTitle title='React.useEffect()' />
        <Paper elevation={8}>
          <Box component={'div'} sx={{paddingInline:'2rem'}}>
            <Typography textAlign={'center'} fontSize={100}>{value}</Typography>
            <Typography textAlign={'center'} variant='h4'>Seconds</Typography>       
          </Box>
        </Paper>
        <Button  variant='contained' onClick={()=>setValue(0)} sx={{mt:'2rem'}}>Reset Timer</Button>
      </Box>
    </React.Fragment>
  );
}
