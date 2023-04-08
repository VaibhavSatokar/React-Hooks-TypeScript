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