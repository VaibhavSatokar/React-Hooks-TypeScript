# React.useContext() Hook

`useContext` is a React Hook that lets you read and subscribe to context from your component.

``` javascript
const value = React.useContext(SomeContext)
```

## Reference

`React.useContext(SomeContext)`

Call `useContext` at the top level of your component to read and subscribe to context.

```javascript
import { useContext } from 'react';

function MyComponent() {
  const theme = React.useContext(ThemeContext);
  // ...
```

### Parameters 
`SomeContext` : The context that you’ve previously created with `createContext`. The context itself does not hold the information, it only represents the kind of information you can provide or read from components.

### Returns
`useContext` returns the context value for the calling component. It is determined as the value passed to the closest `SomeContext.Provider` above the calling component in the tree. If there is no such provider, then the returned value will be the `defaultValue` you have passed to `createContext` for that context. The returned value is always up-to-date. React automatically re-renders components that read some context if it changes.

## Usage

**Passing Data deeply into the Tree**

Call `useContext` at the top level of your component to read and subscribe to context.

``` javascript
function Button() {
  const theme = useContext(ThemeContext);
  // ...
```
useContext returns the `context value` for the `context` you passed. To determine the context value, React searches the component tree and finds the closest context provider above for that particular context.

To pass context to a `Button`, wrap it or one of its parent components into the corresponding context provider:

```javascript
function MyPage() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  );
}

function Form() {
  // ... renders buttons inside ...
}
```

It doesn’t matter how many layers of components there are between the provider and the `Button`. When a `Button` anywhere inside of Form calls `useContext(ThemeContext)`, it will receive `"dark"` as the value.

## Example

### Example 1

`Store.tsx` where we created the `AnimalContext` using `createContext`


```javascript

import  React from 'react';

import { createContext } from "react";
import { IAnimal } from '../useContext';


const initialState = {
    name : "",
    description :"",
    img:"",
};

const AnimalContext = createContext<IAnimal>(initialState)
export default AnimalContext;


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

```

Wrapping the Component inside the `AnimalContext` for use :

``` javascript

import * as React from 'react';

import { Box, Button } from '@mui/material'
import { KhTitle } from '../../components/KhElements';

import AnimalContext from './elements/store';
import KhCard from './elements/KhCard';


export interface IAnimal {
  name : string;
  description : string;
  img : string;
}

export interface IUseContextComponentProps {
  
}

export function UseContextComponent (props: IUseContextComponentProps) {
  const [animal, setAnimal] = React.useState<IAnimal>({
    name : "Cat",
    description : "The cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is commonly referred to as the domestic cat or house cat to distinguish it from the wild members of the family.",
    img : "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=1000&q=60"
  })

  const handleClick = () =>{
    setAnimal({
      name :"Tiger",
      description : "Among the largest species of cats in the world, tigers are powerful hunters with sharp teeth, strong jaws and agile bodies. They range across Asia from Russia all the way to Sumatra and mainland Southeast Asia. Researchers still have much to learn about these beautiful, endangered cats. ",
      img : "https://images.unsplash.com/photo-1500463959177-e0869687df26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dGlnZXJ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    })
  }

  return (
    <React.Fragment>
      <Box mb={'4rem'}>
        <KhTitle title='React.useContext()'/>
        <AnimalContext.Provider value={animal}>
          <KhCard />
          <Box
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-around'}
          >
            <Button
            variant="contained"
            onClick={handleClick} 
            >  
              Change Context
            </Button>
          </Box>
        </AnimalContext.Provider>
      </Box>
    </React.Fragment>
  );
}

```

Now consuming the `AnimalContext` in the card Component :

```javascript
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
```
