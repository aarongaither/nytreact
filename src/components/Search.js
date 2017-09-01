import React, { Component } from 'react';
import { Segment, Header, Form, Button } from 'semantic-ui-react';

class Search extends Component {
	render() {
		return (
			<Segment>
				<Header as='h2' textAlign='center'>Search For Articles</Header>
				<Form size='huge'>
					<Form.Field>
					  <label>Topic</label>
					  <input placeholder='Topic' />
					</Form.Field>
					<Form.Group widths='equal'>
						<Form.Input type='number' min='1900' max='2050' label='Start Year' placeholder='1990' />
						<Form.Input type='number' min='1900' max='2050' label='End Year' placeholder='2000' />
					</Form.Group>
					<Button type='submit'>Submit</Button>
				</Form>
			</Segment>
		)
	}
}

export default Search;