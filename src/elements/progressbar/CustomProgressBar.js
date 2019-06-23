import React from 'react';
import { ProgressBar } from 'react-bootstrap';

class CustomProgressBar extends React.Component {
	render() {
		return (			
			<ProgressBar now={30} bsClass="primary" />			
		)
	}
}
export default CustomProgressBar;