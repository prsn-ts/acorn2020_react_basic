import React, { Component } from 'react';

class MsgList extends Component {
    render() {
        /* 
            부모 컴포넌트로 부터 업데이트된 데이터를 가져와서
            UI를 구성하는 자식 컴포넌트(MsgList)
        */
        console.log("실행 들어옴?");
        //부모 component 에서 전달된 props
        const msgList = this.props.msgList;
        const list = msgList.map((item)=>{
            return (
                <li key={item.id}>
                    {item.msg}
                    <button onClick={
                        ()=>{
                            /*
                                자식 컴포넌트에서 이벤트가 일어나면 부모 컴포넌트에 알려서
                                props로 부모로 부터 다시 데이터를 받아서
                                자식 컴포넌트에서 구성하는 UI를 수정한다.

                                ※밑에 정보는 확실치 않으니 주의!!※
                                이렇게 하는 이유는 추측이지만 Props 값이나 state 값이 변경되면
                                렌더링이 발생하는데 자식 컴포넌트에서 함수를 실행하여 state값을 조정하고
                                UI를 바꾸려고하면 부모 컴포넌트까지 렌더링이 발생할 가능성이 있다.
                                이렇게된다면 부모 컴포넌트는 데이터만 자식 컴포넌트에게 주면 되는데 렌더링까지
                                하게되는 불필요한 과정이 들어가게된다.
                            */
                            this.props.deleteClicked(item.id);
                        }
                    }>X</button>
                </li>
            );
        });
        return (
            <ul>
                {list}
            </ul>
        );
    }
}

export default MsgList;