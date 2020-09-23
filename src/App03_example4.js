import React, { Component } from 'react';

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
        const jsx_memberList=this.state.memberList.map((item)=>{
            return (
                <tr key={item.num}>
                    <td>{item.num}</td>
                    <td>{item.name}</td>
                    <td>{item.addr}</td>
                    <td><button onClick={()=>{
                        //화살표 함수안에 삭제 버튼을 눌렀을 때 삭제기능하는 함수를 호출하면서 삭제할 번호를 전달한다.
                        //화살표 안에 삭제기능하는 함수를 호출하는 구조로 하는 이유는 deleteClicked의 인자값으로 item.num의 값을 넣기 위해서이다
                        //이런 구조로 하지 않으면 deleteClicked에 인자값을 넣을 수 없다.
                        this.deleteClicked(item.num);
                    }}>삭제</button></td>
                </tr>
            );
        });
        return (
            <div>
                {/* input 요소의 참조값을 자신의 필드(this.inputName)에다가 저장. */}
                <input ref={(ref)=>{this.inputName=ref;}} type="text" placeholder="이름 입력..."/>
                <input ref={(ref)=>{this.inputAddr=ref;}} type="text" placeholder="주소 입력..."/>
                <button onClick={this.addClicked}>추가</button>
                <h1>회원 목록입니다.</h1>
                <table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>이름</th>
                            <th>주소</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jsx_memberList}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App03_example4;