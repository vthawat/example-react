import React from 'react';
import PropTypes from 'prop-types';
import IconFA from '../icon/IconFA';

class TimelineItem extends React.Component {
	render() {
		return (
			<li>
				{this.props.icon}
				<div class="timeline-item">
					{this.props.children}
        </div>
			</li>
		)
	}
}
export default TimelineItem;

TimelineItem.propTypes = {
	icon: PropTypes.element
}
TimelineItem.defaultProps = {
	icon: <IconFA name="minus" />
}

/**
 * Time Item 
 */
TimelineItem.Time = (props) => {
	return (
		<span class="time">{props.icon} {props.text}</span>
	)
}
TimelineItem.Time.propTypes = {
	icon: PropTypes.element,
	text: PropTypes.string.isRequired
}
TimelineItem.Time.defaultProps = {
	icon: <IconFA name="clock-o" />
}

/**
 * Header Item 
 */
TimelineItem.Header = (props) => {
	return (
		<h3 className="timeline-header">
			<a href={props.link}>{props.title}</a>
		</h3>
	)
}
TimelineItem.Header.propTypes = {
	title: PropTypes.string.isRequired
}

/**
 *  Body Item 
 */
TimelineItem.Body = (props) => {
	return (
		<div className="timeline-body">
			{props.children}
		</div>
	)	
}

/**
 * Footer Item 
 */
TimelineItem.Footer = (props) => {
	return (
		<div className="timeline-footer">
			{props.children}
		</div>
	)
}