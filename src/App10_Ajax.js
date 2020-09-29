import React from 'react';

const App10_Ajax=()=>{

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
        })
        .catch(err=>{
            console.log(err);
        });
    };

    return(
        <div>
            <h1>ajax 요청 테스트</h1>
            <button onClick={request}>요청하기</button>
            <table>
                <thead>
                    <th>글번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    );
};

export default App10_Ajax;