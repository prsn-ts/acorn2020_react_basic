import React, { Component } from 'react';
import MsgList from './sub/MsgList';

class App03_example3 extends Component {
    /* 
        자식 컴포넌트(MsgList)에 업데이트된 데이터를 넘겨주는
        부모 컴포넌트(App03_example3)
    */

    //입력한 메세지 목록을 상태값으로 관리
    state={
        msgList:[]
    }
    //아이디를 count 할 필드
    id=0;

    //추가 버튼을 눌렀을 때 호출되는 함수
    addClicked=()=>{
        //1. 입력한 문자열을 읽어온다,
        const msg = this.inputMsg.value;
        //아이디를 얻어내서 배열에 추가
        this.id++;
        const newList=this.state.msgList.concat({
            id:this.id,
            msg:msg
        });
        this.setState({msgList:newList});
        //4. 입력창 초기화
        this.inputMsg.value="";
        //5. 입력창 포커스 주기
        this.inputMsg.focus();
    }

    //자식 컴포넌트에서 삭제 이벤트가 발생했을 때 호출되는 함수
    //자식 컴포넌트에서 일어날 이벤트에 대해 로직처리하는 함수가 호출되면 함수 자체를 property를 이용해 자식 컴포넌트로 넘긴다.
    deleteClicked=(id)=>{
        //아이디는 삭제할 메세지의 번호가 된다.
        alert(id+"삭제?");

        //msgList 에서 해당 번호를 가지고 있는 아이템을 삭제한
        //새로운 배열을 얻어낸다.
        const newList=this.state.msgList.filter((item)=>{
             //이 조건이 만족하는 것만 남기고 다 없앤다.(true를 리턴하면 그 아이템은 남고 false를 리턴하면 그 아이템은 사라진다.)
            return item.id !== id;
        });
        //UI 가 업데이트 되도록 한다.
        this.setState({msgList:newList});
    };

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
                <MsgList msgList={this.state.msgList}
                        deleteClicked={this.deleteClicked}/>
            </div>
        );
    }
}

export default App03_example3;