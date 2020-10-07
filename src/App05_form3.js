
import React, { Component } from 'react';
import './css/bootstrap.css';

class App05_form3 extends Component {

    //폼에 submit 이벤트가 발행했을때 호출되는 함수 
    handleSubmit=(e)=>{
        e.preventDefault();
        //폼에 입력한 값을 읽어온다
        const id=this.id.value;
        const pwd=this.pwd.value;
        const isSave=this.isSave.checked;
        const info=`아이디:${id} 비밀번호:${pwd} 저장여부:${isSave}`;
        this.info.innerText=info;
    }
    render() {
        return (
            <div className="container">
                <h1>React form 테스트</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="id">아이디</label>
                        {/* 
                            요소의 참조값(ref 속성)을 얻어내서 표시할 때
                            리액트의 상태값을 이용해서 하듯이
                            참조해서 읽어낸다음 화면에 표시할 수 있지만
                            다시 렌더링될 경우 표시되던 데이터를 복구는 불가능하다
                            다만 상태값으로 관리한경우 복구가 가능하다.
                            따라서 데이터 복구가 되도록하려면 상태값으로 관리하는것이 좋다.
                        */}
                        <input ref={(ref)=>{this.id=ref;}} type="text"  className="form-control" name="id" id="id" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">비밀번호</label>
                        <input ref={(ref)=>{this.pwd=ref;}} type="text"className="form-control" name="pwd" id="pwd" />
                    </div>
                    <div className="form-group">
                        <label>
                            <input ref={(ref)=>{this.isSave=ref;}} name="isSave" type="checkbox"/> 아이디 저장
                        </label>
                    </div>
                    <button className="btn btn-primary" type="submit">로그인</button>
                </form>
                <p ref={(ref)=>{this.info=ref;}}></p>
            </div>
        );
    }
}

export default App05_form3; 