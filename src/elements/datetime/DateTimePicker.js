import React from 'react';
import PropTypes from 'prop-types';
import Datetime from 'react-datetime';
import InputGroup from 'react-bootstrap/es/InputGroup';
import './DateTimePicker.css';

class DateTimePicker extends React.Component {
	render() {
		const { addonIcon, addonAlign } = this.props;
		return (
			<InputGroup className="date">
				{ addonAlign === 'left' && <InputGroup.Addon>{addonIcon}</InputGroup.Addon> }
				<Datetime {...this.props} />
				{ addonAlign === 'right' && <InputGroup.Addon>{addonIcon}</InputGroup.Addon> }
			</InputGroup>
		)
	}
}
export default DateTimePicker;

DateTimePicker.propTypes = {
	addonIcon: PropTypes.element.isRequired,
	addonAlign: PropTypes.string
}
DateTimePicker.defaultProps = {
	addonIcon: <i className="fa fa-calendar"></i>,
	addonAlign: 'left'
}