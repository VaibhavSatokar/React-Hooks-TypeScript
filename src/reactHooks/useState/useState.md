# React.useState() Hook
`useState` is a React Hook that lets you add a state variable to your component.
 ```javascript
 const [state, setState] = React.useState(initialState);
 ```
 
 ## Reference
`React.useState(initialState)`  

The convention is to name state variables like `[something, setSomething]` using array destructuring.


```javascript
import React from 'react' ;

function MyComponent() {
  const [age, setAge] = React.useState(28);
  const [name, setName] = React.useState('Taylor');
  const [todos, setTodos] = React.useState(() => createTodos());
  // ...
```

### Parameters
 - `initialState` : The value you want the state to be initially. It can be a value of any type, but there is a special behavior for functions. This argument is ignored after the initial render. 
 -  If you pass a function as `initialState`, it will be treated as an initializer function. It should be pure, should take no arguments, and should return a value of any type. React will call your initializer function when initializing the component, and store its return value as the initial state.

### Returns 
1. The current state. During the first render, it will match the `initialState` you have passed.
2. The `set function` that lets you update the state to a different value and trigger a re-render.

## Usage
**Ading States to a component**

```javascript
import React from 'react';

function MyComponent() {
  const [age, setAge] = React.useState(42);
  const [name, setName] = React.useState('Taylor');
  // ...
```

`useState` returns an array with exactly two items :
1. The current state of this state    variable, initially set to the initial state you provided.
2. The set function that lets you change it to any other value in response to interaction.

To update what’s on the screen, call the set function with some next state:

``` javascript
function handleClick() {
  setName('Mahak');
}
```

React will store the next state, render your component again with the new values, and update the UI.

## Examples

**Example 1**

```javascript
import React from 'react';
import { Button } from '@mui/material';

export default function Counter() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <Button onClick={handleClick}>
      Clicked {count} times.
    </Button>
  );
}

```

**Example 2 **

``` javascript
import * as React from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { KhTitle } from '../../components/KhElements';

export function UseStateComponent () {
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
 
 ```

