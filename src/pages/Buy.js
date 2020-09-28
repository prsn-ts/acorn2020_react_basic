// src/pages/Buy.js
import React from 'react';
import queryString from 'query-string';

const Buy=({location})=>{ //{location}은 현재 위치(/Buy 요청에 의한 페이지)에 대한 정보를 가지고 있는 오브젝트이다.
    //주소창에 파라미터들을 오브젝트로 바꿔주는 query-string 모듈
    //query-string 모듈을 활용해서 query 문자열을 object 로 변환
    const query = queryString.parse(location.search);
    //query 는 object 이다.
    console.log(query);
    return(
        <div>
            <h2>상품 구입 페이지 입니다.</h2>
            <p>{query.num}번 {query.name} 상품</p>
        </div>
    );
};

export default Buy;