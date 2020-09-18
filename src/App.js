//React,{component}의 의미는 React안에 Component를 가지고있어서 React.Component라고 쓸 수도 있다
import React,{ Component } from 'react'; 
//이미지 경로를 import 해서 사용한다.
import logo from './logo.svg';
import kim from './images/kim1.png';
//css 파일을 import 만 해도 css 가 자동 적용된다.
import './css/bootstrap.css';
import './App.css';
//MyComponent import 하기(import 옆에 나오는 키워드는 변수명 짓듯이 마음대로 바꿀 수 있지만 가독성을 위해 동일하게 작성)
import MyComponent from './MyComponent';


//class 표현식으로 App 구성하기 
class App extends Component {
  //App.js 를 이용해서 화면 구성을 할때 호출되는 메소드 
  render() {
    const myName="김구라";
    // true or false 로 바꿔 가면서 테스트 해 보세요.
    const isMan=true;
    // 요소에 적용할 인라인 css 를 object 로 정의하고 적용할수 있다.
    const boxStyle={
      width:"100px",
      height:"100px",
      border:"1px solid red",
      backgroundColor:"yellow" //여러단어로 구성된 속성은 camel case 를 사용한다.
    };
    return (
      <div className="container">
        {/* class 는 예약어이기 때문에 className 을 사용한다. */}
        <h1>Hello React!</h1>
        <p>내이름은 <strong>{myName}</strong></p>
        <img src={logo} alt="react js 로고 입니다."/>
        <img src={kim} alt="김구라 이미지"/>
        <p>당신은 {isMan ? "남자" : "여자"} 이군요</p>
        <p>{isMan && "당신은 남자 이군요"}</p>
        {/* 
          [ 이벤트 처리 ]
          
          onEventName={ 화살표 함수 }
          처럼 on 다음에 이벤트명을 camel case 로 작성을한다.
          화살표 함수는 해당이벤트가 발생하면 자동으로 호출된다.
          예) onClick, onMouseOver, onChange, onInput, onKeyDown, onFocus ...
        */}
        <button className="btn btn-outline-primary" onClick={()=>{
          alert("버튼을 눌렀네요?");
        }}>
          눌러보셈
        </button>
        <div style={boxStyle}>box</div>
        {/* 다른 Component를 포함 시킬 수 있다.*/}
        {/* 숫자의 경우 {} 중괄호 안에 넣어야 숫자 타입을 정의할 수 있다 */}
        <MyComponent title="MyComponent1" num={1000}/>
        <MyComponent title="MyComponent2" num={2000}/>
        <MyComponent/>
      </div>
    );
  }
}

export default App;
