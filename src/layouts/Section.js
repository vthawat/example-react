import React from 'react';
import PropTypes from 'prop-types';

class Section extends React.Component {
	render() {
		return (
			<div className={`${'section'} ${this.props.className}`}>
				{ this.props.children}
			</div>
		)
	}
}
export default Section;

/**
 * Section Header 
 */
Section.Header = (props) => {
	return (
		<div className="section-header">
			<h3 className="title">{props.title}</h3>
			<p className="sub-title">{props.subTitle}</p>
		</div>
	)
}
Section.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string
}

/**
 * Section Body 
 */
Section.Body = (props) => {
	return (
		<div className="section-body">
			{props.children}
		</div>
	)
}

/**
 * Section Footer 
 */
Section.Footer = (props) => {
	return (
		<div className="section-footer">
			{props.children}
		</div>
	)
}