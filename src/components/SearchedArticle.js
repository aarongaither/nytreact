import React, { Component } from 'react';
import { Message, Button, Grid, Label } from 'semantic-ui-react';

class SearchedArticle extends Component {
  render(){
    return (
      <Message info>
        <Grid>
          <Grid.Column width={14}>
            <Message.Header>
              <a href={this.props.url}>
                {this.props.title}
              </a>
            </Message.Header>
            <Label ribbon color='blue'>
              Published: {this.props.date}
            </Label>
          </Grid.Column>
          <Grid.Column width={2}>
          {this.props.isSaved ? <Button positive content="Saved!" /> :
            <Button onClick={() =>
              this.props.handleSave(this.props.article_id)} content="Save"/>}
          </Grid.Column>
        </Grid>
      </Message>
    )
  }
}

export default SearchedArticle;