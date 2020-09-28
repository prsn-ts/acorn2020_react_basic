import React from 'react'
import { Link, Route } from 'react-router-dom';
//index.js 파일안에 있는 Buy, Game, Home, Study등 여러개의 컴포넌트를 한꺼번에 불러오기.(여러 컴포넌트를 로드할 때 유용)
import { Buy, Game, Home, Study} from './pages';
/* index.js 파일을 사용하지 않았을 때 import 방법
import Buy from './pages/Buy';
import Game from './pages/Game';
import Home from './pages/home';
import Study from './pages/Study';
*/
//리액트에서 싱글페이지 기반 웹페이지 구성을 어떻게하는지 연습하는 예제
const App09_SinglePage=()=>{
    return (
        <div>
            <h1>Router 테스트</h1>
            <ul>
                <h2>다른 페이지로 이동할 때 깜박이면서 이동하는 페이지 전환.(싱글 페이지 기반 X)</h2>
                {/* 누를 때 깜박이면서 다른 페이지로 이동한다.(싱글 페이지 X) */}
                <li><a href="/">home</a></li>
                <li><a href="/study">study</a></li>
                <li><a href="/game">game</a></li><br />
                <h2>리액트의 Link 속성을 이용해서 다른 페이지로 이동할 때 깜박임 없이 이동하는 페이지 전환.(싱글 페이지 기반 O)</h2>
                {/* Link 컴포넌트를 이용해 누를 때 다른 페이지로 이동한다.(싱글 페이지 O, 한 페이지 내에서 특정 링크를 불러옴) */}
                <li><Link to="/">home</Link></li>
                <li><Link to="/study">study</Link></li>
                <li><Link to="/game">game</Link></li><br />
                <h2>리액트의 Link 속성을 이용해서 파라미터 값으로 "star" or "cart"를 넘긴다.(싱글 페이지 기반 O)</h2>
                <li><Link to="/game/star">game</Link></li>
                <li><Link to="/game/cart">game</Link></li><br />
                <h2>리액트의 Link 속성을 이용해서 파라미터로 num and name을 넘긴다.(싱글 페이지 기반 O)</h2>
                <li><Link to="/buy?num=1&name=Handphone">1번 상품 사기</Link></li>
                <li><Link to="/buy?num=2&name=Notebook">2번 상품 사기</Link></li>
                <li><Link to="/buy?num=3&name=Desktop">3번 상품 사기</Link></li>
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

export default App09_SinglePage;