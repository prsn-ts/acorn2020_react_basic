import React, {Component} from 'react';
import './css/bootstrap.css';

class App10_Ajax2 extends Component{
    //상태값 
    state={
        cafeList:[]
    };

    //부모 컴포넌트를 재정의(오버라이드)하는 함수.
    //해당 컴포넌트가 활성화 되었을 때 호출되는 메소드.(화살표 함수도 가능하다.)
    //컴포넌트가 활성화될 때(이 페이지가 로딩될 때) ajax 요청을 통해 데이터를 받아와서 화면에 출력되도록 한다.
    componentDidMount(){
        console.log("App10_Ajax3 컴포넌트가 마운드 되었습니다.");
        fetch("http://localhost:8888/spring05/cafe/ajax_list_teacher.do")
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            const result=data.list.map((item)=>{
                return (
                    <tr key={item.num}>
                        <td>{item.num}</td>
                        <td>{item.title}</td>
                        <td>{item.writer}</td>
                    </tr>
                );
            });
            //setState() 함수를 이용해서 상태값을 바꿔준다. 
            this.setState({cafeList:result});
        })
        .catch(err=>{
            console.log(err);
        });
    }

    render() {
        return (
            <div className="container">
                <h1>ajax 요청 테스트</h1>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>글번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.cafeList}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App10_Ajax2;