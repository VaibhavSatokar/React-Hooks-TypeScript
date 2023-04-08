import React from 'react';
import { Divider } from '@mui/material'
import { Container} from '@mui/material';

import { UseStateComponent } from './reactHooks/useState/useState';
import { UseEffectComponent } from './reactHooks/useEffect/useEffect';
import { UseContextComponent } from './reactHooks/useContext/useContext';
import { UseReducerComponent } from './reactHooks/useReducer/useReducer';
import { UseRefComponent } from './reactHooks/useRef/useRef';

function App() {
  return (
    <React.Fragment>
      <Container maxWidth='sm'>
        <UseStateComponent/>
        <Divider />
        <UseEffectComponent/>
        <Divider />
        <UseContextComponent />
        <Divider />
        <UseReducerComponent />
        <Divider />
        <UseRefComponent />
        <Divider/>
        {/* <CustomHookComponent/>
        <Divider /> */}
     </Container>
    </React.Fragment>
  );
}

export default App;
