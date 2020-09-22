import React, { Component } from 'react';
import MsgList from './sub/MsgList';

class App03_example2 extends Component {
    render() {
        const list=[
            (<li>하나</li>),
            (<li>두울</li>),
            (<li>세엣</li>),
        ];
        return (
            <div>
                <input type="text"/>
                <button>추가</button>
                {/* 
                    MsgList 컴포넌트 입장에서 App03_example2 컴포넌트는 부모 컴포넌트이다.
                    때때로 자식 컴포넌트인 MsgList에는 데이터(property)를 전달받아야 할 수도 있는데 이때는
                    MsgList 컴포넌트에(<MsgList list={list}/>) 리스트라는 의미로 list라는 속성(props)의 속성값으로 부모 컴포넌트에서 생성한
                    list 배열을 {list} 이렇게 중괄호를 사용해서 list라는 속성에 넣어주고
                    MsgList 컴포넌트에서는 list라는 이름의 props(property)로 받아서
                    부모 컴포넌트로 부터 받은 데이터를 출력할 수 있다.
                 */}
                <MsgList list={list}/>
            </div>
        );
    }
}

export default App03_example2;