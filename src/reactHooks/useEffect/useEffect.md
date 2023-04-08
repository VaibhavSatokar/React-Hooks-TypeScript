# React.useEffect() Hook
`useEffect`is a React Hook that lets you synchronize a component with an external system.

```javascript
React.useEffect(setup, dependencies?)
```
## Reference
`React.useEffect(setup, dependencies?)`

Call useEffect at the top level of your component to declare an Effect :
 
```javascript
React.useEffect(() => {
    // Setup Function

    return () => {
        // Cleanup Function
    }
}, [//List of dependencies])
)

```
### Parameters

- `setup` : The function with your Effect’s logic. Your setup function may also optionally return a cleanup function. When your component is first added to the DOM, React will run your setup function. After every re-render with changed dependencies, React will first run the cleanup function (if you provided it) with the old values, and then run your setup function with the new values. After your component is removed from the DOM, React will run your cleanup function one last time.
- optional `dependencies` :     The list of all reactive values referenced inside of the setup code. Reactive values include props, state, and all the variables and functions declared directly inside your component body. If your linter is configured for React, it will verify that every reactive value is correctly specified as a dependency. The list of dependencies must have a constant number of items and be written inline like [dep1, dep2, dep3]. React will compare each dependency with its previous value using the Object.is comparison. If you omit this argument, your Effect will re-run after every re-render of the component. See the difference between passing an array of dependencies, an empty array, and no dependencies at all.

### Returns
`useEffect` returns `undefined`. 

## Usage

**Connecting to an external system**

Some components need to stay connected to the network, some browser API, or a third-party library, while they are displayed on the page. These systems aren’t controlled by React, so they are called external.

To connect your component to some external system, call useEffect at the top level of your component :

```javascript
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    // Setup Code
  	const connection = createConnection(serverUrl, roomId);
    connection.connect();
  	return () => {
      // CleanUp Code
      connection.disconnect();
  	};
  }, [serverUrl, roomId]); // Listof dependencies
  // ...
}

```

You need to pass two arguments to useEffect :

1. A setup function with setup code that connects to that system.
   
   - It should return a cleanup function with cleanup code that disconnects from that system.

2. A list of dependencies including every value from your component used inside of those functions.

## Examples 

```javascript
import * as React from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import { KhTitle } from '../../components/KhElements';

export function UseEffectComponent () {
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

```

