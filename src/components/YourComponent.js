import React, { Fragment } from 'react';

//함수에 전달된 properties 값에서 원하는 값 추출
/*
    YourComponent 함수의 인자값으로 부모 컴포넌트(App07_functional)의
    속성(props)이 넘어오는데 이 데이터를 사용하여 렌터링을 통해 결과를 UI에 반영할 수 있다. 
*/
const YourComponent=(props)=>{ //함수의 인자값으로 {parentName, children} 이렇게 대체할 수 있다.
    /*
        함수의 인자값으로 {parentName, children} 이렇게 받을 시 속성에 대한 값을 바로 쓸 수 있다.
        바로 밑에 코드 두줄, props로 받은 부모컴포넌트의 속성 값을 따로 변수에 저장할 필요가 없어진다.
    */
    const parentName=props.parentName; 
    const children=props.children;

    const myName="원숭이";
    return(
        <Fragment>
            <h2>YourComponent 입니다.</h2>
            <p>내이름은 : <strong>{myName}</strong></p>
            <p>부모의 이름은 : <strong>{parentName}</strong></p>
            {/* 
                props.children에서 children은 App07_functional.js 예제에
                YourComponent를 임포트하여 쓰고 있는 데 그중에서 innerText 부분
                즉, "드래곤"을 나타낸다.
            */}
            <p>자식의 이름은 : <strong>{children}</strong></p>
        </Fragment>
    );
};

export default YourComponent;