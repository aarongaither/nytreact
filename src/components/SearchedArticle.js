import React, { Component } from 'react';
import { Message, Button, Grid, Label } from 'semantic-ui-react';

class SearchedArticle extends Component {
  render(){
    return (
      <Message info>
        <Grid container>
          <Grid.Column width={13}>
            <Message.Header>
              <a href={this.props.url}>
                {this.props.title}
              </a>
            </Message.Header>
            <Label pointing color='blue'>
              Published: {this.props.date}
            </Label>
          </Grid.Column>
          <Grid.Column width={3}>
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