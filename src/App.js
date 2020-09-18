import React,{ Component } from 'react';
//이미지 경로를 import 해서 사용한다.
import logo from './logo.svg';
//css 파일을 import 만 해도 css 가 자동 적용된다.
import './App.css';

//class 표현식으로 App 구성하기 
class App extends Component {
  render() {
    const myName="김구라";
    return (
      <div>
        <h1>Hello React!</h1>
        <p>내이름은 <strong>{myName}</strong></p>
        <img src={logo} alt="react js 로고 입니다."/>
      </div>
    );
  }
}

export default App;
