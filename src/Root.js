// src/Root.js file
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App09_SinglePage from './App09_SinglePage';

const Root=()=>{

    return(
        <BrowserRouter>
            <App09_SinglePage/>
        </BrowserRouter>
    );
};

export default Root; 