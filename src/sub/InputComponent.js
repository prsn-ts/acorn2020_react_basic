import React, { Component, Fragment } from 'react';

class InputComponent extends Component {
    /*
        자식 컴포넌트에서는 보통 함수를 호출해주거나
        부모 컴포넌트로부터 받은 데이터를 화면에 출력해주는 등
        직접적으로 로직처리에 관여하지 않고 부가적인 역할을 수행한다.
    */    

    render() {
        return (
            //jsx(javascript with xml) 에서는 여러개의 요소들이 중구난방하게 나열되있으면 오류가 난다.
            //따라서 div 요소등으로 감싸기 싫다면 Fragment 요소를 이용해서 감싸면 된다. 
            <Fragment>
                {/* input 요소의 참조값을 자신의 필드(this.inputName)에다가 저장. */}
                <input ref={(ref)=>{this.inputName=ref;}} type="text" placeholder="이름 입력..."/>
                <input ref={(ref)=>{this.inputAddr=ref;}} type="text" placeholder="주소 입력..."/>
                <button onClick={()=>{
                    //입력한 이름
                    const name=this.inputName.value;
                    //입력한 주소
                    const addr=this.inputAddr.value;
                    //입력한 이름과 주소를 읽어와서
                    //부모 컴포넌트에 전달.
                    this.props.addClicked(name, addr);
                }}>추가</button>
            </Fragment>
        );
    }
}

export default InputComponent;