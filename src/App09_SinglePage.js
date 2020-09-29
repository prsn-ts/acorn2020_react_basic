import React from 'react'
import { NavLink, Route, withRouter } from 'react-router-dom';
//index.js 파일안에 있는 Buy, Game, Home, Study등 여러개의 컴포넌트를 한꺼번에 불러오기.(여러 컴포넌트를 로드할 때 유용)
import { Buy, Game, Home, Study} from './pages';
/* index.js 파일을 사용하지 않았을 때 import 방법
import Buy from './pages/Buy';
import Game from './pages/Game';
import Home from './pages/home';
import Study from './pages/Study';
*/
//리액트에서 싱글페이지 기반 웹페이지 구성을 어떻게하는지 연습하는 예제
const App09_SinglePage=({location, match, history})=>{

    const activeStyle={
        color: "red",
        fontWeight:"bold"
    };

    const [path, setPath]=React.useState('');

    //input 요소에 입력한 값이 변했을 때 경로를 바꿔주고
    const changed=(e)=>{
        setPath(e.target.value);
    };
    //이동 버튼을 클릭했을 때 실행할 함수(해당 경로로 이동 시킨다.)
    const move=()=>{
        console.log(path);
        //history 객체를 이용해서 강제 이동 시킨다.
        history.push(path); //이 구문으로 인해 history에 쌓이면서 페이지 이동도 된다.
    };

    return (
        <div>
            <h1>Router 테스트</h1>
            <input onChange={changed} value={path} type="text" placeholder="이동할 경로 입력..." />
            <button onClick={move}>이동</button>
            <ul>
                <h2>다른 페이지로 이동할 때 깜박이면서 이동하는 페이지 전환.(싱글 페이지 기반 X)</h2>
                {/* 누를 때 깜박이면서 다른 페이지로 이동한다.(싱글 페이지 X) */}
                <li><a href="/">home</a></li>
                <li><a href="/study">study</a></li>
                <li><a href="/game">game</a></li><br />
                <h2>리액트의 NavLink 속성을 이용해서 다른 페이지로 이동할 때 깜박임 없이 이동하는 페이지 전환.(싱글 페이지 기반 O)</h2>
                {/* 
                    NavLink, Link 컴포넌트를 이용해 누를 때 다른 페이지로 이동한다.(싱글 페이지 O, 한 페이지 내에서 특정 링크를 불러옴)
                    NavLink 컴포넌트에는 activeStyle과 activeClassName의 속성이 있다.
                    activeStyle은 특정 어떤 버튼이나 a 태그를 눌렀을 때(active, 활성화 상태) 스타일 효과를 주는 것이고
                    activeClassName는 특정 어떤 버튼이나 a 태그를 눌렀을 때(active, 활성화 상태) 클래스를 추가하는 기능을 한다.
                */}
                <li><NavLink to="/" activeStyle={activeStyle}>home</NavLink></li>
                <li><NavLink to="/study" activeStyle={activeStyle}>study</NavLink></li>
                <li><NavLink to="/game" activeStyle={activeStyle}>game</NavLink></li><br />
                <h2>리액트의 NavLink 속성을 이용해서 파라미터 값으로 "star" or "cart"를 넘긴다.(싱글 페이지 기반 O)</h2>
                <li><NavLink to="/game/star" activeStyle={activeStyle}>game</NavLink></li>
                <li><NavLink to="/game/cart" activeStyle={activeStyle}>game</NavLink></li><br />
                <h2>리액트의 NavLink 속성을 이용해서 파라미터로 num and name을 넘긴다.(싱글 페이지 기반 O)</h2>
                <li><NavLink to="/buy?num=1&name=Handphone">1번 상품 사기</NavLink></li>
                <li><NavLink to="/buy?num=2&name=Notebook">2번 상품 사기</NavLink></li>
                <li><NavLink to="/buy?num=3&name=Desktop">3번 상품 사기</NavLink></li>
            </ul>
            {/* 
                exact 속성은 정확히 일치할 때만 페이지 이동이 되도록 설정하는 역할이다.
                exact 속성을 넣는 이유는 home.js 같은 파일은 최상위 경로일 때(/) 호출되는데
                최상위 경로에서 다른 페이지 요청 시(/study or /game 등) 싱글 페이지 기반이므로
                페이지 이동 없이 그 페이지를 불러오는 형식이라서 home.js 와 study.js 파일이 겹쳐져서 보이게된다.
                따라서 해결방법은 /home 이런 식으로 정확히 요청했을 때만 home.js 파일을 호출하도록 한다.
                그 방법이 exact 속성을 붙이는 것이다.
            */}
            {/* 최상위 경로 요청(/)에 대해서 Home.js 페이지가 나오도록 설정 */}
            <Route exact path="/" component={Home}/>
            <Route path="/study" component={Study}/>
            <Route exact path="/game" component={Game}/>
            <Route path="/game/:name" component={Game}/>
            <Route path="/buy" component={Buy}/>
        </div>
    );
};

/*
    withRouter() 함수를 호출해서 export 해주면
    Router에 관련된 props 가 이 컴포넌트에 전달된다.
    *사실 App09_SinglePage 컴포넌트의 하위 컴포넌트인 Buy, Game, Study, Home
    는 router 설정을 하지 않았지만 라우터 관련된 withRouter 함수를 이용해서
    withRouter(App09_SinglePage) 이렇게 App09_SinglePage를 withRouter 함수의
    인자로 넣어주면 App09_SinglePage 하위에 있는 직접적으로 라우터를 설정하지 않은
    하위 컴포넌트인 Buy, Game, Study, Home도 props 속성을 이용해 {location, match, history} 이런 기능을
    사용할 수 있게된다.
*/
export default withRouter(App09_SinglePage);