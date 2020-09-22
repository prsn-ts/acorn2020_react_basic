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