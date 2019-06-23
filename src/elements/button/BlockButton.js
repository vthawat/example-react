import React from 'react';
import Button from 'react-bootstrap/es/Button';

class BlockButton extends React.Component {
	render() {
		return (
			<Button {...this.props} block={true}>{this.props.children}</Button>
		)
	}
}
export default BlockButton;