import React from 'react';
import './css/bootstrap.css';

const App10_Ajax=()=>{

    const [cafeList, setList]=React.useState([]);

    const request=()=>{
        /*
        fetch("http://localhost:8888/spring05/cafe/ajax_list.do")
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            console.log(data);
        })
        .catch(function(err){
            console.log(err);
        });
        */
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
            setList(result);
        })
        .catch(err=>{
            console.log(err);
        });
    };

    return(
        <div className="container">
            <h1>ajax 요청 테스트</h1>
            <button onClick={request}>요청하기</button>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>글번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {cafeList}
                </tbody>
            </table>
        </div>
    );
};

export default App10_Ajax;