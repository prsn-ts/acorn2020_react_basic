import React, { Component } from 'react';
import styles from './css/bootstrap.module.css';
// >yarn add classnames 를 설치한 다음에 import 한다.
import classnames from 'classnames';

//styles 를 편하게 쓸 수 있도록(아직 테스트가 안된 방법 사용 X)
//const cx = classnames.bind(styles);

//실험용 styles 객체 보기
console.log(styles);

class App04_example extends Component {
    render() {
        /* 
            style 객체안에 인덱스값이 btn-primary처럼 -(하이푼) 글자가 있으면 .(점)으로
            참조되지 않는 문제가 있다. 따라서 참조할 때 style['btn-primary'] 이런 식으로 대괄호안에 인덱스 값을 넣어 참조할 수 있다.
        */
        const myBtnStyle=`${styles.btn} ${styles['btn-primary']}`;
        const myBtnStyle2=[styles.btn, styles['btn-success']].join(' ');

        return (
            <div className={styles.container}>
                <h1>모듈화된 css 사용 예제</h1>
                <button className={myBtnStyle}>버튼</button>
                <button className={myBtnStyle2}>버튼</button>
                <button className={classnames(styles.btn, styles["btn-info"])}>버튼</button>
            </div>
        );
    }
}

export default App04_example;