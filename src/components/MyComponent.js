import React, { Fragment, useState } from 'react';

//함수의 인자로 properties 가 전달된다. 
const MyComponent=(props)=>{
    const myName="김구라";
    /*
    const result=useState(0); //useState의 결과는 [0, f] (f는 함수) 이런식의 배열이 나온다.
    const count=result[0]; //count에는 useState() 함수의 인자값으로 넘긴 0이 전달된다.

    //setCount에는 useState() 함수의 배열 인덱스 중에서 상태값을 변경하고 UI 업데이트를 해주는
    // setState() 같은 함수가 전달된다.
    const setCount=result[1]; 
    */
    //위에 주석된 코드 내용을 아래와 같이 한줄로 대체가 가능하다.
    //count 는 초기값, setCount 는 count 를 바꿀때 호출하는 함수 
    const [count, setCount]=useState(0); // 모양을 생각해보면 [0, f] 이런 모양이 된다. 0은 전달된 초기값 f는 상태값 변경 후 UI 업데이트 해주는 함수이다.

    return (
        <Fragment>
            <h2>MyComponent 입니다.</h2>
            <p>내이름은 : <strong>{myName}</strong></p>
            <p>부모의 이름은 : <strong>{props.parentName}</strong></p>
            {/* 
                props.children에서 children은 App07_functional.js 예제에
                MyComponent를 임포트하여 쓰고 있는 데 그중에서 innerText 부분
                즉, "손오공"을 나타낸다.
            */}
            <p>자식의 이름은 : <strong>{props.children}</strong></p>
            <button onClick={()=>{
                setCount(count+1);
            }}>{count}</button>
        </Fragment>
    );
};

export default MyComponent;