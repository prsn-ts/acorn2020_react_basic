import React, { Component } from 'react';
/*
    [모듈화된 css 를 사용하는 방법]
    1. css 파일의 이름에 .module.을 추가 한다.
    2. from 과 함께 import 해서 사용한다.
*/
import styles from './my_css/app04_custom.module.css';
import MyComponent from './sub/MyComponent';

class App04_css extends Component {
    render() {
        return (
            <div>
                <h1>react 에서 css 다루기</h1>
                <div className={styles.box}>box1</div>
                <MyComponent />
            </div>
        );
    }
}

export default App04_css;