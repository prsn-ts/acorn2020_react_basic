import React, { Component } from 'react';

class App05_form extends Component {
    state={
        msg:'',
        //isMake은 true 일때만 밑에 폼을 구성하기위해 만든 상태값
        isMake:true
    }
    //폼 전송 이벤트가 발생했을 때 호출되는 함수
    handleSubmit=(e)=>{
        //page가 새로고침 되는 것을 방지하기 위해
        //이벤트 객체의 preventDefault() 함수를 호출해서
        //기본동작(폼 제출)을 막아준다.(화면 깜박임이 없어진다. 즉, 전송을 막는다.)
        e.preventDefault();

        alert("입력한 메세지:"+this.state.msg+" 를 전송합니다.");
    }
    handleChange=(e)=>{
        //입력한 value 값
        const msg=e.target.value;
        this.setState({msg:msg});
    }

    render() {
        return (
            <div className="container">
                <h1>React 에서 form 요소</h1>
                <label>
                    <input type="checkbox" onChange={(e)=>{
                        this.setState({isMake: !e.target.checked});
                    }}/>
                    폼 없애기
                </label>
                <br/>
                {/* 
                    밑에 input 요소의 value 값이 있는 것이 좋다
                    state의 값을 value에 다시 넣어주는 작업이 있어야
                    해당 요소(input)가 동적으로 없어졌다가
                    사라지는 싱글 페이지 기반의 코드의 경우 의도치 않게
                    입력했던 문자열이 동적으로 사라졌다가 생겼을 때 사라지는
                    불상사가 생기지 않을 수 있기 때문에 특별한 경우가 아니라면
                    input 요소의 value 값을 지정해주는 것이 안전하다.
                */}
                {this.state.isMake && 
                <form onSubmit={this.handleSubmit}>
                    <label>
                        메세지 입력
                        <input type="text"
                            onChange={this.handleChange}
                            value={this.state.msg} />
                    </label>
                    <button type="submit">전송</button>
                </form>}
                
            </div>
        );
    }
}

export default App05_form;