import React, { Component } from 'react';
import { Segment, Header } from 'semantic-ui-react';
import SavedArticle from './SavedArticle';
import sampleSaved from '../utils/sampleSaved.json';

class Saved extends Component {
  render() {
    return (
      <Segment>
        <Header as='h2' textAlign='center'>Saved</Header>
        {sampleSaved.map(article => 
          <SavedArticle key={article.id} {...article} />
          )}
      </Segment>
    )
  }
}

export default Saved;