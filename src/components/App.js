import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import PageHead from './PageHead';
import Search from './Search';
import Results from './Results';
import Saved from './Saved';
import API from '../utils/API';


class App extends Component {
  state = {
    topic: '',
    start: 1900,
    end: 2050,
    results: []
  }

  searchNYT = (query, start, end) => {
    API.search(query, start, end)
    .then(res => this.setState({results: res}))
    .catch(err => this.setState({ error: err.message }));
  }

  componentDidMount() {
    this.searchNYT('trump', 2000, 2017)
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.search(this.state.topic, this.state.start, this.state.end)
      .then(res => {
        // if (res.data.status === "error") {
        //   throw new Error(res.data.message);
        // }
        this.setState({ results: res});
      })
      .catch(err => this.setState({ error: err.message }));
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Container>
        <PageHead />
        <Search handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange}/>
        <Results results={this.state.results} />
        <Saved />
      </Container>
    );
  }
}

export default App;
