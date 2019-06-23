import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class AppButton extends React.Component {
	render() {
		const { badgeStyle } = this.props;
		const badgeClasses = classNames({
			'badge': true,
			'bg-green': (badgeStyle === 'green' || badgeStyle === 'success' ),
			'bg-red': (badgeStyle === 'red' || badgeStyle === 'danger'),
			'bg-yellow': (badgeStyle === 'yellow' || badgeStyle === 'warning'),
			'bg-aqua': (badgeStyle === 'info' || badgeStyle === 'info'),
			'bg-teal': badgeStyle === 'teal',
			'bg-maroon': badgeStyle === 'maroon',
			'bg-purple': badgeStyle === 'purple',
			'bg-navy': badgeStyle === 'navy',
			'bg-orange': badgeStyle === 'orange',
			'bg-olive': badgeStyle === 'olive'
		});
		return (			
			<a className="btn btn-app" href={this.props.link}>
				{ this.props.badgeText && <span className={badgeClasses}>{this.props.badgeText}</span>}
				{this.props.children}
			</a>			
		)
	}
}
AppButton.propTypes = {
	link: PropTypes.string,
	badgeText: PropTypes.string,
	badgeStyle: PropTypes.string
}
export default AppButton;