import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import PageHead from './PageHead';
import Search from './Search';
import Results from './Results';
import Saved from './Saved';

class App extends Component {
  render() {
    return (
      <Container>
        <PageHead />
        <Search />
        <Results />
        <Saved />
      </Container>
    );
  }
}

export default App;
