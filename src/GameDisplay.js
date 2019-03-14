import React from 'react';
import { Image, Container, Header, Button, } from 'semantic-ui-react';
import rock from './rock.png';
import paper from './paper.png';
import scissors from './scissors.png';
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
// const { clickHandler, } = this.props;
const GameDisplay = ({clickHandler, }) => (
  <Container style={styles.parentContainer}>
    <Header as="h1">Rock, Paper, Scissors</Header>
    <div style={styles.container}>
      <Button onClick={() => clickHandler("rock")}>
        <Image src={rock}/>
      </Button>
      <Button onClick={() => clickHandler("paper")}>
        <Image src={paper}/>
      </Button>
      <Button onClick={() => clickHandler("scissors")}>
        <Image src={scissors}/>
      </Button>
    </div>
  </Container>
)

export default GameDisplay;