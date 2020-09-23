import React, { Component } from 'react';
import MemberList from './sub/MemberList';

class App03_example4 extends Component {

    //회원의 번호를 num 이라는 state 상태값으로 관리
    state={
        num:0,
        //회원들의 정보를 저장할 배열.
        memberList:[]
    }

    //화살표 함수를 사용하지 않으면 어떤 추가 코딩을 해야한다고 함.
    //추가 버튼을 눌렀을 때 호출되는 함수(메소드)
    addClicked=()=>{
        //입력한 이름
        const name=this.inputName.value;
        //입력한 주소
        const addr=this.inputAddr.value;
        //회원의 번호
        const num=this.state.num+1;
        this.setState({num: num});
        //회원 한명의 정보를 object 에 담는다.
        const mem={num:num, name:name, addr:addr};
        //새로운 회원정보를 담은 새 배열을 얻어내서 상태값을 수정해 준다.(새로운 참조값이 생기도록 구성하는 것이 좋다.)
        this.setState({memberList: this.state.memberList.concat(mem)});
    }

    //삭제 버튼을 눌렀을 때 호출될 함수
    deleteClicked=(num)=>{
        const newMemberList = this.state.memberList.filter(
            (item)=>{
                return item.num !== num
            }
        );
        //삭제된 아이템을 제외한 새로운 배열을 생성하여 memberList에 상태값을 변경한다.
        this.setState({memberList: newMemberList});
    }

    render() {
        return (
            <div>
                {/* input 요소의 참조값을 자신의 필드(this.inputName)에다가 저장. */}
                <input ref={(ref)=>{this.inputName=ref;}} type="text" placeholder="이름 입력..."/>
                <input ref={(ref)=>{this.inputAddr=ref;}} type="text" placeholder="주소 입력..."/>
                <button onClick={this.addClicked}>추가</button>
                <h1>회원 목록입니다.</h1>
                <MemberList memberList={this.state.memberList}
                    deleteClicked={this.deleteClicked}/>
            </div>
        );
    }
}

export default App03_example4;