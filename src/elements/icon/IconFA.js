import React from 'react';
import PropTypes from 'prop-types';

class IconFA extends React.Component {
	render() {
		let iconClass = 'fa fa-' + this.props.name;
		if (this.props.className)
			iconClass += ' ' +this.props.className;
		return (		
			<i className={iconClass} />
		)
	}
}
IconFA.propTypes = {
	name: PropTypes.string.isRequired,
	className: PropTypes.string
}
export default IconFA;
