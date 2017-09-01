import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

const PageHead = () => {
	return (
		<Segment inverted color='olive'>
			<Header as='h1' textAlign='center'
			style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '.5em' }}>
				NY Times Scrubber
			</Header>
			<Header	as='h2' textAlign='center'
			style={{ fontSize: '1.7em', fontWeight: 'normal' }}>
				Search for articles and save your favs.
			</Header>
	    </Segment>
	)
}

export default PageHead;