import React, { Component } from 'react';
import { Message, Button, Grid } from 'semantic-ui-react';

class SavedArticle extends Component {
  render(){
    return (
      <Message positive>
        <Grid>
          <Grid.Column width={14}>
            <Message.Header>
              <a href={this.props.url}>
                {this.props.title}
              </a>
            </Message.Header>
            <p>
              Saved: {this.props.date}
            </p>
          </Grid.Column>
          <Grid.Column width={2}>
            <Button content="Delete"/>
          </Grid.Column>
        </Grid>
      </Message>
    )
  }
}

export default SavedArticle;