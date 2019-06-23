import React from 'react';
import PropTypes from 'prop-types';

class Footbar extends React.Component {
	render() {
		return (
			<footer className="main-footer">
				<div className="pull-right hidden-xs">
					<b>Version</b> {this.props.version}
				</div>
				<strong>Copyright © {this.props.copyrightYear}</strong> {this.props.companyName} All rights	reserved.
			</footer>
		)
	}
}
export default Footbar;

Footbar.propTypes = {	
	version: PropTypes.string,
	copyrightYear: PropTypes.string,
	companyname: PropTypes.string
}