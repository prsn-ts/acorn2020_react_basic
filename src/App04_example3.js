import React, { Component } from 'react';
import style from './my_css/app04_custom.module.css';
// styles 에 bind 하는 용도로 사용하는 classnames 를 import 한다.
import classnames from 'classnames/bind';

//style object 가 bind 된 cx 얻어내기
//styles 를 편하게 쓸 수 있도록 cx 변수에 저장.
const cx=classnames.bind(style);
class App04_example3 extends Component {
    state={
        //x축 평행이동 값을 상태값으로 관리 한다.
        x:0
    }
    //버튼을 누를 때마다
    boxClicked=()=>{
        //x 값을 100 증가 시킨다.
        this.setState({x: this.state.x+100});
    }
    //더블 클릭할 때
    boxDoubleClicked=()=>{
        this.setState({x:0});
    }

    render() {
        //렌더링할 때는 상태값에 저장된 x값을 참조해서 적용한다.
        const boxStyle={
            transform:`translateX(${this.state.x}px)`
        };
        return (
            <div>
                <h1>움직이는 박스</h1>
                <div style={boxStyle}
                onClick={this.boxClicked}
                className={cx('box', 'transition-effect')}
                onDoubleClick={this.boxDoubleClicked}>box</div>
            </div>
        );
    }
}

export default App04_example3;