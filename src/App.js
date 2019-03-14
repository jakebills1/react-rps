import React, { Component } from 'react';
import { Image, Container, Header, Button, } from 'semantic-ui-react';
import rock from './rock.png';
import paper from './paper.png';
import scissors from './scissors.png';


class App extends Component {
  state = { player1Choice: "",
            player2Choice: "",
            turn: "player1",
  }
  clickHandler = (choice) => {
    debugger
  }
  componentDidUpdate() {
    
  }
  render() {
    return (
      <Container style={styles.parentContainer}>
        <Header as="h1">Rock, Paper, Scissors</Header>
        <div style={styles.container}>
          <Button onClick={() => this.clickHandler("rock")}>
            <Image src={rock}/>
          </Button>
          <Button onClick={() => this.clickHandler("paper")}>
            <Image src={paper}/>
          </Button>
          <Button onClick={() => this.clickHandler("scissors")}>
            <Image src={scissors}/>
          </Button>
        </div>
      </Container>
    );
  }
}
const styles = {
  container: {
    display: "flex",
  },
  parentContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
}
    


export default App;
          
          

