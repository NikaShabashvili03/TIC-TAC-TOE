import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [xo, setXO] = useState([
    '', '', '',
    '', '', '',
    '', '', '',
  ]);
  const [count, setCount] = useState(0)
  const [disabled, setDisabled] = useState(false);
  const [countX, setCountX] = useState(0);
  const [countO, setCountO] = useState(0);
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const handleClick = (e,i) => {
    e.preventDefault();
    setDisabled(true);
    xo[i] = 'X';
    setCount(count + 1);
    if(count % 2){
      xo[i] = 'O';
      setCount(0);
    }
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (xo[a] && xo[a] === xo[b] && xo[a] === xo[c]) {
        count == 0 && setCountX(countX + 1);
        count == 1 && setCountO(countO + 1);
        setXO([ 
          '', '', '',
          '', '', '',
          '', '', '',
          ]);
        setCount(0);
      }
    }
  }
  const resetGame = () => {
    setXO([ 
      '', '', '',
      '', '', '',
      '', '', '',
      ]);
    setCount(0)
  }
  const NewRount = () => {
    setXO([ 
      '', '', '',
      '', '', '',
      '', '', '',
      ]);
    setCount(0)
    setCountO(0);
    setCountX(0);
  }
  return (
    <div className="App">
        <h2 className='title'>TIC TAC TOE</h2>
      <div className='moves__score'>
        <div className='one'>
          <span style={count == 1 ? {display: 'none'} : {display: 'flex'}}>.</span>{countX}
         </div>
         <h1>:</h1> 
        <div className='two'>
          <span style={count == 0 ? {display: 'none'} : {display: 'flex'}}>.</span>{countO}
        </div>
      </div>
      <div className='Game'>
      {xo.map((xo, i) => <button key={i} className='Gamebtn'
                          disabled={
                            xo !== "" && disabled
                          }
                          onClick={(e) => {handleClick(e, i)}}><h2  style={{color: xo !== 'X' ? "rgba(1, 69, 1, 0.549)" : 'white'}}>{xo}</h2></button>)}
      </div>
      <div className='reset'>
        <button className="reset" onClick={NewRount}>RESET GAME</button>
        <button className="reset" onClick={resetGame}>RESET ROUND</button>
        </div>
    </div>
  );
}

export default App;
