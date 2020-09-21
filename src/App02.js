import React, { Component } from 'react';
//bootstrap css 로딩하기
import './css/bootstrap.css';

class App02 extends Component {
    //상태값 정의하기(동적으로 값이 바뀌는 변수를 관리할 상태값)
    state={
        info:"x:0 y:0",
        info2:"x:0 y:0",
        info3:"x:0 y:0"
    };
    //mouse move 이벤트 처리(메소드를 만들어놓으면 복잡해질 수 있기 때문에 화살표 함수를 이용한다.)
    handleMouseMove=(e)=>{
        //original 이벤트 객체에는 offsetX, offsetY 가 있다.
        console.log(e.nativeEvent);
        let info3=`x:${e.nativeEvent.offsetX} y:${e.nativeEvent.offsetY}`;
        this.setState({
            info3:info3
        });
    }
    render() {
        //오브젝트로 inline css로 작성한다.
        const boxStyle={
            width:"300px",
            height:"300px",
            border:"1px solid red",
            backgroundColor:"yellow"
        };
        return (
            <div className="container">
                <h1>App 02 입니다.</h1>
                <h1>react mouse event(clientX, clientY)</h1>
                {/* css가 적용된 오브젝트명를 {}안에 적으면 된다. */}
                <div style={boxStyle} onMouseMove={
                    (e)=>{
                        //e 는 마우스 이벤트(react 가 전달하는) 객체
                        let info=`x:${e.clientX} y:${e.clientY}`;
                        console.log(info);
                        //document.getElementById("coordinates").innerText = info;
                        //state 를 바꿔주면 UI는 자동 업데이트
                        this.setState({info:info});
                    }
                }></div>
                <p id="coordinates">{this.state.info}</p>

                <h1>nativeEvent(javascript) mouse event(offsetX, offsetY)</h1>
                <div style={boxStyle} onMouseMove={
                    (e)=>{
                        //original 이벤트 객체에는 offsetX, offsetY 가 있다.
                        console.log(e.nativeEvent);
                        let info2=`x:${e.nativeEvent.offsetX} y:${e.nativeEvent.offsetY}`;
                        this.setState({
                            info2:info2
                        });
                    }
                }></div>
                <p>{this.state.info2}</p>
                
                <h1>nativeEvent(javascript) mouse event(offsetX, offsetY)</h1>
                <div style={boxStyle} onMouseMove={this.handleMouseMove}></div>
                <p>{this.state.info3}</p>
            </div>
        );
    }
}

export default App02;