import React, { useState } from 'react';

import Square from './Square';

const Board = () => {

    const [state, setState] = useState(Array(9).fill(null));
    const [is0, setIs0] = useState(true);

    const checkWinner = () => {

        const winlogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let logic of winlogic) {
            const [a, b, c] = logic;
            if (state[a] != null && state[a] === state[b] && state[b] === state[c]) { return state[a]; }
        }

        return false;
    };

    let iswinner = checkWinner();

    const handleClick = (index) => {
        if(state[index]!=null) {return;}
        const copystate = [...state];
        if (is0) {
            copystate[index] = '0';
            setState(copystate);
        }
        else {
            copystate[index] = 'X';
            setState(copystate);
        }
        setIs0(!is0);

    };

    return (
        <>
            {iswinner ?
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <div className="header">
                        <h1> {iswinner} WON!!</h1>
                    </div>

                    <div className="play-again">
                        <button className="play-again-btn" onClick={() => {
                            setState(Array(9).fill(null));

                        }}>Play Again</button>
                    </div>

                </div> :
                <>
                <h1 style={{padding:30}}>Player {is0?'0':'X'} Move</h1>
                <div className="board-container">
                    <div className="board-row">
                        <Square onclick={() => { handleClick(0) }} val={state[0]} />
                        <Square onclick={() => { handleClick(1) }} val={state[1]} />
                        <Square onclick={() => { handleClick(2) }} val={state[2]} />
                    </div>
                    <div className="board-row">
                        <Square onclick={() => { handleClick(3) }} val={state[3]} />
                        <Square onclick={() => { handleClick(4) }} val={state[4]} />
                        <Square onclick={() => { handleClick(5) }} val={state[5]} />
                    </div>
                    <div className="board-row">
                        <Square onclick={() => { handleClick(6) }} val={state[6]} />
                        <Square onclick={() => { handleClick(7) }} val={state[7]} />
                        <Square onclick={() => { handleClick(8) }} val={state[8]} />
                    </div>
                </div>
                </>
            }
        </>

    );
};

export default Board;