import React, { Component } from 'react';
import { Message, Button, Grid } from 'semantic-ui-react';

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
            <p>
              Published: {this.props.date}
            </p>
          </Grid.Column>
          <Grid.Column width={2}>
            <Button content="Save"/>
          </Grid.Column>
        </Grid>
      </Message>
    )
  }
}

export default SearchedArticle;