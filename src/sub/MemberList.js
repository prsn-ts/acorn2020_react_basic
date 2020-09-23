import React, { Component } from 'react';

//props 로 전달된 회원목록을 table 에 출력하는 컴포넌트
//특정이벤트(삭제버튼 클릭)가 일어났을 때 호출할 함수도
//props 로 전달 받는다.
class MemberList extends Component {
    render() {
        const jsx_memberList=this.props.memberList.map((item)=>{
            return (
                <tr key={item.num}>
                    <td>{item.num}</td>
                    <td>{item.name}</td>
                    <td>{item.addr}</td>
                    <td><button className="btn btn-warning" onClick={()=>{
                        /*
                            화살표 함수안에 삭제 버튼을 눌렀을 때 삭제기능하는 함수를 호출하면서 삭제할 번호를 전달한다.
                            화살표 안에 삭제기능하는 함수를 호출하는 구조로 하는 이유는 deleteClicked의 인자값으로 item.num의 값을 넣기 위해서이다
                            이런 구조로 하지 않으면 deleteClicked에 인자값을 넣을 수 없다.
                        */
                        this.props.deleteClicked(item.num);
                    }}>삭제</button></td>
                </tr>
            );
        });
        //props 로 전달된 회원목록을 이용해서 jsx_memberList 배열을 얻어낸다.
        return (
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>주소</th>
                    </tr>
                </thead>
                <tbody>
                    {jsx_memberList}
                </tbody>
            </table>
        );
    }
}

export default MemberList;