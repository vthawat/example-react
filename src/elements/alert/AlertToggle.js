import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Alert from 'react-bootstrap/es/Alert';
import Button from 'react-bootstrap/es/Button';

class AlertToggle extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: false
		}
	}

	handleDismiss() {
		this.setState({ visible: false });
	}

	handleShow() {
		this.setState({ visible: true });
	}

	render() {
		let { bsStyle, icon, buttonBsSize, buttonBsStyle } = this.props;

		let iconTitle;
		if (icon) {
			iconTitle = icon
		} else {
			let iconClasses = classNames({				
				'fa': true,
				'fa-ban': bsStyle === 'danger',
				'fa-info-circle': bsStyle === 'info',
				'fa-warning': bsStyle === 'warning',
				'fa-check': bsStyle === 'success'
			});			
			iconTitle = <i className={iconClasses} />
		}

		if (this.state.visible) {
			return (
				<div>
					<Button 
						bsStyle={buttonBsStyle}
						bsSize={buttonBsSize}
						style={{ marginBottom: '7px'}}
						onClick={this.handleDismiss.bind(this)}>{this.props.closeButtonText}</Button>
					<Alert bsStyle={this.props.bsStyle} closeLabel={this.props.closeLabel}>
						{ this.props.title && <h4>{ iconTitle } {this.props.title}</h4> }
						<p>{this.props.text}</p>					
					</Alert>
				</div>
			)
		} else {
			return ( 
				<Button 
					bsStyle={buttonBsStyle}
					bsSize={buttonBsSize}
					onClick={this.handleShow.bind(this)}>{this.props.openButtonText}</Button> )
		}
	}
}
export default AlertToggle;

AlertToggle.propTypes = {
	bsStyle: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string.isRequired,
	openButtonText: PropTypes.string,
	closeButtonText: PropTypes.string,
	buttonBsStyle: PropTypes.string,
	buttonBsSize: PropTypes.string
}
AlertToggle.defaultProps = {
	bsStyle: 'warning',
	openButtonText: 'Show',
	closeButtonText: 'Close',
	buttonBsStyle: 'default',
}