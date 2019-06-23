import React, { Component } from 'react';

class MainBody extends Component {
	render() {
		return (
			<div className="wrapper">
				{this.props.children}
			</div>
		)
	}
}
export default MainBody