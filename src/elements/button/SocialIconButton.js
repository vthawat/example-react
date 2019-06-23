import React from 'react';
import PropTypes from 'prop-types';

class SocialIconButton extends React.Component {
	render() {
		const buttonClasses = 'btn btn-social-icon btn-' + this.props.brand;
		const iconClasses = 'fa fa-' + this.props.brand;
		return (
			<a className={buttonClasses} href={this.props.link}>
				<i className={iconClasses}></i>
				{this.props.children}
			</a>
		)
	}
}
export default SocialIconButton;

SocialIconButton.propTypes = {
	brand: PropTypes.string.isRequired,
	link: PropTypes.string
}