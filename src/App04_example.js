import React, { Component } from 'react';
import styles from './css/bootstrap.module.css';
// >yarn add classnames 를 설치한 다음에 import 한다.
import classnames from 'classnames';

// styles 에 bind 하는 용도로 사용하는 classnames2 를 import 한다.
import classnames2 from 'classnames/bind';
//styles 를 편하게 쓸 수 있도록 cx 변수에 저장.
const cx = classnames2.bind(styles);

//실험용 styles 객체 보기
console.log(styles);

class App04_example extends Component {
    state={
        btnColor:"btn-primary",
        isChecked:false
    }
    //체크박스를 체크했을 때 호출될 함수
    onCheckChange=(e)=>{
        //this 실험용.
        console.log(this);
        //이벤트가 일어난 요소의 checked 값 (true or false) 를 얻어와서
        const isChecked = e.target.checked;
        //상태값에 반영한다.
        //화살표 함수 안이 아닌 함수에서 this는 함수 자체를 가리킨다.
        //화살표 함수 내에서 this가 App04_example 컴포넌트를 가리킨다.
        this.setState({isChecked: isChecked});
    }

    //select 요소가 change 되었을 때 호출되는 함수
    onColorChange=(e)=>{
        const selectedColor = e.target.value;
        this.setState({btnColor:selectedColor});
    }

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
                <button className={cx('btn', 'btn-danger')}>버튼</button>
                {/* 클래스를 적용할 지 말 지 오브젝트안에 인덱스값으로 true or false를 지정해 관리할 수 있다. */}
                <button className={cx('btn', {'btn-warning':true})}>버튼</button>
                <h2>동적으로 class 를 적용하는 예제</h2>
                <select name="color" onChange={this.onColorChange} value={this.state.btnColor}>
                    <option value="btn-primary">primary</option>
                    <option value="btn-info">info</option>
                    <option value="btn-success">success</option>
                </select>
                <input type="checkbox" onChange={this.onCheckChange} checked={this.state.isChecked}/>
                <br/>
                <button className={cx('btn', this.state.btnColor, {'btn-lg':this.state.isChecked})}>색상이 바뀌는 버튼</button>
            </div>
        );
    }
}

export default App04_example;