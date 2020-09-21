//MyComponent.js 파일입니다.
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
    여러 군데에서 사용할 때 같은 데이터를 가지고 같은 내용을 포함시키지 않을 확률이 매우 높다.
    이럴 때 다른 위치에 있는 같은 컴포넌트에 각각 상황에 맞는 데이터를 넣어서 전달하기위해 property(속성)을 사용할 수 있다.
    이렇게 여러 군데에서 같은 성격의 코드들을 사용할 때 재사용할 수 있는 컴포넌트를 만들어놓고
    필요할 때마다 import해서 쓰면 간편하다.
*/
/*
    부모 컴포넌트로 부터 전달된 값(properties)은
    this.props.속성명 -> props는 properties의 줄인 표현.
    형식으로 render()메소드 안에서 참조할 수 있다.
    수정은 불가하고 읽기 전용이다.
*/
class MyComponent extends Component {
    //properties 의 default 값 정의하기(전달된 property 값이 없을 때 기본값 설정.)
    //반드시 static 을 붙이고 defaultProps 에 object 를 넣어준다.
    static defaultProps={
        title:"제목입니다.",
        num:0
    };
    //properties 의 type 강제 하기
    static propTypes={
        title:PropTypes.string,
        num:PropTypes.number
    };
    //상태값 정의하기
    state={
        count:0
    };
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p> 전달된 num - 100 = {this.props.num - 100}</p>
                <button onClick={()=>{
                    //setState() 를 이용해서 상태값을 바꿀 수 있다.(UI로 확인 가능)
                    //상태값의 변화가 생기면 UI가 자동으로 update 된다.
                    //변화가 생긴다는 것은 참조값이 바뀌어야 된다는 것이다.
                    this.setState({
                        count: this.state.count+1
                    });
                }}>눌러보셈</button>
                <p>{this.state.count}</p>
            </div>
        );
    }
}

//MyComponent 컴포넌트 자체에서 외부에서 쓸 수 있도록 export하고 있기 때문에
//쓰이는 쪽에서 import만 제대로 해주면 이 컴포넌트(MyComponent)를 사용할 수 있게 된다.
export default MyComponent;