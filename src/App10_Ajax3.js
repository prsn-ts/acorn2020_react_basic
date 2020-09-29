import React, {Component} from 'react';
import './css/bootstrap.css';

class App10_Ajax3 extends Component{
    //상태값 
    state={
        cafeList:[]
    };
    //해당 컴포넌트가 활성화 되었을때 호출되는 메소드 (함수)
    componentDidMount=()=>{
        console.log("App10_Ajax3 컴포넌트가 마운트되었습니다.");
        fetch("http://localhost:8888/spring05/cafe/ajax_list.do")
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

export default App10_Ajax3;