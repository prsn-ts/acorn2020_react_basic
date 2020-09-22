import React, { Component } from 'react';
import MsgList from './sub/MsgList';

class App03_example2 extends Component {
    //입력한 메세지 목록을 상태값으로 관리
    state={
        //새로 생기는 각각의 li요소들에 적용할 key(id)
        id:0,
        list:[]
    }
    //추가 버튼을 눌렀을 때 호출되는 함수
    addClicked=()=>{
        //1. 입력한 문자열을 읽어온다,
        const msg = this.inputMsg.value;
        //2. this.state.list 에 반영한다.
        //this.state.list.push(<li>{msg}</li>);(기존의 state의 list 참조값을 사용하는 방법)
        
        //기존의 list 에 새로운 아이템을 추가해서 새로운 참조값을 가지는 배열을 얻어낸다.
        //state안에 list 키의 값으로 새로운 참조값을 가지는 배열로 주면 확실하진 않지만 값들이 지속적으로 변경될 때 관리하기 좋다고함.
        //새로 생기는 각각의 li요소들에 적용할 key(id)를 주기위해 
        this.setState({id: this.state.id + 1});
        const newList = this.state.list.concat(<li key={this.state.id}>{msg}</li>);

        //3. this.setState() 를 호출해서 UI 가 업데이트 되도록 한다.
        //this.setState({list: this.state.list});(기존의 state의 list 참조값을 사용하는 방법)
        this.setState({list: newList});

        //4. 입력창 초기화
        this.inputMsg.value="";

        //5. 입력창 포커스 주기
        this.inputMsg.focus();
    }
    render() {
        return (
            <div>
                {/* 
                    버튼을 클릭했을 때 input 요소에 입력된 값을 읽어올 것인데
                    reactjs 에서는 id 속성을 사용하는 것을 권장하지 않는다.
                    다른 컴포넌트에 id 속성과 겹칠 수 있기 때문이다.
                    그러므로 ref 속성을 이용해 참조값을 얻어온다.
                 */}
                <input ref={(ref)=>{this.inputMsg=ref;}} type="text"/>
                <button onClick={this.addClicked}>추가</button>
                {/* 
                    MsgList 컴포넌트 입장에서 App03_example2 컴포넌트는 부모 컴포넌트이다.
                    때때로 자식 컴포넌트인 MsgList에는 데이터(property)를 전달받아야 할 수도 있는데 이때는
                    MsgList 컴포넌트에(<MsgList list={list}/>) 리스트라는 의미로 list라는 속성(props)의 속성값으로 부모 컴포넌트에서 생성한
                    list 배열을 {list} 이렇게 중괄호를 사용해서 list라는 속성에 넣어주고
                    MsgList 컴포넌트에서는 list라는 이름의 props(property)로 받아서
                    부모 컴포넌트로 부터 받은 데이터를 출력할 수 있다.
                 */}
                <MsgList list={this.state.list}/>
            </div>
        );
    }
}

export default App03_example2;