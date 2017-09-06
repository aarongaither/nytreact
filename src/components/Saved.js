import React from 'react';
import { Segment, Header, Message } from 'semantic-ui-react';
import SavedArticle from './SavedArticle';

const Saved = props => {
    return (
      <Segment>
        <Header as='h2' textAlign='center'>Saved</Header>
        { props.saved.length > 0 ?
          props.saved.map(article => 
          <SavedArticle removeSaved={props.removeSaved} key={article.article_id} {...article} />
          ) :
          <Message warning><h2>No Saved Articles</h2></Message>
        }
      </Segment>
    )
}

export default Saved;