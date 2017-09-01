import React, { Component } from 'react';
import { Segment, Header } from 'semantic-ui-react';
import SearchedArticle from './SearchedArticle';
import sampleSearch from '../utils/sampleSearch.json';

class Results extends Component {
  render() {
    return (
      <Segment>
        <Header as='h2' textAlign='center'>Results</Header>
        {sampleSearch.map(article => 
          <SearchedArticle key={article.id} {...article} />
          )}
      </Segment>
    )
  }
}

export default Results;