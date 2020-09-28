// src/pages/Game.js 파일
import React from 'react';

const Game=({match})=>{
    return(
        <div>
            <h2>Game 페이지 입니다.</h2>
            <p>어쩌구..저쩌구..</p>
            <p>
                <strong>{match.params.name}</strong>
                게임을 시작합니다.
            </p>
        </div>
    );
};

export default Game;