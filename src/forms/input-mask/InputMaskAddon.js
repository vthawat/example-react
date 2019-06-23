import React from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';
import InputGroup from 'react-bootstrap/es/InputGroup';

class InputMaskAddon extends React.Component {
	render() {
		const { addonAlign, addonText } = this.props;
		return (
			<InputGroup>
				{ addonAlign === 'left' && <InputGroup.Addon>{addonText}</InputGroup.Addon> }
				<InputMask className="form-control" {...this.props} />
				{ addonAlign === 'right' && <InputGroup.Addon>{addonText}</InputGroup.Addon> }
			</InputGroup>
		)
	}
}
export default InputMaskAddon;

InputMaskAddon.propTypes = {
	addonText: PropTypes.string.isRequired || PropTypes.element.isRequired,
	addonAlign: PropTypes.string
}
InputMaskAddon.defaultProps = {
	addonText: '@',
	addonAlign: 'left'
}