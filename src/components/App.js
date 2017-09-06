import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import io from 'socket.io-client';
import PageHead from './PageHead';
import Search from './Search';
import Results from './Results';
import Saved from './Saved';
import API from '../utils/API';

const socket = io()

class App extends Component {
  state = {
    topic: '',
    start: 1900,
    end: 2050,
    results: [],
    saved: []
  }

  searchNYT = (query, start, end) => {
    API.search(query, start, end)
    .then(res => {
      this.setState({results: res})
    })
    .catch(err => this.setState({ error: err.message }));
  }

  getSaved = event => {
    API.fetchSaved()
    .then(res => {
      this.setState({saved: res})
    })
    .catch(err => this.setState({ error: err.message }));
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchNYT(this.state.topic, this.state.start, this.state.end)
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSave = id => {
    const {article_id, title, url, date} = this.state.results.find(el => el.article_id === id)
    socket.emit('refresh', 'Someone saved an article')
    API.save(article_id, title, url, date)
    .then(res => this.getSaved())
    .catch(err => this.setState({ error: err.message }));
  }

  removeSaved = id => {
    socket.emit('refresh', 'Someone deleted a saved article')
    API.deleteSaved(id)
    .then(res => this.getSaved())
    .catch(err => this.setState({ error: err.message }));
  }

  componentDidMount() {
    this.getSaved()
    socket.on('refresh', () => {
      this.getSaved()
    });
  }

  render() {
    return (
      <Container>
        <PageHead />
        <Search handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange}/>
        <Results results={this.state.results} saved={this.state.saved} handleSave={this.handleSave} />
        <Saved saved={this.state.saved} removeSaved={this.removeSaved} />
      </Container>
    );
  }
}


export default App;
