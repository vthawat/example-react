import React from 'react';
import Button from 'react-bootstrap/es/Button';

class FlatButton extends React.Component {
	render() {		
		return (
			<Button className="btn-flat" {...this.props}>{this.props.children}</Button>
		)
	}
}
export default FlatButton;

