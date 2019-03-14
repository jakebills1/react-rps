import React from "react";
import { Header, } from 'semantic-ui-react'


const Results = ({ winner, }) => (
  <Header as="h1">Results: {winner}</Header>
)

export default Results;