import React from 'react';
import { NavLink, Route, withRouter} from 'react-router-dom';
import { Buy, Game, Home, Study } from './pages';

// 하단에서 withRouter() 를 활용해서 export 했기 때문에
// location, match, history props 가 전달된다. 
const App09_SinglePage=({location, match, history})=>{
   
    const activeStyle={
        color: "red",
        fontWeight:"bold"
    };

    const [path, setPath]=React.useState('');
    //input 요소에 문자열을 입력 했을때 경로를 바꿔주고
    const changed=(e)=>{
        setPath(e.target.value);
    };
    //이동 버튼을 눌렀을때 해당 경로로 이동 시킨다.
    const move=()=>{
        console.log(path);
        //history 객체를 이용해서 강제 이동 시킨다. 
        history.push(path);
    };

    return (
        <div>
            <h1>Router 테스트</h1>
            <input onChange={changed} value={path} type="text" placeholder="이동할경로 입력..."/>
            <button onClick={move}>이동</button>
            <ul>
                <li><NavLink to="/" activeStyle={activeStyle}>home</NavLink></li>
                <li><NavLink to="/study" activeStyle={activeStyle}>study</NavLink></li>
                <li><NavLink to="/game" activeStyle={activeStyle}>game</NavLink></li>
                <li><NavLink to="/game/star" activeStyle={activeStyle}>star game</NavLink></li>
                <li><NavLink to="/game/cart" activeStyle={activeStyle}>cart game</NavLink></li>
                <li><NavLink to="/buy?num=1&name=handphone" activeStyle={activeStyle}>1 번 상품 사기</NavLink></li>
                <li><NavLink to="/buy?num=2&name=computer" activeStyle={activeStyle}>2 번 상품 사기</NavLink></li>
                <li><NavLink to="/buy?num=3&name=coffee" activeStyle={activeStyle}>3 번 상품 사기</NavLink></li>
            </ul>
            <Route exact path="/" component={Home}/>
            <Route path="/study" component={Study}/>
            <Route exact path="/game" component={Game}/>
            <Route path="/game/:name" component={Game}/>
            <Route path="/buy" component={Buy}/>
        </div>
    );
};

//withRouter() 함수를 호출해서 export 해주면 Router 에 관련된
//props 가 이 컴포넌트에 전달된다. 
export default withRouter(App09_SinglePage);