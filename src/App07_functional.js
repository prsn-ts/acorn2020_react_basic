import React from 'react';
import MyComponent from './components/MyComponent';
import YourComponent from './components/YourComponent';

const App07_functional=()=>{

    return (
        <div>
            <h1>함수기반 component</h1>
            <MyComponent parentName="app07">손오공</MyComponent>
            <YourComponent parentName="app07">드레곤</YourComponent>
        </div>
    );
};

export default App07_functional;