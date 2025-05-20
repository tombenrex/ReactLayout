import { useState, useEffect, useCallback } from 'react';
import './tictac.css';

function Square({ value, onSquareClick }) {
  return (
    <button className='square' onClick={onSquareClick} disabled={!!value}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay, isComputerTurn }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i] || isComputerTurn) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  const status = winner
    ? 'Winner: ' + winner
    : xIsNext
    ? 'Your turn (X)'
    : 'Computer is making a move...';

  return (
    <>
      <div className={`status ${winner ? 'winner' : ''}`}>{status}</div>
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className='board-row'>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function TicTac() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [round, setRound] = useState(1);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = useCallback(
    (nextSquares) => {
      setHistory((prevHistory) => {
        const nextHistory = [
          ...prevHistory.slice(0, currentMove + 1),
          nextSquares,
        ];
        setCurrentMove(nextHistory.length - 1);
        return nextHistory;
      });
    },
    [currentMove]
  );

  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setRound(1);
  }

  useEffect(() => {
    if (!xIsNext && !calculateWinner(currentSquares)) {
      const timeout = setTimeout(() => {
        const emptyIndices = currentSquares
          .map((val, idx) => (val === null ? idx : null))
          .filter((val) => val !== null);

        if (emptyIndices.length > 0) {
          const randomIndex =
            emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
          const nextSquares = currentSquares.slice();
          nextSquares[randomIndex] = 'O';
          setHistory((prevHistory) => {
            const nextHistory = [
              ...prevHistory.slice(0, currentMove + 1),
              nextSquares,
            ];
            setCurrentMove(nextHistory.length - 1);
            return nextHistory;
          });
        }
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [xIsNext, currentSquares, currentMove]);

  return (
    <div className='game'>
      <h3>Round: {round}</h3>
      <div className='game-board'>
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          isComputerTurn={!xIsNext}
        />
      </div>
      <div className='game-info'>
        <button onClick={resetGame}>Reset Game</button>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
