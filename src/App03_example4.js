import React, { Component } from 'react';
import MemberList from './sub/MemberList';
import InputComponent from './sub/InputComponent';
//이렇게 css를 로딩하면 이 컴포넌트에 속해있는 import한 자식 컴포넌트에도 적용이 된다.
//app 전역에서 사용할 수 있는 css 로딩.
import './css/bootstrap.css';
/*
    이렇게 bootstrap.module.css 이름의 css 파일을 로딩하고 그 정보들을 styles라는 객체안에다가 저장한다.
    사용할 때는 styles 라는 객체에 정보가 있으므로 styles.container 이런식으로 참조해서 사용하면 된다.
    ※단, bootstrap.module.css 파일을 만들어야된다.※
    만드는 방법은 간단하다. 기존의 bootstrap.css 파일을 복사한 후 이름만 bootstrap.module.css로 설정하면 끝.

    이렇게 사용하는 이유는 app 전역에서 적용되는 것이 아닌
    하나의 컴포넌트에서만 bootstrap.css를 적용하고 싶을 수가 있다.
    따라서 이렇게 각각의 컴포넌트에만 쓸 수 있도록 모듈화하여 사용할 수 있도록 지원한 것이다.
*/
//import styles from './css/bootstrap.module.css'; 

//어떤 정보가 들어있나 확인용.
//console.log(styles);

class App03_example4 extends Component {
    /*
        부모 컴포넌트에서는 자식 컴포넌트가 출력할 UI에 필요한 데이터를
        전달하거나 자식 컴포넌트가 함수를 호출했을 때 그것에 대한 로직처리를 하고
        결과값을 전달하는 역할을 맡게된다.
    */

    //회원의 번호를 num 이라는 state 상태값으로 관리
    state={
        num:0,
        //회원들의 정보를 저장할 배열.
        memberList:[]
    }

    //화살표 함수를 사용하지 않으면 어떤 추가 코딩을 해야한다고 함.
    //추가 버튼을 눌렀을 때 호출되는 함수(메소드)
    addClicked=(name, addr)=>{
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
            /* {styles.container} */
            <div className="container"> 
                {/* InputComponent 에서 add button click 이벤트가 일어남 */}
                <InputComponent addClicked={this.addClicked} /> 

                <h1>회원 목록입니다.</h1>

                {/* MemberList 에서 delete button click 이벤트가 일어남 */}
                <MemberList memberList={this.state.memberList} 
                    deleteClicked={this.deleteClicked}/>
            </div>
        );
    }
}

export default App03_example4;