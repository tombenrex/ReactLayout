import TicTacToe from '../tictac/TicTac';

export default function TaskTwo() {
  return (
    <>
      <div className='home-container flex flex-wrap gap-2 justify-center'>
        <div className='home-card'>
          <h1>Tic Tac Toe Game</h1>
          <TicTacToe />
        </div>
      </div>
    </>
  );
}
