import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function Square(props) {
    return ( 
        <button className="square" onClick=
  {props.onClick}>
          {props.value}
        </button>
      );
    }
  
  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(34).fill(null),
        xIsNext: true,
      };
    }
    
    handleClick(i) {
      const squares = this.state.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? '❌' : '⭕️';
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
      });
    }

    renderSquare(i) {
      return (
        <Square 
          value={this.state.squares[i]} 
          onClick={() => this.handleClick(i)}
      />
      );
    }
  
    render() {
      const winner =
      calculateWinner(this.state.squares);
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext
    ? '❌' : '⭕️');
      }
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
          </div>
          <div className="board-row">
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            {this.renderSquare(9)}
            {this.renderSquare(10)}
            {this.renderSquare(11)}
            {this.renderSquare(12)}
            {this.renderSquare(13)}
          </div>
          <div className="board-row">
            {this.renderSquare(14)}
            {this.renderSquare(15)}
            {this.renderSquare(16)}
            {this.renderSquare(16)}
            {this.renderSquare(17)}
            {this.renderSquare(18)}
            {this.renderSquare(19)}
          </div>
          <div className="board-row">
            {this.renderSquare(20)}
            {this.renderSquare(21)}
            {this.renderSquare(22)}
            {this.renderSquare(23)}
            {this.renderSquare(24)}
            {this.renderSquare(25)}
            {this.renderSquare(26)}
          </div>
          <div className="board-row">
            {this.renderSquare(27)}
            {this.renderSquare(28)}
            {this.renderSquare(29)}
            {this.renderSquare(30)}
            {this.renderSquare(31)}
            {this.renderSquare(32)}
            {this.renderSquare(33)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2, 3, 4, 5, 6, 7],
      [8, 9, 10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19, 20, 21],
      [22, 23, 24, 25, 26, 27, 28],
      [29, 30, 31, 32, 33, 0, 3],
      [6, 9, 12, 15, 18, 21, 24],
      [27, 30, 33, 1, 4, 7, 10],
      [13, 16, 19, 22, 25, 28, 31],
      [1, 4, 7, 10, 13, 16, 19],
      [22, 25, 28, 31, 0, 3, 6],
      [9, 12, 15, 18, 21, 24, 27], 
      [30, 0, 3, 6, 9, 12, 15],
      [18, 21, 24, 27, 30, 33, 2], 
      [5, 8, 11, 14, 17, 20, 23], 
      [25, 28, 31, 0, 3, 6, 9], 
      [12, 15, 18, 21, 23, 26, 29],
      [32, 1, 4, 7, 10, 13, 16, 19], 
      [22, 25, 28, 31, 0, 3, 6],
      [9, 12, 15, 18, 21, 24, 27],
      [30, 33, 2, 5, 8, 11, 14],
      [17, 20, 23, 26, 29, 32, 1], 
      [4, 7, 10, 13, 16, 19, 22], 
      [25, 28, 31, 0, 3, 6, 9],
      [12, 15, 18, 21, 24, 27, 30], 
      [33, 2, 5, 8, 11, 14, 17], 
      [26, 29, 32, 1, 4, 7, 10],
      [13, 16, 19, 22, 25, 28, 30],
      [33, 2, 5, 8, 11, 14, 17],
      [19, 22, 25, 28, 31, 0, 3], 
      [6, 9, 12, 15, 18, 21, 24],
      [27, 30, 33, 2, 5, 8, 11],
      [14, 17, 20, 23, 26, 29, 32],
      [1, 4, 7, 10, 13, 16, 19],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c, d, e, f, g] = lines[i];
      if (squares[a] && squares[a] === squares[b] &&
    squares[a] === squares[c] && squares[a] === squares[d] &&
    squares[a] === squares[e] && squares[a] === squares[f] &&
    squares[a] === squares[g]) {
      return squares[a];
     }
    }
    return null;
  }
