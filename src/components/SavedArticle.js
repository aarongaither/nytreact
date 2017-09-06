import React, { Component } from 'react';
import { Message, Button, Grid, Label } from 'semantic-ui-react';
import moment from 'moment';

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
            <Label ribbon color='blue'>
              Published: {this.props.date_published}
            </Label> 
            <Label pointing color='teal'>
              Saved: {moment(this.props.created_at).format('MM/DD/YYYY')}
            </Label>
          </Grid.Column>
          <Grid.Column width={2}>
            <Button negative onClick={() => this.props.removeSaved(this.props.article_id)} content="Delete"/>
          </Grid.Column>
        </Grid>
      </Message>
    )
  }
}

export default SavedArticle;