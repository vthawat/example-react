import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Callout extends React.Component {
	render() {
		const { bsStyle } = this.props;

		let bsClasses = classNames({
			'callout': true,
			'callout-danger': bsStyle === 'danger',
			'callout-info': bsStyle === 'info',
			'callout-warning': bsStyle === 'warning',
			'callout-success': bsStyle === 'success'
		});
		return (
			<div className={bsClasses}>
				<h4>{this.props.title}</h4>
				<p>{this.props.text}</p>
			</div>
		)
	}
}
export default Callout

Callout.propTypes = {
	bsStyle: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string
}