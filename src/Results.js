import React from "react";
import { Header, } from 'semantic-ui-react'
const styles = {
  center:{  textAlign: "center", }
}

const Results = ({ winner, }) => (
  <Header as="h1" style={styles.center}>Results: {winner}</Header>
)

export default Results;