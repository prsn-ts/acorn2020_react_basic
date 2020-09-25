import React, { Component } from 'react';
import './css/bootstrap.min.css';

class App05_form2 extends Component {
    state={
        id:"",
        pwd:"",
        isSave:false //체크박스의 체크 여부
    }
    //input 요소에 변화가 생겼을 때 호출되는 함수
    handleChange=(e)=>{
        /*
            상태값에 id와 pwd 두개가 있기 때문에
            name 속성의 id와 pwd를 구분해서 상태값에 저장할 필요가 있다.
            따라서 읽어오는 name 속성의 값에 따라 오브젝트로
            {id:"gura"} or {pwd:"1234"} 이런 식으로 인덱스(방)이 동적으로
            id or pwd로 저장되게 하기위해서 obj[name] 이렇게 지어준다.
        */
        //이베트가 일어난 폼요소의 name 속성의 value 얻어오기(요소에 name 속성의 값을 읽어온다.)
        const name = e.target.name; //"id" or "pwd" or"isSave"
        //value 를 미리 얻어내기(체크박스인 경우에는 체크 여부를 얻어낸다)
        const value=e.target.type === 'checkbox'
            ? e.target.checked : e.target.value;
        /*
            const obj = {};
            obj[name]=e.target.value;
            this.setState(obj);
        */
        //ECMA6 문법을 활용하면 바로 위에 코드를 아래와 같이 대체할 수 있다.
        this.setState({
            [name]:value
        });
    }
    //폼에 submit 이벤트가 발생했을 때 호출되는 함수
    handleSubmit=(e)=>{
        //페이지 전송을 막아놓음
        e.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <h1>React form 테스트</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="id">아이디</label>
                        <input type="text" value={this.state.id} onChange={this.handleChange} className="form-control" name="id" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">비밀번호</label>
                        <input type="text" value={this.state.pwd} onChange={this.handleChange} className="form-control" name="pwd" />
                    </div>
                    <div className="form-group">
                        <label>
                            <input onChange={this.handleChange} checked={this.state.isSave} name="isSave" type="checkbox"/> 아이디 저장
                        </label>
                    </div>
                    <button className="btn btn-primary">로그인</button>
                </form>
                <p>아이디 : <strong>{this.state.id}</strong></p>
                <p>비밀번호 : <strong>{this.state.pwd}</strong></p>
                <p> 아이디 저장할 지 여부 : <strong>{this.state.isSave.toString()}</strong></p>
            </div>
        );
    }
}

export default App05_form2;