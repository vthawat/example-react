import React from 'react';
import PropTypes from 'prop-types';

class TimelineLabel extends React.Component {
	render() {
		const classes = 'bg-' + this.props.bgColor;
		return (
			<li className="time-label">
				<span className={classes}>{this.props.text}</span>
			</li>
		)
	}
}
export default TimelineLabel;

TimelineLabel.propTypes = {
	bgColor: PropTypes.string,
	text: PropTypes.string.isRequired
}