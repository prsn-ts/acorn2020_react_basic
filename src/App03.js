import React, { Component } from 'react';

class App03 extends Component {
    render() {
        //JSX 의 목록
        const jsx_names=[(<li key={0}>김구라</li>),(<li key={1}>해골</li>),(<li key={2}>원숭이</li>)];
        const names=["김구라","해골","원숭이"];
        const jsx_names2=[];
        for(let i=0; i<names.length; i++){
            let tmp=(<li key={i}>{names[i]}</li>);
            jsx_names2.push(tmp);
        }

        //배열안에 들어 있는 내용을 map 함수를 이용해서 jsx 배열 만들기
        const jsx_names3=names.map((item, index)=>{
            return (<li key={index}>{item}</li>);
        });

        return (
            <div>
                <h1>친구 목록입니다.</h1>
                <ul>{jsx_names}</ul>
                <h1>친구 목록입니다.2(반복문 이용)</h1>
                <ul>{jsx_names2}</ul>
                <h1>친구 목록입니다.3(map 이용)</h1>
                <ul>{jsx_names3}</ul>
            </div>
        );
    }
}

export default App03;