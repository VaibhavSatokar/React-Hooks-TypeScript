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