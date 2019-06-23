import React from 'react';
import PropTypes from 'prop-types';

class SocialButton extends React.Component {
	render() {
		const buttonClasses = 'btn btn-block btn-social btn-' + this.props.brand;
		const iconClasses = 'fa fa-' + this.props.brand;
		return (
			<a className={buttonClasses} href={this.props.link}>
				<i className={iconClasses}></i>
				{this.props.text}
			</a>
		)
	}
}
export default SocialButton;

SocialButton.propTypes = {
	brand: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	link: PropTypes.string
}