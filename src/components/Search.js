import React from 'react';
import { Segment, Header, Form, Button } from 'semantic-ui-react';

const Search = props => {
	return (
		<Segment>
			<Header as='h2' textAlign='center'>Search For Articles</Header>
			<Form size='huge'>
				<Form.Field>
				  <label>Topic</label>
				  <input name='topic' placeholder='Topic' 
				  onChange={props.handleInputChange} />
				</Form.Field>
				<Form.Group widths='equal'>
					<Form.Input type='number' min='1900' max='2050' 
					name='start' label='Start Year' placeholder='1990'
					onChange={props.handleInputChange} />
					<Form.Input type='number' min='1900' max='2050'
					name='end' label='End Year' placeholder='2000'
					onChange={props.handleInputChange} />
				</Form.Group>
				<Button type='submit' onClick={props.handleFormSubmit}>Submit</Button>
			</Form>
		</Segment>
	)
}

export default Search;