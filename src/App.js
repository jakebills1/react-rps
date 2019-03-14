import React, { Component } from 'react';
import GameDisplay from './GameDisplay';
import Results from './Results'


class App extends Component {
  state = { player1Choice: "",
            player2Choice: "",
            turn: true,
            showChoices: true,
            showResults: false,
            winner: "",
  }
  clickHandler = (choice) => {
    const { turn, } = this.state;
    if (turn) {
      this.setState({ player1Choice: choice, turn: !turn, });
    } else {
      this.setState({ player2Choice: choice, turn: !turn,  });
    }
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.player2Choice !== prevState.player2Choice) {
      this.game()
    }
  }
  game() {
    var gameWinner;
    const { player1Choice, player2Choice, showChoices, showResults, } = this.state;
    if (player1Choice === "rock") {
      if (player2Choice === "rock"){
        gameWinner = "Tie";
      } else if (player2Choice === "paper"){
        gameWinner = "Paper covers rock. Player 2 wins"
      } else {
        gameWinner = "Rock smashes scissors. Player 1 wins."
      }
    } else if (player1Choice === "paper"){
      if (player2Choice === "rock"){
        gameWinner = "Paper covers rock. Player 1 wins";
      } else if (player2Choice === "paper"){
        gameWinner = "Tie"
      } else {
        gameWinner = "Scissors cut paper. Player 2 wins"
      }
    } else {
      if (player2Choice === "rock"){
        gameWinner = "Rock smashes scissors. Player 2 wins.";
      } else if (player2Choice === "paper"){
        gameWinner = "Scissors cut paper. Player 1 wins"
      } else {
        gameWinner = "Tie."
      }
    }
    this.setState({ showChoices: !showChoices, showResults: !showResults, winner: gameWinner, })
  }
  render() {
    return (
      <div>
        { this.state.showChoices && <GameDisplay clickHandler={this.clickHandler} /> }
        { this.state.showResults && <Results winner={this.state.winner} />}
      </div>
    );
  }
}


export default App;
      
      



