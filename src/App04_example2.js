import React, { Component } from 'react';
import style from './my_css/app04_custom.module.css';
// styles 에 bind 하는 용도로 사용하는 classnames 를 import 한다.
import classnames from 'classnames/bind';

//style object 가 bind 된 cx 얻어내기
//styles 를 편하게 쓸 수 있도록 cx 변수에 저장.
const cx=classnames.bind(style);

class App04_example2 extends Component {
    state={
        isMake:false,
        isChecked:false,
        isHide:false
    }

    onChangeChecked=(e)=>{
        //checked 속성을 읽어온다.(체크박스 체크 여부를 읽어와서)
        const isChecked = e.target.checked;
        //읽어온 checked 속성 값을 state에 있는 isChecked에 반영한다.(state에 반영한다.)
        this.setState({isChecked:isChecked});
        this.setState({isMake:isChecked});
    }
    onChangeChecked2=(e)=>{
        //체크박스 체크 유무에 따른 isHide 상태값에 true or false 저장.
        this.setState({isHide: e.target.checked});
    }
    

    render() {
        return (
            <div>
                {console.log(style)}
                <h1>어떤 요소를 동적으로 만들고 제거하기</h1>
                <label><input type="checkbox" onChange={this.onChangeChecked} checked={this.state.isChecked}
                value={this.state.isMake}/> 보이게 하기</label>
                {/* 중괄호 안에 있는 것이 렌더링 된다. */}
                { this.state.isMake && <div className={cx('box')}>box</div> }
                <h1>어떤 요소를 만들어 놓고 css를 활용해서 보이고 숨기기</h1>
                <label><input type="checkbox" onChange={this.onChangeChecked2}/> box 숨기기</label>
                <div className={cx('box', {'hide':this.state.isHide})}>box</div>
            </div>
        );
    }
}

export default App04_example2;