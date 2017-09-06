import React from 'react';
import { Segment, Header, Message } from 'semantic-ui-react';
import SearchedArticle from './SearchedArticle';

const Results = props => {
  return (
    <Segment>
      <Header as='h2' textAlign='center'>Results</Header>
      { props.results.length > 0 ?
        props.results.map(article => 
        <SearchedArticle handleSave={props.handleSave} isSaved={props.saved.find(el => el.article_id === article.article_id)} 
        key={article.article_id} {...article} />
        ) :
        <Message warning><h2>Search for some articles!</h2></Message>
      }
    </Segment>
  )
}

export default Results;