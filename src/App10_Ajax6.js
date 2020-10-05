import React, { useState } from 'react';
// >yarn add query-string or npm install query-string 해서 설치후에 사용할 수 있다.(보통 전자쪽을 이용해서 설치)
import qs from 'query-string';

//폼에 입력한 id와 pwd를 다른 서버에 보내서 로그인 정보가 있는지 확인하는 예제
const App10_Ajax6=()=>{
    //폼 데이터에 대해서 useState() 컴포넌트? 함수?를 사용한다.
    //이유는 폼에 입력된 값을 state값(상태값)으로 관리하기위함.
    //초기값은 id와 pwd의 값을 빈 문자열로 세팅한다.
    const [formData, setFormData] = useState({id:'', pwd:''});

    //change 이벤트가 일어날때마다 호출될 함수
    const changed=(e)=>{
        //이벤트가 일어난 input 요소의 name 속성의 값 ( id or pwd ) 읽어오기
        let name = e.target.name; //name 속성의 값이 "id" or "pwd" 둘중 하나이다.
        //이벤트가 일어난 input 요소의 입력한 value 값
        let value = e.target.value; //value의 값을 읽어온다.
        setFormData({
            ...formData, //폼 데이터가 여러개 일 수 있는데 그래서 그 데이터를 펼쳐놓고
            [name]:value //수정할 데이터만 데이터를 오버라이드 한다.
        });
    };

    const submit=(e)=>{
        //폼 전송 막기(ajax 요청이므로? 페이지 전환이 되지 않게)
        e.preventDefault();

        fetch("http://localhost:8888/spring05/users/ajax_login.do", {
            method:"POST",
            headers:{"Content-Type":"application/x-www-form-urlencoded"},
            body:qs.stringify(formData) //전송할 파라미터 입력
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
        .catch(err=>{
            console.log(err);
        });
    };
    return (
        <div>
            <h1>로그인 폼 입니다.</h1>
            <form onSubmit={submit}>
                <input onChange={changed} name="id" type="text" placeholder="아이디.."/><br />
                <input onChange={changed} name="pwd" type="password" placeholder="비밀번호.."/>
                <button type="submit">로그인</button>
            </form>
            <p>{JSON.stringify(formData)}</p> {/* JSON.stringify()을 이용한 문자열 표기 방식 */}
            {/* 폼 전송을 할 때 쿼리스트링으로 보내야할 수도 있다고한다. */}
            <p>{qs.stringify(formData)}</p> {/* qs.stringify()의 쿼리스트링을 이용한 문자열 표기 방식 */}
        </div>
    )
};

export default App10_Ajax6;