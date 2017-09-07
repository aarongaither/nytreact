import React, { Component } from 'react';
import { Message, Button, Grid, Label } from 'semantic-ui-react';
import moment from 'moment';

class SavedArticle extends Component {
  render(){
    return (
      <Message positive>
        <Grid container>
          <Grid.Column width={13}>
            <Message.Header>
              <a href={this.props.url}>
                {this.props.title}
              </a>
            </Message.Header>
            <Label pointing color='blue'>
              Published: 
              <Label.Detail>
              {this.props.date_published}
              </Label.Detail>
            </Label> 
            <Label pointing color='teal'>
              Saved: 
              <Label.Detail>
              {moment(this.props.created_at).format('MM/DD/YYYY')}
              </Label.Detail>
            </Label>
          </Grid.Column>
          <Grid.Column width={3}>
            <Button negative onClick={() => this.props.removeSaved(this.props.article_id)} content="Delete"/>
          </Grid.Column>
        </Grid>
      </Message>
    )
  }
}

export default SavedArticle;