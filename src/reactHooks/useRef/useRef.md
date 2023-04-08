# React.useRef()
`useRef` is a React Hook that lets you reference a value that’s not needed for rendering.

```javascript
const ref = React.useRef(initialValue)
```
## Reference
`React.useRef(initialState)`

Call `useRef` at the top level of your component to declare a ref.

```javascript
import React from 'react';

function MyComponent() {
  const intervalRef = React.useRef(0);
  const inputRef = React.useRef(null);
  // ...
```
### Parameters
 `initialValue` :
The value you want the ref object’s `current` property to be initially. It can be a value of any type. This argument is ignored after the initial render.

### Returns
`useRef` returns an object with a single property:
- `current`: Initially, it’s set to the initialValue you have passed. You can later set it to something else. If you pass the ref object to React as a ref attribute to a JSX node, React will set its current property.
  
On the next renders, useRef will return the same object.

## Usage
By using a ref, you ensure that:

- You can store information between re-renders (unlike regular variables, which reset on every render).
- Changing it does not trigger a re-render (unlike state variables, which trigger a re-render).
- The information is local to each copy of your component (unlike the variables outside, which are shared).
  
Changing a ref does not trigger a re-render, so refs are not appropriate for storing information you want to display on the screen. Use state for that instead.

## Examples

```javascript

/* useRef is a React Hook that lets you reference a value that’s not needed for rendering. */

import React from 'react';
import { KhTitle } from '../../components/KhElements';

import { Box, Button } from '@mui/material'

export function UseRefComponent () {
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

```
