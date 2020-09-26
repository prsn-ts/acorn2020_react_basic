import React, { Fragment } from 'react';

//함수에 전달된 properties 값에서 원하는 값 추출 
const YourComponent=({parentName, children})=>{
    const myName="원숭이";
    return(
        <Fragment>
            <h2>YourComponent 입니다.</h2>
            <p>내이름은 : <strong>{myName}</strong></p>
            <p>부모의 이름은 : <strong>{parentName}</strong></p>
            <p>자식의 이름은 : <strong>{children}</strong></p>
        </Fragment>
    );
};

export default YourComponent;