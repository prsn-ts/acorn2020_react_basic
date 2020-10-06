import React, { useState } from 'react';
// >yarn add query-string 해서 설치후에 사용할수 있다. 
import qs from 'query-string';

const App10_Ajax6=()=>{

    const [formData, setFormData]=useState({
        id:'', 
        pwd:'',
        loginId:null
    });

    const changed=(e)=>{
        //이벤트가 일어난 input 요소의 name 속성의 값 ( id or pwd ) 읽어오기 
        let name=e.target.name;
        //이벤트가 일어난 input 요소에 입력한 value 값
        let value=e.target.value;
        setFormData({
            ...formData,
            [name]:value
        });
    };

    const submit=(e)=>{
        //폼 전송 막기 
        e.preventDefault();
        fetch("http://localhost:8888/spring05/users/ajax_login.do", {
            method:"POST",
            headers:{"Content-Type":"application/x-www-form-urlencoded"},
            body: qs.stringify(formData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.isSuccess){
                setFormData({
                    ...formData,
                    loginId:data.id
                });
            }else{
                alert("아이디 혹은 비밀번호가 틀려요!");
            }        
        })
        .catch(err=>{
            console.log(err);
        });

    };

    const logout=()=>{
        //ajax 로 로그아웃 요청을 한다.
        fetch("http://localhost:8888/spring05/users/ajax_logout.do")
        .then(res=>res.json())
        .then(data=>{
            if(data.isSuccess){
                setFormData({
                    ...formData,
                    loginId:null
                });
                alert("로그 아웃 되었습니다.");
            }
        });
    };

    return (
        <div>
            { formData.loginId && 
                <p><strong>{formData.loginId}</strong>님 로그인중...</p>
            }
            <h1>로그인 폼 입니다.</h1>
            <form onSubmit={submit}>
                <input onChange={changed} name="id" type="text" placeholder="아이디..."/>
                <input onChange={changed} name="pwd" type="password" placeholder="비밀번호..."/>
                <button type="submit">로그인</button>
            </form>
            <p>{JSON.stringify(formData)}</p>
            <p>{qs.stringify(formData)}</p>
            <button onClick={logout}>로그아웃</button>
        </div>
    );
};

export default App10_Ajax6;