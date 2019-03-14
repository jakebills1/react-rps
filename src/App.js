import React, { Component } from 'react';
import GameDisplay from './GameDisplay'


class App extends Component {
  state = { player1Choice: "",
            player2Choice: "",
            turn: true,
            showChoices: true,
  }
  clickHandler = (choice) => {
    const { turn, } = this.state;
    if (turn) {
      this.setState({ player1Choice: choice, turn: !turn, });
    } else {
      this.setState({ player2Choice: choice, turn: !turn,  });
      this.game()
    }

  }
  game() {
    debugger
    const { player1Choice, player2Choice, } = this.state;
    if (player1Choice === player2Choice) {
      alert("Its a tie")
    }
  }
  render() {
    return (
     <GameDisplay clickHandler={this.clickHandler} />
    );
  }
}


export default App;
          
          

