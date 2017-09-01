import React from 'react';
import { Segment, Header } from 'semantic-ui-react';
import SearchedArticle from './SearchedArticle';

const Results = props => {
  return (
    <Segment>
      <Header as='h2' textAlign='center'>Results</Header>
      {props.results.map(article => 
        <SearchedArticle key={article.id} {...article} />
        )}
    </Segment>
  )
}

export default Results;