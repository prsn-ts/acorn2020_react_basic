import React, { Component } from 'react';
import './my_css/sass01.scss'

class App06_sass extends Component {
    render() {
        return (
            <div className="container">
                <h1>sass 테스트</h1>
                <ul className="msg-list">
                    <li>하나</li>
                    <li>두울</li>
                    <li>세엣</li>
                </ul>
            </div>
        );
    }
}

export default App06_sass;