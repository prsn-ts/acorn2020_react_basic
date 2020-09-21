import React, { Component } from 'react';

class App03_example extends Component {
    state={
        //키값을 관리하기위해 index 키 설정.
        index:0,
        msgs:[]
    }

    handleKeyup=(e)=>{
        //눌려전 키의 코드값
        console.log(e.keyCode);
        //이벤트가 일어난 input 요소에 입력한 value 값
        console.log(e.target.value);

        if(e.keyCode === 13){//엔터키를 눌렀을 때
            //key={this.state.index} 이부분은 키값을 관리하기위해서 추가한 부분이다.
            let content=(<li key={this.state.index}>{e.target.value}</li>);
            //새로 생성되는 각각의 li요소에 키값을 1개씩 증가시켜 다른 키값을 주고 상태를 저장하기위해 setState 사용
            this.setState({index: this.state.index+1});
            //기존의 배열에 아이템을 추가해서 새로운 배열을 만들어내기
            let result=this.state.msgs.concat(content);
            //새로운 배열을 state 에 적용해서 UI가 수정되도록 한다.(ui를 업데이트 하기 위해 setState를 사용한다.)
            this.setState({msgs:result});
        }
    };
    //전송 버튼을 눌렀을 때 호출되는 함수
    handleClick=()=>{
        //입력한 문자열 읽기
        let msg = this.inputText.value;
        //key={this.state.index} 이부분은 키값을 관리하기위해서 추가한 부분이다.
        let content=(<li key={this.state.index}>{msg}</li>);
        //새로 생성되는 각각의 li요소에 키값을 1개씩 증가시켜 다른 키값을 주고 상태를 저장하기위해 setState 사용
        this.setState({index: this.state.index+1});
        //기존의 배열에 아이템을 추가해서 새로운 배열을 만들어내기
        let result=this.state.msgs.concat(content);
        //새로운 배열을 state 에 적용해서 UI가 수정되도록 한다.(ui를 업데이트 하기 위해 setState를 사용한다.)
        this.setState({msgs:result});
    }
    render() {
        return (
            <div>
                <h1>목록 출력 예제 입니다.</h1>
                <input ref={
                    //함수의 인자로 input 요소의 참조값이 전달된다.
                    //전달된 참조값을 필드에 inputText 라는 키값으로 저장한다.
                    //이렇게 하는 이유는 react는 여러 컴포넌트의 조합으로 이루어져있기 때문에
                    //사용하려는 id 속성 값이 다른 컴포넌트에서 사용 되었을 가능성이 있다.
                    //따라서 id 속성을 이용해서 특정 id를 가진 요소에 접근하는 것은 심각한 오류가 날 수 있다.
                    (ref)=>{this.inputText=ref}
                } text="text" onKeyUp={this.handleKeyup}/>
                <input text="text" onKeyUp={this.handleKeyup}/>
                <input text="text" onKeyUp={this.handleKeyup}/>
                <button onClick={this.handleClick}>전송</button>
                <ul>{this.state.msgs}</ul>
            </div>
        );
    }
}

export default App03_example;